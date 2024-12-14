'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

interface TemplateCardProps {
  title: string
  description: string
  price: number
  image: string
  techStack: Array<{ icon: string; label: string }>
}

export function TemplateCard({ 
  title, 
  description, 
  price, 
  image, 
  techStack
}: TemplateCardProps) {
  return (
    <motion.div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 space-y-6">
          <Badge variant="secondary" className="bg-purple-600/10 text-purple-400">
            Template
          </Badge>
          <h3 className="text-3xl font-bold text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
          <div className="flex items-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Get Access - ${price} USD
            </Button>
            <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10">
              Live Preview
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.div 
                key={index}
                className="h-8 w-8 rounded bg-gray-700 flex items-center justify-center text-white"
                whileHover={{ scale: 1.1, backgroundColor: "#4B5563" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-mono">{tech.icon}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src={image}
            alt={`${title} Preview`}
            layout="fill"
            objectFit="cover"
            className="rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
          />
        </div>
      </div>
    </motion.div>
  )
}

