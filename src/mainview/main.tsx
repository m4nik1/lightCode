import { StrictMode, useState } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import { ProjectProvider } from "./components/ProjectProvider";
import ChatSide from "./components/ChatSide";

interface Project {
  projectName: string;
  threads: string[];
}

const projects: Project[] = [
  {
    projectName: "Testing-project",
    threads: ["Website title work", "Refactor frontend"],
  },
];

const firstThreadTitle =
  projects.flatMap((project) => project.threads)[0] ?? "Untitled thread";
const firstProjectName = projects[0]?.projectName ?? "No project";

createRoot(document.getElementById("root")!).render(
  <ProjectProvider>
    <div className="relative flex min-h-screen w-full bg-transparent">
      <div className="relative z-10 shrink-0">
        <Sidebar projects={projects} />
      </div>
      <div className="flex min-h-screen flex-1 flex-col bg-zinc-950">
        <TopBar title={firstThreadTitle} projectName={firstProjectName} />
        <ChatSide />
      </div>
    </div>
  </ProjectProvider>,
);
