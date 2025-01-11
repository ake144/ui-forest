"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function FloatingCTABanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4  right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg z-50"
        >
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold mr-4">Get 20% off your first purchase!</p>
            <div className="flex items-center">
              <Button size="sm" className="bg-white text-purple-600 hover:bg-gray-100 mr-2">
                Shop Now
              </Button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-gray-200"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

