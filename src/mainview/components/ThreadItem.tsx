import { Archive } from "lucide-react";

interface ThreadItemProps {
  title: string;
  active?: boolean;
  timeLabel?: string;
  addedCount?: number;
  removedCount?: number;
  compact?: boolean;
}

export default function ThreadItem({
  title,
  active = false,
  // timeLabel,
  // addedCount,
  // removedCount,
}: ThreadItemProps) {
  // const hasDiffStats = addedCount !== undefined || removedCount !== undefined;
  const heightClass = "h-6 rounded-md";
  const rowClass = active
    ? `flex items-center justify-between pl-[44px] pr-4 ${heightClass} mx-2 bg-[#242424] cursor-pointer text-white shadow-sm`
    : `flex items-center mt-1 justify-between pl-[44px] pr-4 ${heightClass} mx-2 hover:bg-white/[0.04] cursor-pointer text-white/90 group transition-colors`;

  return (
    <div className={rowClass}>
      <span className="truncate font-medium text-[13px]">{title}</span>
      <Archive className="cursor-pointer" size={14} />
    </div>
  );
}
