import { experienceData } from "data/experience";
import { ArrowUpRight } from "lucide-react";
export const Experience=()=>{
    return(
    <section className='flex flex-col space-y-4 delay-200 duration-500 '>

            <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-medium">Experiencia</h2>
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
              <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
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
                <span className="group flex w-max items-center text-pretty text-sm text-neutral-600 transition-colors duration-150  dark:border-neutral-800">{experience.company}</span>
              )}
                        
            </div>
            <p className="mt-3 text-pretty font-mono text-sm">
              {experience.aboutRole}
            </p>
          </li>
        ))}
      </ol>
    </section>

    )
}