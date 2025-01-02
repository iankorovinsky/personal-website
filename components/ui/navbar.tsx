"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "[home]" },
    { href: "/about", label: "[about]" },
    { href: "/experience", label: "[experience]" },
    { href: "/projects", label: "[projects]" },
    { href: "/blog", label: "[blog]" },
  ]

  return (
    <div className="w-full bg-black">
      <div className="flex flex-col items-center pt-8 w-full max-w-[800px] mx-auto px-4">
        {/* Mobile Navigation */}
        <div className="md:hidden w-full">
          <NavigationMenu className="w-full">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-black text-white hover:bg-black hover:text-white">
                  <Menu className="h-6 w-6" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex flex-col gap-2 p-4 bg-black min-w-[200px]">
                    {navItems.map((item) => (
                      <Link 
                        key={item.href}
                        href={item.href}
                        className={`p-2 text-white hover:bg-white hover:text-black font-[var(--font-primary)] ${
                          pathname === item.href ? 'bg-white text-black' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full justify-between">
          {navItems.map((item) => (
            <Button 
              key={item.href}
              variant="default" 
              className={`text-white border-white hover:bg-white hover:text-black font-[var(--font-primary)] ${
                pathname === item.href ? 'bg-white text-black' : 'bg-black'
              }`}
              asChild
            >
              <Link href={item.href}>
                {item.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}