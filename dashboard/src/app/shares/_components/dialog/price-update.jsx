import SharePriceUpdate from "@/components/forms/share-price-update";
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

export function PriceUpdateDialog({ isOpen, setIsOpen, createMutation }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update price?</DialogTitle>
          <DialogDescription>Update the share price</DialogDescription>
        </DialogHeader>
        <div>
          <SharePriceUpdate createMutation={createMutation} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
