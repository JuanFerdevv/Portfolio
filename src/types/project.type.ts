import { Stack } from "./experience.type";

export interface iProject {
    tittle: string;
    description: string;
    techStack:Stack[];
    url?: string;
    githubUrl?: string;
    icon?: string;
  }