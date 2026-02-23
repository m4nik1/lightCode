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
  const rowClass = active
    ? "glass-row glass-row--active group mt-1 flex h-8 items-center justify-between rounded-md pl-[44px] pr-2 text-white"
    : "glass-row group mt-1 flex h-8 items-center justify-between rounded-md pl-[44px] pr-2 text-white/90";

  return (
    <div className={`mx-2 ${rowClass}`}>
      <button
        type="button"
        className="min-w-0 flex-1 truncate text-left focus-visible:outline-none"
      >
        <span className="truncate font-medium text-[13px]">{title}</span>
      </button>
      <button
        type="button"
        className="glass-icon-button ml-2 inline-flex h-6 w-6 items-center justify-center rounded-md text-white/45 hover:text-white/75 focus-visible:text-white/85"
        aria-label={`Archive ${title}`}
      >
        <Archive size={14} />
      </button>
    </div>
  );
}
