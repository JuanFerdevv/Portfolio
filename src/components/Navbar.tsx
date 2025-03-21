import { GitHubIcon } from "@/components/icons/Github";
import { InstagramIcon } from "@/components/icons/Instagram";
import { contactInfo } from "data/contactInfo";
import { LinkedinIcon } from "./icons/Linkedin";
import { EmailIcon } from "./icons/Email";
import Button from "@/components/ui/Button";
import Link from "next/link";


const socialLinks=[
    {
        name:"GitHub",
        url:contactInfo.github,
        icon:GitHubIcon
    },
    {
        name:"Instagram",
        url:contactInfo.instagram,
        icon:InstagramIcon
    },
    {
        name:"Linkedin",
        url:contactInfo.linkedin,
        icon:LinkedinIcon
    }
]

export const Navbar=()=>{
    return(
        <nav className="mt-8 flex flex-row font-ubuntu justify-between ">
            <span className="font-bold">Juan Calvache</span>

            <div className="flex flex-row ">
            {socialLinks.map((link, index)=>{
                   const IconComponent = link.icon; 
            return(
                <Link 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                >
                 <Button variant='ghost' size="icon" > <IconComponent /></Button>
                </Link>
            ) ;
            
            })}
                <a href="mailto:juancalvache5056@gmail.com">
                <Button variant="ghost" size="icon">
                <EmailIcon></EmailIcon>
                </Button>
                </a>
                
            </div>
        </nav>
    )
}