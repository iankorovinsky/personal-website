import Image from "next/image";
import ProjectCard from "@/components/ui/project-card";
import Spotlight from "@/components/ui/spotlight"
import { projects } from "./data/projects"
import { experiences } from "./data/experience"

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center bg-black">
      <Spotlight />
      <div>
        <h1 className="title pt-16 mx-auto pb-4">IAN KOROVINSKY</h1>
        <h2 className="title-subtext pt-8 mx-auto">
          software engineering @ university of waterloo
          <br />
          eng intern @ thrive capital
          <br />
          co-director @ hack the north
        </h2>
        
        <div className="flex gap-6 justify-center items-center mt-12 pb-8">
          <a 
            href="https://github.com/iankorovinsky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="GitHub Profile"
          >
            <Image src="/icons/github.svg" alt="Github" className="social-icon" width={30.508} height={30} />
          </a>
          <a 
            href="https://linkedin.com/in/ian-korovinsky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="LinkedIn Profile"

          >
            <Image src="/icons/linkedin.svg" alt="Linkedin" width={30} height={30} />
          </a>
          <a 
            href="https://x.com/ikorovinsky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="Twitter Profile"
          >
            <Image src="/icons/x.svg" alt="X" className="social-icon" width={33.189} height={30}/>
          </a>
          <a 
            href="https://se-webring.xyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity flex items-center"
            aria-label="SE Webring"
          >
            <Image src="/icons/se-webring.svg" alt="SE Webring" className="social-icon" width={30} height={30} />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[95vw] mx-auto px-4 md:px-8 py-8 md:py-16">
        {[...experiences, ...projects].map((item, index) => (
          <ProjectCard 
            key={index}
            {...item}
          />
        ))}
      </div>
      <div className="text-sm font-[var(--font-secondary)] text-center pb-8 text-white flex flex-col gap-2">
        <div>built with ❤️, 🪿, and 🧋 in waterloo</div>
        <div>
          inspired by{" "}
          <a 
            href="https://rajan.sh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity underline"
          >
            rajan agarwal
          </a>
          {" "}and{" "}
          <a
            href="https://ishaand.com"
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:opacity-70 transition-opacity underline"
          >
            ishaan dey
          </a>
        </div>
      </div>
    </div>
  );
}
