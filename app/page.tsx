"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import ProjectCard from "@/components/ui/project-card";
import Spotlight from "@/components/ui/spotlight"
import FilterButtons from "@/components/ui/filter-buttons"
import Video2Ascii from "video2ascii"
import PhotoStack from "@/components/ui/photo-stack"
import { projects } from "./data/projects"
import { experiences } from "./data/experience"

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const [numColumns, setNumColumns] = useState(120);

  useEffect(() => {
    const updateColumns = () => {
      // Calculate columns based on viewport width (roughly 1 column per 10-12px)
      setNumColumns(Math.floor(window.innerWidth / 10));
    };
    
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const allItems = [
    ...experiences.map(item => ({ ...item, category: 'work' })),
    ...projects.map(item => ({ ...item, category: 'projects' }))
  ];

  const filteredItems = activeFilter === null
    ? allItems 
    : allItems.filter(item => item.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    // Toggle: if clicking the same filter, deselect it (show all)
    setActiveFilter(activeFilter === filter ? null : filter);
    setOpenModalIndex(null); // Close modal when filter changes
  };


  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <div className="w-full h-full">
          <Video2Ascii
            src="/background.mp4"
            numColumns={numColumns}
            colored={true}
            brightness={0.2}
            audioEffect={0}
            enableMouse={false}
            enableRipple={false}
            charset="minimal"
            isPlaying={true}
            autoPlay={true}
            showStats={false}
          />
        </div>
      </div>
      {/* <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[1] opacity-90">
        <Spotlight />
      </div> */}
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto w-full px-2 md:px-4 pt-16 md:pt-20 pb-12 md:pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="max-w-3xl flex-1">
            <h1 className="hero-title">
              Ian Korovinsky
            </h1>
            <p className="hero-description">
              software engineering @ university of waterloo.<br />co-director @ hack the north.<br />
              i build products that solve problems, host events that bring interesting people together, and support builders at their earliest stages.<br />
            </p>
            
            <div className="flex gap-6 items-center">
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
          
          <div className="flex-shrink-0">
            <PhotoStack images={[]} />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="max-w-7xl mx-auto w-full px-2 md:px-4 pb-12 md:pb-16">
        <FilterButtons 
          categories={['work', 'projects', 'writing']}
          activeFilter={activeFilter}
          setActiveFilter={handleFilterChange}
        />
        {activeFilter === 'writing' ? (
          <div className="flex justify-center items-center py-16">
            <p className="text-white text-lg font-light font-secondary">
              coming soon...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <ProjectCard 
                key={`${item.category}-${item.title}-${index}`}
                {...item}
                isOpen={openModalIndex === index}
                onOpenChange={(open) => {
                  if (open) {
                    setOpenModalIndex(index)
                  } else {
                    setOpenModalIndex(null)
                  }
                }}
              />
            ))}
          </div>
        )}
      </section>
      <div className="text-sm font-[var(--font-secondary)] text-center pb-8 text-white flex flex-col gap-2 relative z-10">
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
          {", "}
          <a
            href="https://ishaand.com"
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:opacity-70 transition-opacity underline"
          >
            ishaan dey
          </a>
          {", "}and{" "}
          <a
            href="https://elijahkurien.com"
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:opacity-70 transition-opacity underline"
          >
            elijah kurien
          </a>
        </div>
      </div>
    </div>
  );
}
