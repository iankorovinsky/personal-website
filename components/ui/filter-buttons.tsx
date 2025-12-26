"use client"

import { Button } from "@/components/ui/button"

interface FilterButtonsProps {
  categories: string[]
  activeFilter: string | null
  setActiveFilter: (filter: string) => void
}

export default function FilterButtons({ categories, activeFilter, setActiveFilter }: FilterButtonsProps) {
  return (
    <div className="flex gap-4 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant="default"
          className={`text-white border-white font-[var(--font-primary)] font-weight-300 transition-colors ${
            activeFilter === category 
              ? 'bg-white text-black hover:bg-zinc-100' 
              : 'bg-black hover:bg-zinc-800'
          }`}
          onClick={() => setActiveFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
} 