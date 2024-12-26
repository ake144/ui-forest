"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Premium Headphones", price: "$299", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "Wireless Keyboard", price: "$129", image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "4K Monitor", price: "$499", image: "/placeholder.svg?height=300&width=300" },
  { id: 4, name: "Ergonomic Mouse", price: "$79", image: "/placeholder.svg?height=300&width=300" },
]

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto py-16">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-1/2">
              <img
                src={products[currentIndex].image}
                alt={products[currentIndex].name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/2 pl-8">
              <h2 className="text-3xl font-bold mb-4">{products[currentIndex].name}</h2>
              <p className="text-2xl text-gray-600 mb-6">{products[currentIndex].price}</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Add to Cart
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={prevProduct}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextProduct}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

