"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface PhotoStackProps {
  images: string[]
}

const scatterPositions = [
  { x: 0, y: 0, rotate: -12, hoverX: -50, hoverY: -30, hoverRotate: -18 },
  { x: 30, y: 20, rotate: 8, hoverX: 55, hoverY: -20, hoverRotate: 15 },
  { x: 15, y: 40, rotate: -5, hoverX: 25, hoverY: 60, hoverRotate: -8 },
]

export default function PhotoStack({ images }: PhotoStackProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [topIndex, setTopIndex] = useState(0)

  if (!images || images.length === 0) return null

  const handleClick = () => {
    setTopIndex((prev) => (prev + 1) % images.length)
  }

  // Reorder images so the clicked one cycles to top
  const getZIndex = (index: number) => {
    const diff = (index - topIndex + images.length) % images.length
    return images.length - diff
  }

  return (
    <div className="relative flex flex-col items-center">
      {/* Photo Stack */}
      <div
        className="relative h-[220px] w-[180px] cursor-pointer mx-auto mb-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {images.map((src, index) => {
          const pos = scatterPositions[index] || scatterPositions[0]
          const x = isHovered ? pos.hoverX : pos.x
          const y = isHovered ? pos.hoverY : pos.y
          const rotate = isHovered ? pos.hoverRotate : pos.rotate

          return (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-500 ease-out"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
                zIndex: getZIndex(index),
              }}
            >
              {/* Polaroid-style frame */}
              <div className="relative w-full h-full bg-white p-2 shadow-2xl">
                {/* Image area with white border */}
                <div className="relative w-full h-[calc(100%-35px)] overflow-hidden bg-gray-100">
                  <Image
                    src={src}
                    alt={`Photo ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 0vw, 180px"
                  />
                </div>
                {/* Polaroid bottom white space */}
                <div className="h-[35px] bg-white"></div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Link below photos */}
      <Link
        href="/about"
        className="text-white hover:text-white/80 font-secondary text-sm underline underline-offset-4 transition-colors"
      >
        who am i?
      </Link>
    </div>
  )
}

