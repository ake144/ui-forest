'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const showcaseItems = [
  { title: "Admin Dashboard", image: "/placeholder.svg?height=400&width=600" },
  { title: "E-commerce Template", image: "/placeholder.svg?height=400&width=600" },
  { title: "Portfolio Site", image: "/placeholder.svg?height=400&width=600" },
  { title: "Blog Template", image: "/placeholder.svg?height=400&width=600" },
  { title: "Landing Page", image: "/placeholder.svg?height=400&width=600" },
]

export default function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + showcaseItems.length) % showcaseItems.length)
  }

  return (
    <section id="showcase" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Showcase
        </motion.h2>
        <div className="relative">
          <motion.div 
            className="overflow-hidden rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {showcaseItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Image src={item.image} alt={item.title} width={600} height={400} className="w-full" />
                  <div className="p-4 bg-gray-800">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <Button variant="outline" size="sm">View Demo</Button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

