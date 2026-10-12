import { Fragment } from "react"
import Link from "next/link"

interface GlitchLinkProps {
  href: string
  brand: "baseten" | "hack-the-north" | "general-catalyst" | "monochrome"
  children: string
  className?: string
}

export default function GlitchLink({ href, brand, children, className = "" }: GlitchLinkProps) {
  const external = /^https?:\/\//.test(href)
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`glitchpop-link glitchpop-link--${brand} ${className}`}
    >
      {children.split(" ").map((word, index) => (
        <Fragment key={index}>
          {index > 0 && <span className="glitchpop-space">{" "}</span>}
          <span className="glitchpop-word">
            <span className="glitchpop-text">{word}</span>
            <span className="glitchpop-slice glitchpop-slice--top" aria-hidden="true">{word}</span>
            <span className="glitchpop-slice glitchpop-slice--bottom" aria-hidden="true">{word}</span>
          </span>
        </Fragment>
      ))}
    </Link>
  )
}
