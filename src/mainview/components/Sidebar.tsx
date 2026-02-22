import {
  SquarePen,
  Clock,
  Hexagon,
  FolderPlus,
  ListFilter,
  Folder,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-[280px] h-screen bg-[#1E1E1E] text-[#EBEBF5] flex flex-col font-[system-ui] select-none text-[13px] overflow-y-auto">
      
      {/* Top Navigation Group */}
      <div className="flex flex-col gap-1 px-3 pt-6 pb-6">
        <button className="flex items-center gap-3 h-8 px-2 rounded-md hover:bg-white/[0.06] text-white/90 transition-colors w-full text-left">
          <SquarePen size={16} className="text-white/70 shrink-0" strokeWidth={1.5} />
          <span>New thread</span>
        </button>
        <button className="flex items-center gap-3 h-8 px-2 rounded-md hover:bg-white/[0.06] text-white/90 transition-colors w-full text-left">
          <Clock size={16} className="text-white/70 shrink-0" strokeWidth={1.5} />
          <span>Automations</span>
        </button>
        <button className="flex items-center gap-3 h-8 px-2 rounded-md hover:bg-white/[0.06] text-white/90 transition-colors w-full text-left">
          <Hexagon size={16} className="text-white/70 shrink-0" strokeWidth={1.5} />
          <span>Skills</span>
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

      {/* Project 1 */}
      <div className="mb-4">
        {/* Project Header */}
        <div className="flex items-center gap-3 px-5 h-8 text-white/90 cursor-pointer hover:bg-white/[0.04] transition-colors">
          <Folder size={16} className="text-white/70 shrink-0" strokeWidth={1.5} />
          <span className="truncate">ElmSwerveTemplate-2026</span>
        </div>
        
        {/* Threads List */}
        <div className="flex flex-col mt-0.5">
          <div className="flex items-center justify-between pl-[44px] pr-4 h-8 mx-2 rounded-md hover:bg-white/[0.06] cursor-pointer text-white/90 group transition-colors">
            <span className="truncate font-medium">Diagnose pose estimation jumpi...</span>
            <span className="text-white/40 shrink-0 ml-3">51m</span>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="mb-4">
        {/* Project Header */}
        <div className="flex items-center gap-3 px-5 h-8 text-white/90 cursor-pointer hover:bg-white/[0.04] transition-colors">
          <Folder size={16} className="text-white/70 shrink-0" strokeWidth={1.5} />
          <span className="truncate">m4code-actual</span>
        </div>
        
        {/* Threads List */}
        <div className="flex flex-col mt-0.5">
          {/* Active Thread */}
          <div className="flex items-center justify-between pl-[44px] pr-4 h-[34px] mx-2 rounded-lg bg-[#2D2D2D] cursor-pointer text-white shadow-sm">
            <span className="truncate font-medium text-[14px]">Fix main.tsx implementation</span>
            <div className="flex items-center gap-2 shrink-0 ml-3 text-[13px] font-mono">
              <span className="text-emerald-500">+2</span>
              <span className="text-red-400">-2</span>
              <span className="text-white/40 ml-1 font-sans">1m</span>
            </div>
          </div>
          
          {/* Inactive Thread */}
          <div className="flex items-center justify-between pl-[44px] pr-4 h-[34px] mx-2 rounded-lg hover:bg-white/[0.06] cursor-pointer text-white/90 group transition-colors">
            <span className="truncate font-medium text-[14px]">Update sidebar to matc...</span>
            <div className="flex items-center gap-2 shrink-0 ml-3 text-[13px] font-mono">
              <span className="text-white/40">+37</span>
              <span className="text-white/40">-15</span>
              <span className="text-white/40 ml-1 font-sans">3d</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="mb-4">
        {/* Project Header */}
        <div className="flex items-center gap-3 px-5 h-8 text-white/90 cursor-pointer hover:bg-white/[0.04] transition-colors">
          <Folder size={16} className="text-white/70 shrink-0" strokeWidth={1.5} />
          <span className="truncate">m4code</span>
        </div>
        
        {/* Threads List */}
        <div className="flex flex-col mt-0.5">
          <div className="flex items-center justify-between pl-[44px] pr-4 h-[34px] mx-2 rounded-lg hover:bg-white/[0.06] cursor-pointer text-white/90 group transition-colors">
            <span className="truncate font-medium text-[14px]">Consolidate CSS vars in styles</span>
            <span className="text-white/40 shrink-0 ml-3">4d</span>
          </div>
          
          <div className="flex items-center justify-between pl-[44px] pr-4 h-[34px] mx-2 rounded-lg hover:bg-white/[0.06] cursor-pointer text-white/90 group transition-colors">
            <span className="truncate font-medium text-[14px]">Align text with Codex sidebar</span>
            <span className="text-white/40 shrink-0 ml-3">5d</span>
          </div>

          <div className="flex items-center justify-between pl-[44px] pr-4 h-[34px] mx-2 rounded-lg hover:bg-white/[0.06] cursor-pointer text-white/90 group transition-colors">
            <span className="truncate font-medium text-[14px]">Setup Tailwind CSS</span>
            <span className="text-white/40 shrink-0 ml-3">5d</span>
          </div>

          <div className="flex items-center justify-between pl-[44px] pr-4 h-[34px] mx-2 rounded-lg hover:bg-white/[0.06] cursor-pointer text-white/90 group transition-colors">
            <span className="truncate font-medium text-[14px]">Resize chatbox and reorganize f...</span>
            <span className="text-white/40 shrink-0 ml-3">5d</span>
          </div>
        </div>
      </div>

    </div>
  );
}
