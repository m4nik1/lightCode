import { useProject } from "./ProjectProvider";

interface TopBarProps {
  title: string;
  projectName: string;
}

export default function TopBar({ title, projectName }: TopBarProps) {
  const currentProject = useProject();

  return (
    <div className="flex h-11 items-center gap-2 bg-zinc-950/50 px-4 text-[#EBEBF5] backdrop-blur-xl">
      <span className="truncate text-xs font-medium">
        {currentProject.activeProject?.projectName}
      </span>
      <span className="truncate text-xs text-white/45">{projectName}</span>
    </div>
  );
}
