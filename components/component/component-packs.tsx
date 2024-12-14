'use client'

import { Button } from "@/components/ui/button"
import { ComponentCard } from "./component-card"
import { motion } from "framer-motion"

const componentPacks = [
  {
    title: "Hero Sections",
    description: "Modern, eye-catching hero sections",
    imageUrl: "/placeholder.svg?height=300&width=400",
    count: 8,
    price: 12,
  },
  {
    title: "Logo Clouds",
    description: "Animated logo clouds with micro-interactions",
    imageUrl: "/placeholder.svg?height=300&width=400",
    count: 3,
    price: 10,
  },
  {
    title: "Feature Sections",
    description: "Versatile feature layouts including bento grids",
    imageUrl: "/placeholder.svg?height=300&width=400",
    count: 4,
    price: 9,
  },
  {
    title: "Bento Grids",
    description: "Customizable, modern bento grid layouts",
    imageUrl: "/placeholder.svg?height=300&width=400",
    count: 3,
    price: 12,
  },
  {
    title: "Blog Content",
    description: "Stylish layouts for blog posts and articles",
    imageUrl: "/placeholder.svg?height=300&width=400",
    count: 2,
    price: 9,
  },
  {
    title: "Blog Sections",
    description: "Versatile blog section components",
    imageUrl: "/placeholder.svg?height=300&width=400",
    count: 2,
    price: 12,
  },
]

export function ComponentPacks() {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Component Packs</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Elevate your website with our curated collection of modern, customizable building blocks.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {componentPacks.map((pack, index) => (
            <motion.div
              key={pack.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ComponentCard {...pack} />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200 transition-colors">
            Explore All Packs
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

