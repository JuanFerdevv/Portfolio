export type Category =
  | 'Desarrollo Full Stack'
  | 'Diseño Web'

export type Stack =
  | 'Next.js'
  | 'Tailwind CSS'
  | 'React'
  | 'Remix'
  | 'Svelte'
  | 'Turborepo'
  | 'Hono'
  | 'Astro'
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
  | 'Laravel 9'
  | 'Laravel 10'
  | 'Laravel 11'
  | 'Laravel 12'
  | 'MySql'
  | 'Digital Ocean'
  | 'Livewire'
  | 'Slack'
  | 'Java 17'
  | 'Bootstrap'
  | 'Monday'
  | 'FlatLaf'
  | 'Excel'
  | 'Selenium'
  | 'Brevo'
  | 'PHP'
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