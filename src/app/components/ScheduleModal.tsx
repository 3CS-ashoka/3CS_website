import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface ScheduleModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  photoUrl?: string;
}

export function ScheduleModal({ isOpen, onOpenChange, title, children, photoUrl }: ScheduleModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0 rounded-2xl">
        {/* Modal header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-[#0a2e52] to-[#0d3862] rounded-t-2xl px-8 pt-8 pb-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white leading-snug pr-8">
              {title}
            </DialogTitle>
            <DialogDescription className="sr-only">Details for {title}</DialogDescription>
          </DialogHeader>
        </div>

        {/* Modal body */}
        <div className="p-8">
          <div className={`flex flex-col ${photoUrl ? "md:flex-row" : ""} gap-7`}>
            {photoUrl && (
              <div className="flex-shrink-0 flex flex-col items-center gap-3 md:w-44">
                <img
                  src={photoUrl}
                  alt={title}
                  className="w-36 h-36 rounded-2xl shadow-lg object-cover object-top border-4 border-white ring-2 ring-[#0d3862]/10"
                />
              </div>
            )}
            <div className="flex-1 text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
              {children}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
