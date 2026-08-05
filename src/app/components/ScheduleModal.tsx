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
      <DialogContent className="max-w-[calc(100%-1.5rem)] sm:max-w-3xl max-h-[85vh] overflow-y-auto p-0 gap-0 rounded-2xl [&>button]:top-5 [&>button]:right-5 [&>button]:z-20 [&>button]:p-1 [&>button]:text-white [&>button]:opacity-80 [&>button:hover]:opacity-100 [&>button_svg]:size-5">
        {/* Modal header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-[#0a2e52] to-[#0d3862] rounded-t-2xl px-5 pt-6 pb-5 sm:px-8 sm:pt-8 sm:pb-6">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-2xl font-bold text-white leading-snug pr-10">
              {title}
            </DialogTitle>
            <DialogDescription className="sr-only">Details for {title}</DialogDescription>
          </DialogHeader>
        </div>

        {/* Modal body */}
        <div className="p-5 sm:p-8">
          <div className={`flex flex-col ${photoUrl ? "sm:flex-row" : ""} gap-5 sm:gap-7`}>
            {photoUrl && (
              <div className="flex-shrink-0 flex flex-col items-center gap-3 sm:w-44">
                <img
                  src={photoUrl}
                  alt={title}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl shadow-lg object-cover object-top border-4 border-white ring-2 ring-[#0d3862]/10"
                />
              </div>
            )}
            <div className="flex-1 text-gray-700 text-[15px] sm:text-base leading-relaxed whitespace-pre-wrap">
              {children}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
