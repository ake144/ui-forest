"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Search, Sparkles } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTemplates = allTemplates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-black">
      {/* Purple gradient spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <header className="text-center mb-24 mt-[100px] relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[128px] pointer-events-none" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            Collections of beautifully
            <br />
            crafted modern templates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
          >
            A collection of styled and beautifully designed website templates,
            built with React, Next.js with Tailwind CSS.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-8 mb-16"
          >
            <StatsCard label="Free Templates" value="4" />
            <StatsCard label="Premium Templates" value="14" />
            <StatsCard label="Total Downloads" value="2.8k+" />
          </motion.div>
        </header>

        <section className="mb-16 relative">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold text-white">Featured Templates</h2>
            <div className="relative">
              <Input
                type="search"
                placeholder="Search templates..."
                className="w-64 bg-zinc-900/50 border-zinc-800 text-white placeholder-zinc-400 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm w-fit">
              <TabsTrigger value="all" className="data-[state=active]:bg-zinc-800">All</TabsTrigger>
              <TabsTrigger value="free" className="data-[state=active]:bg-zinc-800">Free</TabsTrigger>
              <TabsTrigger value="premium" className="data-[state=active]:bg-zinc-800">Premium</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredTemplates.map((template) => (
                  <FeaturedTemplateCard key={template.name} {...template} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="free" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTemplates.filter(t => t.price === 0).map((template) => (
                  <TemplateCard key={template.name} {...template} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="premium" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTemplates.filter(t => t.price > 0).map((template) => (
                  <TemplateCard key={template.name} {...template} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}

function StatsCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="px-8 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm"
    >
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-zinc-400">{label}</div>
    </motion.div>
  )
}

function FeaturedTemplateCard({ name, description, price, image, stack = [] }: TemplatesType) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800/50 overflow-hidden">
        <CardHeader className="p-0">
          <div className="aspect-video relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img src={image} alt={name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="text-xl text-white">{name}</CardTitle>
            <Badge variant="secondary" className="bg-zinc-800 text-white">
              {price === 0 ? 'Free' : `$${price}`}
            </Badge>
          </div>
          <CardDescription className="text-zinc-400 mb-4">{description}</CardDescription>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-zinc-900/50 border-zinc-700 text-zinc-400">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button className="w-full bg-zinc-800 hover:bg-zinc-700" asChild>
            <a href="#" className="flex items-center justify-center gap-2">
              View Template
              <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

function TemplateCard({ name, description, price, image, stack = [], link, buyLink }: TemplatesType) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="group bg-zinc-900 border-zinc-800/50 overflow-hidden">
        <CardHeader className="p-0">
          <div className="aspect-video relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img src={image} alt={name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="text-xl text-white">{name}</CardTitle>
            <Badge variant="secondary" className="bg-zinc-800 text-white">
              {price === 0 ? 'Free' : `$${price}`}
            </Badge>
          </div>
          <CardDescription className="text-zinc-400 mb-4">{description}</CardDescription>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-zinc-900/50 border-zinc-700 text-zinc-400">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-4">
          <Button variant="outline" className="flex-1" asChild>
            <a href={link}>Demo</a>
          </Button>
          <Button className="flex-1 bg-zinc-800 hover:bg-zinc-700" asChild>
            <a href={buyLink}>
              {price === 0 ? 'Download' : 'Purchase'}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

type TemplateType = {
  name: string;
  description: string;
  price: number;
  image: string;
}

type TemplatesType = TemplateType & {
  link: string;
  buyLink: string;
  stack: string[];
}

const featuredTemplates: TemplatesType[] = [
  {
    name: "Pro Dashboard",
    description: "A modern and responsive admin dashboard with dark mode support and comprehensive analytics.",
    price: 79,
    image: "/placeholder.svg?height=720&width=1280",
    link: '#',
    buyLink: '#',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    name: "/e-commerce.png",
    link: '#',
    buyLink: '#',
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    description: "Complete e-commerce solution with cart, checkout, and inventory management.",
    price: 99,
    image: "/e-commerce.png"
  },
  {
    name: "Dashboard",
    description: "Modern admin dashboard with dark mode and real-time analytics.",
    price: 49,
    image: "/placeholder.svg?height=720&width=1280",
    link: '',
    buyLink: '',
    stack: ['Next.js', 'React', 'NextAuth', 'Prisma', 'Supabase']
  },
]

const allTemplates: TemplatesType[] = [
  {
    name: "Dashboard",
    description: "Modern admin dashboard with dark mode and real-time analytics.",
    price: 49,
    image: "/placeholder.svg?height=720&width=1280",
    link: '',
    buyLink: '',
    stack: ['Next.js', 'React', 'NextAuth', 'Prisma', 'Supabase']
  },
  {
    name: "E-commerce",
    description: "Full-featured online store with product management and payments.",
    price: 79,
    image: "/placeholder.svg?height=720&width=1280",
    link: '',
    buyLink: '',
    stack: ['Next.js', 'React', 'Stripe', 'Prisma', 'PostgreSQL']
  },
  // ... rest of the templates remain the same
]

