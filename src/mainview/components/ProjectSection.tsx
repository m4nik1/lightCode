import { Folder, Pencil } from "lucide-react";
import ThreadItem from "./ThreadItem";

interface projectProps {
  name: string;
  threads: string[];
  active: boolean;
  onClick: () => void;
}

export default function ProjectSection({
  name,
  threads,
  active,
  onClick,
}: projectProps) {
  const headerClass = active
    ? "glass-row glass-row--active flex h-8 w-full items-center gap-2 rounded-md pl-6 pr-3 text-white"
    : "glass-row flex h-8 w-full items-center gap-2 rounded-md pl-6 pr-3 text-white/92";

  return (
    <div className="mb-2">
      <button type="button" onClick={onClick} className={headerClass}>
        <Folder
          size={14}
          className={active ? "shrink-0 text-white/80" : "shrink-0 text-white/70"}
          strokeWidth={1.5}
        />
        <span className="truncate">{name}</span>
        <Pencil
          size={14}
          className={
            active
              ? "ml-auto shrink-0 text-white/70"
              : "ml-auto shrink-0 text-white/55"
          }
        />
      </button>
      <div className="mt-2 flex flex-col">
        {threads.map((thread, index) => (
          <ThreadItem key={index} title={thread} active={active && index === 0} />
        ))}
      </div>
    </div>
  );
}
