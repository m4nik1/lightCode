import { Folder, Pencil } from "lucide-react";
import ThreadItem from "./ThreadItem";

interface projectProps {
  name: string;
  threads: string[];
}

export default function ProjectSection({ name, threads }: projectProps) {
  return (
    <div className="mb-2">
      <div className="flex w-full pl-6 pt-1 items-center cursor-pointer gap-2 rounded-md h-3 bg-transparent">
        <Folder size={14} className="text-white/70" strokeWidth={1.5} />
        <span>{name}</span>
        <Pencil size={14} />
      </div>
      <div className="mt-2 flex flex-col">
        {threads.map((thread, index) => (
          <ThreadItem key={index} title={thread} />
        ))}
      </div>
    </div>
  );
}
