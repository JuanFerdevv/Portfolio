import type { Stack } from "types/experience.type";
import { AngularIcon } from "@/components/icons/Angular";
import { AstroIcon } from "@/components/icons/Astro";
import { BootstrapIcon } from "@/components/icons/Bootstrap";
import { ClaudinaryIcon } from "@/components/icons/Claudinary";
import { DigitalOceanIcon } from "@/components/icons/DigitalOcean";
import { ExcelIcon } from "@/components/icons/Excel";
import { FigmaIcon } from "@/components/icons/Figma";
import { FirebaseIcon } from "@/components/icons/Firebase";
import { FlatlafIcon } from "@/components/icons/FlatLaf";
import { GoogleAnalyticsIcon } from "@/components/icons/GoogleAnalytics";
import { HonoIcon } from "@/components/icons/Hono";
import { HostingerIcon } from "@/components/icons/Hostinger";
import { JavaIcon } from "@/components/icons/Java";
import { LaravelIcon } from "@/components/icons/Laravel";
import { LivewireIcon } from "@/components/icons/Livewire";
import { MondayIcon } from "@/components/icons/Monday";
import { MotionIcon } from "@/components/icons/Motion";
import { iIconProps } from "types/icons.type";
import { MysqlIcon } from "@/components/icons/MySql";
import { NextjsIcon } from "@/components/icons/NextJs";
import { NodeIcon } from "@/components/icons/NodeJs";
import { PostgresqlIcon } from "@/components/icons/PostgreSQL";
import { PrismaIcon } from "@/components/icons/Prisma";
import { ReactIcon } from "@/components/icons/React";
import { RemixIcon } from "@/components/icons/Remix";
import { SlackIcon } from "@/components/icons/Slack";
import { SvelteIcon } from "@/components/icons/Svelte";
import { TailwindCSSIcon } from "@/components/icons/TailwindCSS";
import { TurborepoIcon } from "@/components/icons/Turborepo";
import { VercelIcon } from "@/components/icons/Vercel";
import { ShadcnUiIcon } from "@/components/icons/ShadcnUi";
import { SeleniumIcon } from "@/components/icons/Selenium";


interface Technologies{
    stack:Stack;
    icon:React.ComponentType<iIconProps>;
}

export const technologies:Technologies[]=[
    {
        stack:"Angular",
        icon:AngularIcon
    },
    {
        stack:"Astro",
        icon:AstroIcon
    },
    {
        stack:"Bootstrap",
        icon:BootstrapIcon
    },
    {
        stack:"Claudinary",
        icon:ClaudinaryIcon
    },
    {
        stack:"Digital Ocean",
        icon:DigitalOceanIcon
    },
    {
        stack:"Excel",
        icon:ExcelIcon
    },
    {
        stack:"Figma",
        icon:FigmaIcon 
    },
    {
        stack:"Firebase",
        icon:FirebaseIcon
    },
    {
        stack:"FlatLaf",
        icon:FlatlafIcon
    },
    {
        stack:"Google Analytics",
        icon:GoogleAnalyticsIcon
    },
    {
        stack:"Hono",
        icon:HonoIcon
    },
    {
        stack:"Hostinger",
        icon:HostingerIcon
    },
    {
        stack:"Java 17",
        icon:JavaIcon
    },
    {
        stack:"Laravel",
        icon:LaravelIcon
    },
    {
        stack:"Livewire",
        icon:LivewireIcon
    },
    {
        stack:"Monday",
        icon:MondayIcon
    },
    {
        stack:"Motion",
        icon:MotionIcon
    },
    {
        stack:"MySql",
        icon:MysqlIcon
    },
    {
        stack:"Next.js",
        icon:NextjsIcon
    },
    {
        stack:"Node.js",
        icon:NodeIcon
    },
    {
        stack:"PostgreSQL",
        icon:PostgresqlIcon
    },
    {
        stack:"Prisma",
        icon:PrismaIcon
    },
    {
        stack:"React",
        icon:ReactIcon
    },
    {
        stack:"React 18",
        icon:ReactIcon
    },
    {
        stack:"React 19",
        icon:ReactIcon
    },
    {
        stack:"Remix",
        icon:RemixIcon
    },
    {
        stack:"Selenium",
        icon:SeleniumIcon
    },
    {
        stack:"Slack",
        icon:SlackIcon
    },
    {
        stack:"Svelte",
        icon:SvelteIcon
    },
    {
        stack:"Tailwind CSS",
        icon:TailwindCSSIcon
    },
    {
        stack:"Turborepo",
        icon:TurborepoIcon
    },
    {
        stack:"Vercel",
        icon:VercelIcon
    },
    {
        stack:"shadcn/ui",
        icon:ShadcnUiIcon
    }
]