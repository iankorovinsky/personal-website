import ProjectCard from "@/components/ui/project-card";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold tracking-wide uppercase mb-8 font-[var(--font-primary)]">
          Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <ProjectCard 
              key={index}
              {...experience}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 