"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import FilterButtons from "@/components/ui/filter-buttons"
import AsciiBackground from "@/components/ui/ascii-background"
import PhotoStack from "@/components/ui/photo-stack"
import GlitchLink from "@/components/ui/glitch-link"
import { projects } from "./data/projects"
import { experiences } from "./data/experience"
import { community } from "./data/community"
import { awards } from "./data/awards"
import { writing } from "./data/writing"
import { media } from "./data/media"

interface TableItem {
  title: string;
  subtitle: string;
  url: string;
  year: string;
  category: string;
  starred?: boolean;
  type?: string;
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>('work');

  useEffect(() => {
    const tab = new URLSearchParams(window.location.search).get('tab');
    if (tab && ['work', 'projects', 'community', 'awards', 'writing', 'media'].includes(tab)) {
      setActiveFilter(tab);
    }
  }, []);

  const allItems: TableItem[] = [
    ...experiences.map(item => ({ ...item, category: 'work' })),
    ...projects.map(item => ({ ...item, category: 'projects' })),
    ...community.map(item => ({ ...item, category: 'community' })),
    ...awards.map(item => ({ ...item, category: 'awards' })),
    ...writing.map(item => ({ ...item, category: 'writing' })),
    ...media.map(item => ({ ...item, category: 'media' }))
  ];

  const filteredItems = allItems
    .filter(item => item.category === activeFilter)
    .sort((a, b) => Number(Boolean(b.starred)) - Number(Boolean(a.starred)));


  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <AsciiBackground />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto w-full px-2 md:px-4 pt-16 md:pt-20 pb-12 md:pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-end">
          <div className="max-w-3xl flex-1">
            <h1 className="hero-title">
              Ian Korovinsky
            </h1>
            <p className="hero-description">
              <span className="block">research engineering @ baseten</span>
              <span className="block">software engineering @ university of waterloo</span>
              <span className="block mt-2">
                i{" "}
                <GlitchLink href="https://www.baseten.co/" brand="baseten">
                  build reinforcement learning infrastructure for researchers
                </GlitchLink>
                , {" "}
                <GlitchLink href="https://www.hackthenorth.com/" brand="hack-the-north">
                  host events that bring interesting people together
                </GlitchLink>
                , and {" "}
                <GlitchLink href="https://www.generalcatalyst.com/" brand="general-catalyst">
                  support founders at their earliest stages
                </GlitchLink>
              </span>
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
          
          <div className="flex-shrink-0 flex-1 flex justify-center mt-8 lg:mt-0">
            <PhotoStack images={[
              "/photo-stack/performative-1.webp",
              "/photo-stack/performative-2.webp",
              "/photo-stack/performative-3.webp"
            ]} />
          </div>
        </div>
      </section>

      {/* Work, projects, community, awards, writing, and media */}
      <section className="max-w-7xl mx-auto w-full px-2 md:px-4 pb-12 md:pb-16 relative z-10">
        <FilterButtons 
          categories={['work', 'projects', 'community', 'awards', 'writing', 'media']}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <div className="overflow-x-auto">
          <table className="w-full text-left font-secondary text-sm">
            <caption className="sr-only">
              {activeFilter}
            </caption>
            <thead className="border-b border-zinc-800 text-zinc-500">
              <tr>
                <th scope="col" className="w-8 py-4 pr-3"><span className="sr-only">starred</span></th>
                <th scope="col" className="py-4 pr-4 font-normal">{{ work: 'company', projects: 'project', community: 'organization', awards: 'award', writing: 'title', media: 'organization' }[activeFilter] ?? 'name'}</th>
                <th scope="col" className="py-4 pr-4 font-normal">{activeFilter === 'media' ? 'article' : 'description'}</th>
                {activeFilter === 'awards' && (
                  <th scope="col" className="py-4 pr-4 font-normal">type</th>
                )}
                <th scope="col" className="py-4 text-right font-normal">{activeFilter === 'media' ? 'year' : 'date'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {activeFilter === 'media' && filteredItems.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 font-light text-zinc-500">
                    coming soon
                  </td>
                </tr>
              )}
              {filteredItems.map((item, index) => (
                <tr key={`${item.category}-${item.title}-${index}`}>
                  <td className="py-5 pr-3 align-top">
                    {item.starred && (
                      <>
                        <Star className="mt-0.5 h-3.5 w-3.5 text-amber-300" fill="currentColor" aria-hidden="true" />
                        <span className="sr-only">starred</span>
                      </>
                    )}
                  </td>
                  <th scope="row" className="py-5 pr-4 align-top font-medium text-zinc-200 md:w-1/4">
                    {item.url ? <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {item.title}
                    </a> : item.title}
                  </th>
                  <td className="py-5 pr-4 align-top font-light text-zinc-400 leading-relaxed">
                    {item.subtitle}
                  </td>
                  {activeFilter === 'awards' && (
                    <td className="py-5 pr-4 align-top font-light text-zinc-400">
                      {item.type}
                    </td>
                  )}
                  <td className="py-5 align-top text-right font-light text-zinc-500 md:whitespace-nowrap">
                    {item.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
