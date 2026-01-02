"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  subtitle: string
  imageSrc: string
  url: string
  body: string
  linkText: string
  year: string
  backlightColor?: string
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export default function ProjectCard({ 
  title, 
  subtitle, 
  imageSrc, 
  url, 
  body, 
  linkText, 
  year, 
  backlightColor = "rgba(107, 114, 128, 0.6)",
  isOpen: controlledIsOpen,
  onOpenChange
}: ProjectCardProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  
  const handleOpenChange = (open: boolean) => {
    if (onOpenChange) {
      onOpenChange(open)
    } else {
      setInternalIsOpen(open)
    }
  }


  return (
    <>
      <Card 
        className="bg-transparent text-white border-0 rounded-3xl w-full max-w-md hover:scale-105 transition-all duration-300 cursor-pointer group overflow-visible"
        onClick={() => handleOpenChange(true)}
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
          <div className="flex justify-between items-start mb-1">
            <h2 className="text-zinc-100 text-2xl font-medium tracking-tight uppercase font-primary relative inline-block">
              {title}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            </h2>
            {year && (
              <span className="text-zinc-400 text-sm font-light font-secondary ml-4 flex-shrink-0">
                {year}
              </span>
            )}
          </div>
          <p className="text-zinc-400 text-sm font-light font-secondary text-left">
            {subtitle}
          </p>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
        <DialogContent 
          className="bg-zinc-900 text-white border-zinc-800 max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl pt-6"
        >
          <DialogHeader>
            <div className="flex justify-between items-start">
              <DialogTitle className="text-3xl font-medium tracking-tight uppercase mb-2 font-primary">
                {title}
              </DialogTitle>
              {year && (
                <span className="text-zinc-400 text-sm font-light font-secondary ml-4 flex-shrink-0">
                  {year}
                </span>
              )}
            </div>
            <DialogDescription className="text-zinc-400 text-lg font-light font-secondary">
              {subtitle}
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-[16/9] relative my-4">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-zinc-300 mb-4 font-secondary text-sm whitespace-pre-line">
            {body}
          </p>
          <Button 
            asChild
            variant="default"
            className="font-primary flex justify-between items-center w-full bg-zinc-950 hover:bg-zinc-800 transition-colors rounded-[4px]"
          >
            <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full"
            >
              <span>{linkText.toUpperCase()}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="ml-2"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}