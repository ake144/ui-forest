'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const navItems = [
  { name: 'Templates', href: '/template' },
  { name: 'Components', href: '/components' },
  { name: 'Blog', href: '/blog' },
 ]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 right-0 left-[var(--sidebar-width,0px)] z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-sm" : "bg-background"
      )}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8   bg-purple-400 rounded-lg flex items-center justify-center">
              <div className="h-6 w-6 bg-background rounded "  />
            </div>
            <span className="font-bold text-gray-50 text-xl">Ui Forest</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex text-gray-50 space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col text-white space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Call to Action */}
          <div className="hidden md:flex text-gray-50 items-center space-x-4">
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton />
          </SignedOut>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

