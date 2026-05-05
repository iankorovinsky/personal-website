"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  subtitle: string
  imageSrc: string
  url: string
  year: string
  backlightColor?: string
}

export default function ProjectCard({ 
  title, 
  subtitle, 
  imageSrc, 
  url, 
  year, 
  backlightColor = "rgba(107, 114, 128, 0.6)"
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card 
        className="bg-transparent text-white border-0 rounded-3xl w-full max-w-md hover:scale-105 transition-all duration-300 cursor-pointer group overflow-visible"
      >
        <div 
          className="aspect-[16/9] relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="relative h-full w-full rounded-[8px] overflow-hidden transition-all duration-300"
            style={{ 
              zIndex: 10,
              boxShadow: isHovered ? `0 0 25px 10px ${backlightColor}` : '0 0 0 0 transparent',
            }}
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover rounded-[8px]"
            />
          </div>
        </div>
        <CardContent className="py-6 px-1 relative z-20">
          <div className="flex justify-between items-start mb-0.5">
            <h2 className="text-zinc-100 text-2xl font-medium tracking-tight uppercase font-primary relative inline-block leading-tight">
              {title}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            </h2>
            {year && (
              <span className="text-zinc-400 text-sm font-light font-secondary ml-4 flex-shrink-0 mt-1">
                {year}
              </span>
            )}
          </div>
          <p className="text-zinc-400 text-sm font-light font-secondary text-left">
            {subtitle}
          </p>
        </CardContent>
      </Card>
    </a>
  )
}
