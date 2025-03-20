import { GitHubIcon } from "./icons/Github";
import { technologies } from "data/technologies";
import { ArrowUpRight, Icon } from "lucide-react";


interface ProjectCardProps {
    tittle: string;
    description: string;
    icon?: string;
    onClick?: () => void
    children?: React.ReactNode
    url?: string;
    githubUrl?: string;
    category: string;
    techStack:Array<string>;
}

export const ProjectCard:React.FC<ProjectCardProps>=({
    tittle,
    description,
    icon,
    url,
    githubUrl,
    category,
    techStack
})=>{
    return(
        <div 
        className="rounded-md border-[1px] font-mono border-neutral-300 px-3 py-4  dark:border-neutral-50-800"
        role="contentinfo"
        >
            <div className="flex flex-col space-y-3">
                <div className="flex w-full items-center justify-between">
                    {/* Titulo  */}
                    <div className="flex items-center space-x-[10px]">
                        {url ?(
                            <>
                            {icon && <img src={icon} alt={tittle} className="h-6 w-6"></img>}
                            <a 
                            href="http://"
                            className="group flex items-center gap-[6px] font-medium 
                            "
                            >
                            <span>{tittle}</span>
                            <ArrowUpRight
                              size={13}
                              strokeWidth={2}
                              className="opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100"
                            ></ArrowUpRight>
                            </a>
                            </>
                        ):(
                            <>
                            {icon && <img src={icon} alt={tittle} className="h-6 w-6" />}
                            <p className="font-medium">{tittle}</p>
                          </>
                        )}
                    </div>
                    {/* Logo github */}
                    <div className="flex items-center gap 2">
                    <a
                    href={githubUrl}
                    title={`View ${tittle} repository on GitHub`}
                    target="_blank"
                    rel="noopener"
                    className="opacity-75 transition-opacity duration-100 hover:opacity-100"
                    >
                    <GitHubIcon height={16} />
                    </a>
                    </div>    
                </div>
                
                <p className="truncate text-sm dark:text-neutral-400">
                    {description}
                </p>

                <div className="flex items-center space-x-1 overflow-y-auto">
                    {techStack.map((tag)=>
                    technologies.filter((s)=>s.stack===tag).map(({icon:Icon})=>(
                    <div key={tag} className="m-1 ml-0 inline-flex cursor-default items-center space-x-2 rounded-md border border-neutral-300 bg-neutral-200/50 px-2 py-0.5 font-mono text-[14px] font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300">
                    <Icon width={16} height={16} ></Icon>
                    <span>{tag}</span>
                  </div>
                    ))
                    )}
                </div>
            </div>
        </div>
    )
}