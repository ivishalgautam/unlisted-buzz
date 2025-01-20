import { TransactionForm } from "@/components/forms/transaction";
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

export function TransactionDialog({
  isOpen,
  setIsOpen,
  createMutation,
  shareType,
  type,
  id,
  shareId,
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <span className="capitalize">{type}</span> <span>{shareType}</span>{" "}
            Share
          </DialogTitle>
          <DialogDescription className="capitalize">{type}</DialogDescription>
        </DialogHeader>
        <div>
          <TransactionForm {...{ id, createMutation, type, shareId }} />
        </div>
        <DialogFooter className="gap-2"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
