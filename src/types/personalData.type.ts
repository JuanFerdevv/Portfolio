export type Skills =
  | 'Next.js'
  | 'Tailwind CSS'
  | 'React'
  | 'Remix'
  | 'Svelte'
  | 'Tauri'
  | 'Turborepo'
  | 'T3 Stack'
  | 'Hono'
  | 'Upstash'
  | 'Astro'
  | 'Trpc'
  | 'Prisma'
  | 'shadcn/ui';

export interface iPersonalData {
    name: string;
    role: string;
    about: string;
    skills:Skills[];
  }
  