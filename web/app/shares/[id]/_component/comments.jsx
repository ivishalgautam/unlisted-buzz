"use client";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Share2 } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";
import { toast } from "@/hooks/use-toast";
import { MainContext } from "@/store/context";
import moment from "moment";
import { Blockquote } from "@/components/typography";
import { Badge } from "@/components/ui/badge";

const PLACEHOLDER_USERNAME = "Anonymous User";

export async function createComment(data) {
  const resp = await http().post(`${endpoints.comments.getAll}`, data);
  return resp.data;
}

export async function fetchCommentsByShareId(shareId) {
  const { data } = await http().get(
    `${endpoints.comments.getAll}/get-by-share-id/${shareId}`
  );

  return data;
}

export default function CommentSection({ shareId }) {
  //   const [comments, setComments] = useState([
  //     {
  //       id: 1,
  //       content: "This is a great post! Thanks for sharing.",
  //       timestamp: new Date(Date.now() - 3600000), // 1 hour ago
  //       replies: [
  //         {
  //           id: 2,
  //           content: "I totally agree with you!",
  //           timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
  //           replies: [],
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       content: "I have a question about this topic. Can anyone help?",
  //       timestamp: new Date(Date.now() - 900000), // 15 minutes ago
  //       replies: [],
  //     },
  //   ]);

  const { user } = useContext(MainContext);
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryFn: () => fetchCommentsByShareId(shareId),
    queryKey: [`comments-${shareId}`],
    enabled: !!shareId,
  });
  console.log({ data });
  const createMutation = useMutation({
    mutationFn: (data) => createComment({ ...data, share_id: shareId }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "The comment has been added and is pending review",
      });
      queryClient.invalidateQueries([`comments-${shareId}`]);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description:
          error?.response?.data?.message ??
          error?.message ??
          "Error while commenting!",
        variant: "destructive",
      });
    },
  });

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const payload = {
      comment_id: data?.comment_id ?? null,
      comment: data.content,
    };
    createMutation.mutate(payload);
    // setComments((prevComments) => [...prevComments, newComment]);
    reset();
  };

  const handleShare = (comment) => {
    alert(`Sharing comment: "${comment.content}"`);
  };

  const addReply = (parentId, replyContent) => {
    const payload = {
      comment_id: parentId,
      comment: replyContent,
    };
    createMutation.mutate(payload);

    // setComments((prevComments) => {
    //   return prevComments.map((comment) => {
    //     if (comment.id === parentId) {
    //       return {
    //         ...comment,
    //         replies: [
    //           ...comment.replies,
    //           {
    //             id: Date.now(),
    //             content: replyContent,
    //             timestamp: new Date(),
    //             replies: [],
    //           },
    //         ],
    //       };
    //     }
    //     return comment;
    //   });
    // });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {user && (
        <Card>
          <CardHeader>
            <CardTitle>Add a comment</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Textarea
                {...register("content", { required: true })}
                placeholder="Your comment"
              />
              <Button type="submit">Comment</Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="mt-8 space-y-4">
        {data?.comments?.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            onShare={handleShare}
            onAddReply={addReply}
          />
        ))}
      </div>
    </div>
  );
}

function CommentCard({ comment, onShare, onAddReply, isReplyShow = true }) {
  const [isReplying, setIsReplying] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [showReplies, setShowReplies] = useState([]);

  const onSubmitReply = (data) => {
    onAddReply(comment.id, data.content);
    reset();
    setIsReplying(false);
  };

  return (
    <Card className="relative">
      {!comment.is_reviewed && (
        <Badge className={"absolute top-2 right-2"} variant={"destructive"}>
          Under review
        </Badge>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage
                src={
                  comment.avatar ??
                  `https://api.dicebear.com/6.x/initials/svg?seed=${PLACEHOLDER_USERNAME}`
                }
              />
              <AvatarFallback>{(comment.fullname ?? "")[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-sm font-medium">
                {comment.fullname ?? ""}
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                {moment(comment.created_at).format("DD MMM, YYYY, HH:mm A")}
              </p>
            </div>
          </div>
          {/* <Button variant="ghost" size="icon" onClick={() => onShare(comment)}>
            <Share2 className="h-4 w-4" />
          </Button> */}
        </div>
      </CardHeader>
      <CardContent>
        <Blockquote className={"text-sm mt-0"}>{comment.comment}</Blockquote>
      </CardContent>
      {isReplyShow && (
        <CardFooter className="flex flex-col items-start space-y-4">
          <Button
            variant="outline"
            onClick={() => setIsReplying(!isReplying)}
            className="text-xs"
          >
            {isReplying ? "Cancel" : "Reply"}
          </Button>

          {isReplying && (
            <form
              onSubmit={handleSubmit(onSubmitReply)}
              className="w-full space-y-4"
            >
              <Textarea
                {...register("content", { required: true })}
                placeholder="Your reply"
              />
              <Button type="submit">Submit Reply</Button>
            </form>
          )}
        </CardFooter>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <CardContent>
          <Button
            variant="ghost"
            onClick={() => {
              showReplies.includes(comment.id)
                ? setShowReplies(
                    showReplies.filter((prev) => comment.id !== prev)
                  )
                : setShowReplies((prev) => [...prev, comment.id]);
            }}
            type={"button"}
            className="mb-4 rounded-full text-primary"
          >
            {`${comment.replies.length} Replies`}
          </Button>

          {showReplies.includes(comment.id) && (
            <div className="pl-6 border-l-2 border-gray-200 space-y-4">
              {comment.replies.map((reply) => (
                <CommentCard
                  key={reply.id}
                  comment={reply}
                  onShare={onShare}
                  onAddReply={onAddReply}
                  isReplyShow={false}
                />
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
