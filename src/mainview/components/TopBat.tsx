interface TopBarProps {
  title: string;
  projectName: string;
}

export default function TopBar({ title, projectName }: TopBarProps) {
  return (
    <div className="flex h-11 items-center gap-2 bg-zinc-950/50 px-4 text-[#EBEBF5] backdrop-blur-xl">
      <span className="truncate text-xs font-medium">{title}</span>
      <span className="truncate text-xs text-white/45">{projectName}</span>
    </div>
  );
}
