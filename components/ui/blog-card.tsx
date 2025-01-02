"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface BlogCardProps {
  title: string
  subtitle: string
  date: string
  slug: string
  preview: string
}

export default function BlogCard({ title, subtitle, date, slug, preview }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card 
        className="bg-transparent text-white border-0 rounded-3xl overflow-hidden w-full max-w-md hover:scale-105 hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer"
      >
        <CardContent className="p-6">
          <div className="text-zinc-400 text-sm mb-2 font-[var(--font-secondary)]">{date}</div>
          <h2 className="text-zinc-100 text-2xl font-bold tracking-wide uppercase mb-1 font-[var(--font-primary)]">
            {title}
          </h2>
          <p className="text-zinc-400 text-sm font-[var(--font-secondary)]">
            {subtitle}
          </p>
          <p className="text-zinc-300 text-sm mt-4 font-[var(--font-secondary)]">
            {preview}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
} 