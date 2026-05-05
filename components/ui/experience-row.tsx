"use client"

interface ExperienceRowProps {
  title: string
  subtitle: string
  url: string
  year: string
  isLast?: boolean
}

export default function ExperienceRow({ 
  title, 
  subtitle, 
  url, 
  year,
  isLast = false
}: ExperienceRowProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block py-6 transition-colors duration-200 group ${!isLast ? 'border-b border-zinc-800/50' : ''}`}
    >
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h3 className="text-zinc-200 text-lg font-medium font-secondary group-hover:text-white transition-colors relative inline-block">
          {title}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
        </h3>
        <span className="text-zinc-500 text-sm font-light font-secondary flex-shrink-0">
          {year}
        </span>
      </div>
      <p className="text-zinc-400 text-sm font-light font-secondary">
        {subtitle}
      </p>
    </a>
  )
}
