"use client"

import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Tittle } from "@/components/Tittle";

export default function Home() {
  
  return (
    <main >
     
      <Tittle></Tittle>
     <Experience></Experience>
     <Projects></Projects>
    </main>
  );
}
