import { ProjectCard } from "./ProjectCard";
import {project} from "data/project"

export const Projects=()=>{
    return(
        <section className="flex flex-col space-y-4 delay-200 duration-500 font-mono mt-12 mb-4">
         
         <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-medium ">Proyectos</h2>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-3 ">
            {project.map((project, index)=>(
                <ProjectCard
                tittle={project.tittle}
                description={project.description}
                icon={project.icon}
                url={project.url}
                githubUrl={project.githubUrl}
                techStack={project.techStack}
                category="hola"
                key={index}
                >
                </ProjectCard>
            ))}
        
        </div>
        </section>
    )
}