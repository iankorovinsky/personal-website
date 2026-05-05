"use client"

interface TimelineProps {
  children: React.ReactNode
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-zinc-700 via-zinc-600 to-zinc-800 transform md:-translate-x-1/2" />
      
      <div className="space-y-12">
        {children}
      </div>
    </div>
  )
}

interface TimelineItemProps {
  year: string
  children: React.ReactNode
  index: number
}

export function TimelineItem({ year, children, index }: TimelineItemProps) {
  const isEven = index % 2 === 0
  
  return (
    <div className={`relative flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Year marker - centered on line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-zinc-900 border-2 border-zinc-600 flex items-center justify-center z-10 shadow-lg">
          <span className="text-xs font-medium text-white font-secondary">{year}</span>
        </div>
      </div>
      
      {/* Card - positioned left or right on desktop, always right on mobile */}
      <div className={`flex-1 ml-16 md:ml-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
        <div className={isEven ? 'md:text-right' : 'md:text-left'}>
          {children}
        </div>
      </div>
      
      {/* Spacer for other side */}
      <div className="hidden md:block flex-1" />
    </div>
  )
}
