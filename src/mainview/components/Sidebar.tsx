import type { CSSProperties } from "react";
import { SquarePen, FolderPlus, ListFilter } from "lucide-react";
import ProjectSection from "./ProjectSection";

interface projectsStructure {
  projectName: string;
  threads: string[];
}

interface SidebarProps {
  projects: projectsStructure[];
}

export default function Sidebar({ projects }: SidebarProps) {
  const dragRegionStyle = {
    WebkitAppRegion: "drag",
    appRegion: "drag",
  } as CSSProperties;

  return (
    <div className="relative w-[280px] h-screen border-r border-white/10 bg-zinc-950/60 text-[#EBEBF5] backdrop-blur-xl backdrop-saturate-150 shadow-[0_16px_40px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.035)] flex flex-col font-[system-ui] select-none text-[13px] overflow-y-auto">
      <div
        className="electrobun-webkit-app-region-drag h-11 shrink-0 border-b border-white/[0.05] bg-gradient-to-b from-white/[0.035] to-white/[0.01]"
        style={dragRegionStyle}
      />

      {/* Top Navigation Group */}
      <div className="flex flex-col mt-2 gap-1 px-3 pt-3 pb-5">
        <button className="flex items-center gap-3 h-8 px-2 rounded-md hover:bg-white/[0.06] text-white/90 transition-colors w-full text-left">
          <SquarePen
            size={16}
            className="text-white/70 shrink-0"
            strokeWidth={1.5}
          />
          <span>New thread</span>
        </button>
      </div>

      {/* Threads Section Header */}
      <div className="flex items-center justify-between px-5 mb-2">
        <span className="text-white/50 font-medium">Threads</span>
        <div className="flex items-center gap-2 text-white/50">
          <button className="hover:text-white transition-colors">
            <FolderPlus size={14} strokeWidth={1.5} />
          </button>
          <button className="hover:text-white transition-colors">
            <ListFilter size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="mb-4">
        {projects.map((project, index) => (
          <ProjectSection
            key={index}
            name={project.projectName}
            threads={project.threads}
          />
        ))}
      </div>
    </div>
  );
}
