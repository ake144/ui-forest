import Link from "next/link"
import { Star, Github, Search, SunMoon } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-black">
      <div className="container flex h-19 items-center justify-between py-3 px-4 md:px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-white text-lg md:text-xl">UI-FOREST</span>
            <Badge variant="secondary" className="rounded-sm px-1 font-normal">
              Beta
            </Badge>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            href="/components"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
          >
            Components
          </Link>
          <div className="flex items-center space-x-2">
            <Link
              href="/templates"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              Templates
            </Link>
            <Badge variant="secondary" className="rounded-sm bg-yellow-600 text-white">
              New
            </Badge>
          </div>
          <Link
            href="/showcase"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
          >
            Showcase
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Star Button */}
          <Button
            variant="secondary"
            size="sm"
            className="h-8 space-x-2 hidden md:flex"
          >
            <Star className="h-4 w-4" />
            <span>Star on GitHub</span>
            <Badge variant="secondary" className="rounded-sm">
              12,235
            </Badge>
          </Button>

          {/* Search and Icons */}
          <div className="flex items-center space-x-2">
            {/* Search Input */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="h-8 w-40 sm:w-64 pl-8 bg-black text-white border-white/20"
              />
            </div>

            {/* Icons */}
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
              <SunMoon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden py-4 px-4">
        <nav className="flex flex-wrap items-center justify-center space-x-4">
          <Link
            href="/components"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
          >
            Components
          </Link>
          <Link
            href="/templates"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
          >
            Templates
          </Link>
          <Link
            href="/showcase"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
          >
            Showcase
          </Link>
        </nav>
      </div>
    </header>
  )
}
