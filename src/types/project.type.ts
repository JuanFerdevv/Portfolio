import { Stack } from "./experience.type";

export type Category =
  | 'Desarrollo Full Stack'
  | 'Diseño Web'

export interface iProject {
    title: string;
    description: string;
    category: Category[];
    techStack:Stack[];
    url?: string;
    githubUrl?: string;
    icon?: string;
    latest?: boolean;
    updated?: boolean;
  }