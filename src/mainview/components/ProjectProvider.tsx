import { createContext, ReactNode, useContext, useState } from "react";
import { projectsStructure } from "../types";

type projectContextType = {
  activeProject: projectsStructure | undefined;
  setActiveProject: (project: projectsStructure) => void;
};

const projectContext = createContext<projectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [activeProject, setActiveProject] = useState<
    projectsStructure | undefined
  >(undefined);

  return (
    <projectContext.Provider value={{ activeProject, setActiveProject }}>
      {children}
    </projectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(projectContext);
  if (!context) {
    throw new Error("useProject must be used inside ProjectProvider");
  }

  return context;
}
