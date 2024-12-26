"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Github, Search, Sun, Moon, Command } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar } from './sidebar'

interface DocsLayoutProps {
  children: React.ReactNode
  rightSidebar?: React.ReactNode
}

export function DocsLayout({ children, rightSidebar }: DocsLayoutProps) {
  const [isDark, setIsDark] = useState(false)
  
  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-zinc-950 min-h-screen">
        {/* Top Banner */}
        <div className="bg-purple-600 text-white p-2 text-center text-sm">
          <span className="inline-flex items-center">
            ✨ Introducing UI Forest Pro - 50+ components and templates to build beautiful apps in minutes. →
          </span>
        </div>

        {/* Header */}
        <header className="border-b border-gray-200 dark:border-zinc-800">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                UI Forest
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Docs
                </Link>
                <Link href="/components" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Components
                </Link>
                <Link href="/templates" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Templates
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative w-64 hidden md:block">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1 px-1.5 py-1 rounded border border-gray-200 dark:border-zinc-700">
                  <Command size={12} className="text-gray-400 dark:text-gray-500" />
                  <span className="text-xs text-gray-400 dark:text-gray-500">K</span>
                </div>
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="pl-8 pr-16 w-full bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800"
                />
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="border-gray-200 dark:border-zinc-800"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
              
              <Button variant="outline" className="hidden md:flex gap-2 border-gray-200 dark:border-zinc-800">
                <Github size={18} />
                <span>Star on GitHub</span>
                <span className="px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-800 text-xs font-medium">
                  12.6k
                </span>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4">
          <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 min-w-0 py-12 px-8">
              {children}
            </main>

            {/* Right Sidebar */}
            {rightSidebar && (
              <div className="hidden xl:block w-64 pl-8 py-12">
                {rightSidebar}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

