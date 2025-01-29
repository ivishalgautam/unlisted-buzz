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
import { useQuery } from "@tanstack/react-query";

export function ViewDialog({ isOpen, setIsOpen, id }) {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: fetchComment(id),
    queryKey: [`comment-${id}`],
    enabled: !!id && !!isOpen,
  });

  if (isError) return error?.message ?? "Error fetching comment!";
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Comment?</DialogTitle>
          <DialogDescription>Review this comment</DialogDescription>
        </DialogHeader>
        <div>{isLoading ? <Spinner /> : JSON.stringify(data)}</div>
        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
