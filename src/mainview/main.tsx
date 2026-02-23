import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBat";

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

const firstThreadTitle = projects.flatMap((project) => project.threads)[0] ?? "Untitled thread";
const firstProjectName = projects[0]?.projectName ?? "No project";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<div className="relative flex min-h-screen w-full bg-transparent">
			<div className="relative z-10 shrink-0">
				<Sidebar projects={projects} />
			</div>
			<div className="flex min-h-screen flex-1 flex-col bg-zinc-950/65">
				<TopBar title={firstThreadTitle} projectName={firstProjectName} />
				<div className="flex-1 bg-gradient-to-b from-white/[0.01] to-transparent" />
			</div>
		</div>
	</StrictMode>,
);
