'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

interface TemplateSectionProps {
  title: string
  description: string
  price: number
  image: string
  techStack: Array<{ icon: string; label: string }>
  // isActive: boolean,
  link:string;
}

export function TemplateSection({ 
  title, 
  description, 
  price, 
  image, 
  techStack,
  link,

}: TemplateSectionProps) {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <Badge variant="secondary" className="bg-purple-600/10 text-purple-400 mb-4">
                Template
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-4">
                {title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {description}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Get Access - ${price} USD
              </Button>
              
              <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10">
                <span> <Link href={link}>Live Preview</Link></span>
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Button>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {techStack.map((tech, index) => (
                <motion.div 
                  key={index}
                  className="h-8 w-8 rounded bg-gray-800 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-mono text-white">{tech.icon}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative rounded-lg overflow-hidden border border-gray-700 aspect-video">
              <Image
                src={image}
                alt={`${title} Preview`}
                layout="fill"
                objectFit="cover"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

