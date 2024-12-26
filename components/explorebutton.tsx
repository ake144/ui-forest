'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ExploreButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      size="lg"
      className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 ease-out transform hover:scale-105 focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:focus:ring-indigo-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 flex items-center">
        Explore All Packs
        <ChevronRight className="ml-2 h-4 w-4" />
      </span>
      <motion.div
        className="absolute inset-0 z-0"
        initial={false}
        animate={isHovered ? { scale: 1.5 } : { scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-white opacity-20 blur-2xl" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={false}
        animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Sparkles className="text-yellow-300 h-6 w-6" />
      </motion.div>
    </Button>
  )
}

