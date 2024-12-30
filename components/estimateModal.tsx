import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogProps {
  open: boolean;
  onClose: (open: boolean) => void;
}
export default function EstimateModal({ open, onClose }: DialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tell Us About Your Project</DialogTitle>
        </DialogHeader>
        <form method="POST">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Contact</label>
            <input type="phone" name="phone" id="phone" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input type="address" name="address" id="address" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
