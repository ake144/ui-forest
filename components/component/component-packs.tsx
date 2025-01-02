'use client'


import { ComponentCard } from "./component-card"
import { motion } from "framer-motion"
import { ExploreButton } from "../explorebutton"

const componentPacks = [
  {
    title: "Hero Sections",
    description: "Modern, eye-catching hero sections",
    imageUrl: "/hero.png",
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
    imageUrl: "/features.png",
    count: 4,
    price: 9,
  },
  {
    title: "Bento Grids",
    description: "Customizable, modern bento grid layouts",
    imageUrl: "/bento.png",
    count: 3,
    price: 12,
  },
  {
    title: "Blog Content",
    description: "Stylish layouts for blog posts and articles",
    imageUrl: "/blog-content.png",
    count: 2,
    price: 9,
  },
  {
    title: "Blog Sections",
    description: "Versatile blog section components",
    imageUrl: "/blog.png",
    count: 2,
    price: 12,
  },
]

export function ComponentPacks() {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 py-24">
      <div className="container mx-auto px-4">
                {/* Title Section with BG Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-6xl p-3 font-extrabold text-white mb-4 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Component Packs
          </h2>
          {/* Title Glow Effect */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-72 h-72 bg-[#ac25ff] rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="w-72 h-72 bg-[#b845ff] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          </div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto relative z-10">
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
         <ExploreButton  link="/components"/>
        </motion.div>
      </div>
    </section>
  )
}

