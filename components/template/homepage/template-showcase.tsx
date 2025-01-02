'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TemplateSection } from './template-section'


const templates = [
  {
    title: "Developer First Headless CMS",
    description: "A professional headless CMS designed for solo developers and enterprises. Build powerful content management systems with our SDK wrapper and extensive customization options.",
    price: 49,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: [
      { icon: "N", label: "Next.js" },
      { icon: "⚛", label: "React" },
      { icon: "TS", label: "TypeScript" },
      { icon: "~", label: "Tailwind" },
      { icon: "M", label: "MDX" },
      { icon: "⚡", label: "API" }
    ]
  },
  {
    title: "E-commerce site",
    description: "A complete solution for building a modern e-commerce site. Includes a powerful CMS, payment gateway integration, and a customizable storefront.",
    price: 59,
    image: "/e-commerce.png",
    techStack: [
      { icon: "⚛", label: "Nextjs" },
      { icon: "🐍", label: "React" },
      { icon: "⚡", label: "API" },
      { icon: "TS", label: "TypeScript" },
      { icon: "☁️", label: "Tailwindcss" }
    ]
  },
  {
    title: "one profile",
    description: "A complete solution for building a modern prfile with modern features and templates.build effortlessly your profile and improve your online presence.",
    price: 59,
    image: "/profile.png",
    techStack: [
      { icon: "⚛", label: "Nextjs" },
      { icon: "🐍", label: "React" },
      { icon: "⚡", label: "API" },
      { icon: "TS", label: "TypeScript" },
      { icon: "☁️", label: "Tailwindcss" }
    ]
  },
  {
    title: "Mail for Developers",
    description: "Enterprise-grade email solution at an affordable price. Built for developers who need reliable, scalable email infrastructure with powerful APIs and comprehensive documentation.",
    price: 79,
    image: "/placeholder.svg?height=800&width=1200",
    techStack: [
      { icon: "📧", label: "Email" },
      { icon: "⚡", label: "API" },
      { icon: "🔒", label: "Security" },
      { icon: "☁️", label: "Cloud" },
      { icon: "📊", label: "Analytics" }
    ]
  }
]

export function TemplatesShowcase() {
  const [activeTemplate, setActiveTemplate] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(templates.length - 1) * 100}%`])

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY
        const containerHeight = containerRef.current.clientHeight
        const windowHeight = window.innerHeight
        const scrollPercentage = scrollPosition / (containerHeight - windowHeight)
        const newActiveTemplate = Math.floor(scrollPercentage * templates.length)
        setActiveTemplate(Math.min(newActiveTemplate, templates.length - 1))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative  min-h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full"
          style={{ x }}
        >
          {templates.map((template, index) => (
            <motion.div
              key={index}
              className="w-screen flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TemplateSection {...template} isActive={activeTemplate === index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

