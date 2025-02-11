import CommentForm from "@/components/forms/comment";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fetchComment } from "@/server/comment";
import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export function ViewDialog({ isOpen, setIsOpen, id }) {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchComment(id),
    queryKey: [`comment-${id}`],
    enabled: !!id && !!isOpen,
  });

  const updateMutation = useMutation({
    mutationFn: async (data) => {
      return await http().put(`${endpoints.comments.getAll}/${id}`, data);
    },
    onSuccess: () => {
      toast.success("Updated.");
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message ?? error?.message ?? "error");
    },
  });

  console.log({ data });

  if (isError) return error?.message ?? "Error fetching comment!";
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Comment?</DialogTitle>
          <DialogDescription>Review this comment</DialogDescription>
        </DialogHeader>
        <div>
          {isLoading ? (
            <Spinner />
          ) : (
            <CommentForm id={id} updateMutation={updateMutation} type="edit" />
          )}
        </div>
        <DialogFooter className="sr-only gap-2">
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
