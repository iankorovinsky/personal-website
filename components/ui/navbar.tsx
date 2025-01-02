"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="w-full bg-black">
      <div className="flex flex-col items-center pt-8 w-full max-w-[800px] mx-auto px-4">
        <div className="w-full flex justify-between">
        <Button 
            variant="default" 
            className={`text-white border-white hover:bg-white hover:text-black font-[var(--font-primary)] ${pathname === '/' ? 'bg-white text-black' : 'bg-black'}`}
            asChild
          >
            <Link href="/">
              [home]
            </Link>
          </Button>
          <Button 
            variant="default" 
            className={`text-white border-white hover:bg-white hover:text-black font-[var(--font-primary)] ${pathname === '/about' ? 'bg-white text-black' : 'bg-black'}`}
            asChild
          >
            <Link href="/about">
              [about]
            </Link>
          </Button>
          <Button 
            variant="default" 
            className={`text-white border-white hover:bg-white hover:text-black font-[var(--font-primary)] ${pathname === '/experience' ? 'bg-white text-black' : 'bg-black'}`}
            asChild
          >
            <Link href="/experience">
              [experience]
            </Link>
          </Button>
          <Button 
            variant="default" 
            className={`text-white border-white hover:bg-white hover:text-black font-[var(--font-secondary)] ${pathname === '/projects' ? 'bg-white text-black' : 'bg-black'}`}
            asChild
          >
            <Link href="/projects">
              [projects]
            </Link>
          </Button>
          <Button 
            variant="default" 
            className={`text-white border-white hover:bg-white hover:text-black ${pathname === '/blog' ? 'bg-white text-black' : 'bg-black'}`}
            asChild
          >
            <Link href="/blog">
              [blog]
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 