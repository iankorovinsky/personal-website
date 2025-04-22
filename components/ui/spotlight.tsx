"use client"

import { useEffect, useState } from "react"

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if device is touch-enabled
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)

    // Only add event listener if not a touch device
    if (!isTouchDevice) {
      const handleMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY })
      }

      window.addEventListener('mousemove', handleMove)
      return () => window.removeEventListener('mousemove', handleMove)
    }
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <div 
      className="spotlight" 
      style={{ 
        '--x': `${position.x}px`,
        '--y': `${position.y}px`
      } as React.CSSProperties}
    />
  )
} 