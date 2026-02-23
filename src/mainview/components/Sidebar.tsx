import type { CSSProperties } from "react";
import { SquarePen, FolderPlus, ListFilter } from "lucide-react";
import ProjectSection from "./ProjectSection";
import { useProject } from "./ProjectProvider";

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

  const { activeProject, setActiveProject } = useProject();

  return (
    <aside className="sidebar-glass relative h-screen w-[280px] overflow-hidden font-[system-ui] text-[13px] text-[#EBEBF5] select-none">
      <div className="sidebar-glass__tint pointer-events-none absolute inset-0" />
      <div className="sidebar-glass__blur pointer-events-none absolute inset-0" />
      <div className="sidebar-glass__stroke pointer-events-none absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col overflow-y-auto">
        <div
          className="electrobun-webkit-app-region-drag h-11 shrink-0 border-b border-white/[0.05] bg-gradient-to-b from-white/[0.03] to-white/[0.008]"
          style={dragRegionStyle}
        />

        {/* Top Navigation Group */}
        <div className="mt-2 flex flex-col gap-1 px-3 pb-5 pt-3">
          <button className="glass-row flex h-8 w-full items-center gap-3 rounded-md px-2 text-left text-white/90">
            <SquarePen
              size={16}
              className="shrink-0 text-white/70"
              strokeWidth={1.5}
            />
            <span>New thread</span>
          </button>
        </div>

        {/* Threads Section Header */}
        <div className="mb-2 flex items-center justify-between px-5">
          <span className="font-medium text-white/55">Threads</span>
          <div className="flex items-center gap-2 text-white/50">
            <button
              type="button"
              className="glass-icon-button rounded-md p-1 hover:text-white"
            >
              <FolderPlus size={14} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className="glass-icon-button rounded-md p-1 hover:text-white"
            >
              <ListFilter size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="mb-4">
          {projects.map((project, index) => (
            <ProjectSection
              key={index}
              active={activeProject?.projectName == project.projectName}
              onClick={() => setActiveProject(project)}
              name={project.projectName}
              threads={project.threads}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
