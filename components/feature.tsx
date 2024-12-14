'use client'

import { Layout, Palette, Zap, Code } from 'lucide-react'
import { motion } from "framer-motion"

const features = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Responsive Templates",
    description: "Fully responsive designs that look great on any device."
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Customizable Components",
    description: "Easily customize colors, fonts, and styles to match your brand."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performance Optimized",
    description: "Lightweight and fast-loading for optimal user experience."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Developer Friendly",
    description: "Clean, well-documented code that's easy to integrate and modify."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose DesignKit?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-500 rounded-full p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

