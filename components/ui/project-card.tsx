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
}

export default function ProjectCard({ title, subtitle, imageSrc, url, body, linkText }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card 
        className="bg-transparent text-white border-0 rounded-3xl overflow-hidden w-full max-w-md hover:scale-105 hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-[16/9] relative">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-[8px]"
          />
        </div>
        <CardContent className="p-6">
          <h2 className="text-zinc-100 text-2xl font-bold tracking-wide uppercase mb-1 font-[var(--font-primary)]">
            {title}
          </h2>
          <p className="text-zinc-400 text-sm font-[var(--font-secondary)]">
            {subtitle}
          </p>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-zinc-900 text-white border-zinc-800 max-h-[90vh] overflow-y-auto rounded-xl pt-6">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold tracking-wide uppercase mb-2 font-[var(--font-primary)]">
              {title}
            </DialogTitle>
            <DialogDescription className="text-zinc-400 text-lg font-[var(--font-secondary)]">
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
          <p className="text-zinc-300 mb-4 font-[var(--font-secondary)] text-sm whitespace-pre-line">
            {body}
          </p>
          <Button 
            asChild
            variant="default"
            className="font-[var(--font-primary)] flex justify-between items-center w-full bg-zinc-950 hover:bg-zinc-800 transition-colors rounded-[4px]"
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