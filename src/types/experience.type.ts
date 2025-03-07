export type Stack =
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
  | 'React 18'
  | 'React 19'
  | 'Hostinger'
  | 'Angular'
  | 'Vercel'
  | 'Node.js'
  | 'Claudinary'
  | 'Motion'
  | 'PostgreSQL'
  | 'Firebase'
  | 'Figma'
  | 'Laravel'
  | 'MySql'
  | 'Digital Ocean'
  | 'Livewire'
  | 'Slack'
  | 'Java 17'
  | 'Bootstrap'
  | 'Monday'
  | 'FlatLab'
  | 'Excel'
  | 'Selenium'
  | 'Google Analytics'
  | 'shadcn/ui';

  export interface iExperience {
    role: string;
    aboutRole: string;
    company: string;
    companyUrl?: string|null;
    startDate: string;
    endDate: string;
    latest: boolean;
    stack:Stack[];
  }