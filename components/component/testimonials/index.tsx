"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    content: "This product has revolutionized our workflow. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Director, InnovateCo",
    content: "Exceptional quality and customer service. A game-changer for our team.",
    rating: 4,
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Freelance Designer",
    content: "I can't imagine working without this tool now. It's become indispensable.",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl text-gray-600 font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="relative h-64">
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <p className="text-xl text-gray-500 mb-4">&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
                <div className="flex justify-center mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="font-semibold text-gray-500">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

