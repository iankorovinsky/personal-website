"use client"

import Image from "next/image"

interface PhotoStackProps {
  images: string[]
}

export default function PhotoStack({ images }: PhotoStackProps) {
  if (!images || images.length === 0) return null

  return (
    <div className="relative w-full max-w-md h-[400px] hidden lg:block">
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{
            transform: `translate(${index * 12}px, ${index * 12}px) rotate(${index % 2 === 0 ? -2 : 2}deg)`,
            zIndex: images.length - index,
          }}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border border-zinc-800/50">
            <Image
              src={src}
              alt={`Photo ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 0vw, 400px"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

