"use client"

import { Button } from "@/components/ui/button"

interface FilterButtonsProps {
  categories: string[]
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

export default function FilterButtons({ categories, activeFilter, setActiveFilter }: FilterButtonsProps) {
  return (
    <div className="flex gap-4 mb-8">
      <Button
        variant="default"
        className={`text-white border-white hover:bg-white hover:text-black ${
          activeFilter === 'all' ? 'bg-white text-black' : 'bg-black'
        }`}
        onClick={() => setActiveFilter('all')}
      >
        [all]
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant="default"
          className={`text-white border-white hover:bg-white hover:text-black ${
            activeFilter === category ? 'bg-white text-black' : 'bg-black'
          }`}
          onClick={() => setActiveFilter(category)}
        >
          [{category}]
        </Button>
      ))}
    </div>
  )
} 