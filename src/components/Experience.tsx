import { experienceData } from "data/experience";
import { ArrowUpRight } from "lucide-react";
import { technologies } from "data/technologies";
export const Experience=()=>{
    return(
    <section className='flex flex-col space-y-4 delay-200 duration-500 font-mono '>

            <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-medium ">Experiencia</h2>
            </div>

      <ol className="relative space-y-6 border-s-2 border-neutral-300">
        {experienceData.map((experience, index) => (
          <li key={index} className="ms-5 mt-1">
            <div className="absolute -start-[6.5px] mt-2 h-3 w-3 rounded-full border border-neutral-400 bg-neutral-200 "
            ></div>
            <time
              className="mb-2 text-xs  leading-none text-neutral-600"
            >
              {experience.startDate} - {experience.endDate}
            </time>
            <div className="mt-2 flex flex-col space-y-0.5">
              <h3 className="text-lg font-semibold tracking-tight text-gray-900 ">
                {experience.role}
              </h3>
              {experience.companyUrl?(
                <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener"
                className="group flex w-max items-center text-pretty text-sm text-neutral-600 transition-colors duration-150 hover:text-black dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white"
              > 
                <span>{experience.company}</span><ArrowUpRight size={14} ></ArrowUpRight>
                </a>
              ):(
                <span className="group flex w-max items-center text-pretty text-sm text-black transition-colors duration-150  dark:border-neutral-800">{experience.company}</span>
              )}
                        
            </div>
            <p className="mt-3 text-pretty font-normal text-sm">
              {experience.aboutRole}
            </p>  
              {experience.stack.map((tag,index)=>{
                const tech=technologies.find((t)=>t.stack===tag);
                if(!tech) return null;
                const IconComponent=tech.icon;
                return(
                  <div key={index} className="m-1 ml-0 inline-flex cursor-default items-center space-x-2 rounded-md border border-neutral-300 bg-neutral-200/50 px-2 py-0.5 font-mono text-[14px] font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300">
                    <IconComponent width={16} height={16} ></IconComponent>
                    <span>{tag}</span>
                  </div>
                )
              })}
              
              
          </li>
        ))}
      </ol>
    </section>

    )
}