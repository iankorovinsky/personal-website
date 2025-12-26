"use client"

import { useEffect, useRef } from "react"

export default function DoodleBackground() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    // Generate random doodle paths
    const generateDoodlePath = (width: number, height: number) => {
      const points: { x: number; y: number }[] = []
      const numPoints = Math.floor(Math.random() * 8) + 5
      const startX = Math.random() * width
      const startY = Math.random() * height

      points.push({ x: startX, y: startY })

      for (let i = 1; i < numPoints; i++) {
        const prevPoint = points[i - 1]
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 150 + 50
        const x = Math.max(0, Math.min(width, prevPoint.x + Math.cos(angle) * distance))
        const y = Math.max(0, Math.min(height, prevPoint.y + Math.sin(angle) * distance))
        points.push({ x, y })
      }

      // Create smooth path with quadratic curves for doodle effect
      let path = `M ${points[0].x} ${points[0].y} `
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1]
        const curr = points[i]
        const midX = (prev.x + curr.x) / 2
        const midY = (prev.y + curr.y) / 2
        path += `Q ${prev.x} ${prev.y} ${midX} ${midY} `
        if (i === points.length - 1) {
          path += `T ${curr.x} ${curr.y}`
        }
      }

      return path
    }

    const updatePaths = () => {
      if (!svg) return
      const width = window.innerWidth
      const height = window.innerHeight
      svg.setAttribute("width", width.toString())
      svg.setAttribute("height", height.toString())

      const pathsGroup = svg.querySelector(".doodle-paths")
      const defs = svg.querySelector("defs")
      if (pathsGroup && defs) {
        pathsGroup.innerHTML = ""
        // Clear old animations
        defs.querySelectorAll("style").forEach(style => style.remove())
        
        // Generate multiple doodle lines
        for (let i = 0; i < 15; i++) {
          const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
          path.setAttribute("d", generateDoodlePath(width, height))
          path.setAttribute("fill", "none")
          path.setAttribute("stroke", "#6b7280")
          path.setAttribute("stroke-width", "1.5")
          path.setAttribute("opacity", "0.3")
          path.setAttribute("stroke-linecap", "round")
          path.setAttribute("stroke-linejoin", "round")
          
          // Random animation delay and duration
          const delay = Math.random() * 8
          const duration = 25 + Math.random() * 20
          const tx1 = (Math.random() - 0.5) * 80
          const ty1 = (Math.random() - 0.5) * 80
          const tx2 = (Math.random() - 0.5) * 80
          const ty2 = (Math.random() - 0.5) * 80
          const rot1 = (Math.random() - 0.5) * 3
          const rot2 = (Math.random() - 0.5) * 3
          
          // Create unique animation for each path
          const animationName = `doodleMove-${i}`
          const style = document.createElementNS("http://www.w3.org/2000/svg", "style")
          style.textContent = `
            @keyframes ${animationName} {
              0%, 100% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0.3;
              }
              25% {
                transform: translate(${tx1}px, ${ty1}px) rotate(${rot1}deg);
                opacity: 0.4;
              }
              50% {
                transform: translate(${tx2}px, ${ty2}px) rotate(${rot2}deg);
                opacity: 0.35;
              }
              75% {
                transform: translate(${tx1 * 0.7}px, ${ty1 * -0.7}px) rotate(${rot1 * 0.7}deg);
                opacity: 0.4;
              }
            }
          `
          defs.appendChild(style)
          
          path.style.animation = `${animationName} ${duration}s ease-in-out infinite`
          path.style.animationDelay = `${delay}s`
          
          pathsGroup.appendChild(path)
        }
      }
    }

    updatePaths()
    window.addEventListener("resize", updatePaths)

    return () => {
      window.removeEventListener("resize", updatePaths)
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    >
      <defs>
      </defs>
      <g className="doodle-paths" />
    </svg>
  )
}

