"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Search, Sparkles, Grid, List } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

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
            Discover Our Cutting-Edge
            <br />
            Web Templates Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
          >
            Explore our curated selection of modern, responsive website templates
            built with React, Next.js, and Tailwind CSS. Perfect for your next project.
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
            <div className="flex items-center gap-4">
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
              <Button
                variant={viewMode === 'grid' ? 'secondary' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'secondary' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-zinc-900/50 border border-zinc-800/50 text-gray-100 backdrop-blur-sm w-fit">
              <TabsTrigger value="all" className="data-[state=active]:bg-zinc-800 ">All</TabsTrigger>
              <TabsTrigger value="free" className="data-[state=active]:bg-zinc-800">Free</TabsTrigger>
              <TabsTrigger value="premium" className="data-[state=active]:bg-zinc-800">Premium</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <div className={cn(
                "grid gap-8",
                viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              )}>
                {featuredTemplates.map((template) => (
                  <FeaturedTemplateCard key={template.name} {...template} viewMode={viewMode} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="free" className="mt-8">
              <div className={cn(
                "grid gap-8",
                viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              )}>
                {filteredTemplates.filter(t => t.price === 0).map((template) => (
                  <TemplateCard key={template.name} {...template} viewMode={viewMode} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="premium" className="mt-8">
              <div className={cn(
                "grid gap-8",
                viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              )}>
                {filteredTemplates.filter(t => t.price > 0).map((template) => (
                  <TemplateCard key={template.name} {...template} viewMode={viewMode} />
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

function FeaturedTemplateCard({ name, description, price, image, stack = [], viewMode }: TemplatesType & { viewMode: 'grid' | 'list' }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={cn(
        "group bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800/50 my-8 overflow-hidden",
        viewMode === 'list' && "flex"
      )}>
        <CardHeader className={cn("p-0", viewMode === 'list' && "w-1/3")}>
          <div className="aspect-video relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img src={image} alt={name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
          </div>
        </CardHeader>
        <div className={cn(viewMode === 'list' && "w-2/3")}>
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
              <a href="#" className="flex items-center text-gray-50/50 justify-center gap-2">
                View Template
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  )
}

function TemplateCard({ name, description, price, image, stack = [], link, buyLink, viewMode }: TemplatesType & { viewMode: 'grid' | 'list' }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={cn(
        "group bg-zinc-900 border-zinc-800/50 overflow-hidden",
        viewMode === 'list' && "flex"
      )}>
        <CardHeader className={cn("p-0", viewMode === 'list' && "w-1/3")}>
          <div className="aspect-video relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img src={image} alt={name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
          </div>
        </CardHeader>
        <div className={cn(viewMode === 'list' && "w-2/3")}>
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
        </div>
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
    name: "E-commerce Plus",
    description: "Complete e-commerce solution with cart, checkout, and inventory management.",
    price: 99,
    image: "/e-commerce.png",
    link: '#',
    buyLink: '#',
    stack: ['Next.js', 'React', 'Tailwind CSS']
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
  { name: "Blog", description: "Clean and minimal blog", price: 39, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
  { name: "Portfolio", description: "Showcase your work", price: 29, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
  { name: "Landing Page", description: "High-converting landing page", price: 59, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
  { name: "SaaS Application", description: "Ready-to-use SaaS template", price: 99, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
  { name: "Personal Blog", description: "Minimalist personal blog", price: 0, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
  { name: "Startup Landing", description: "Modern startup landing page", price: 0, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
  { name: "Restaurant Menu", description: "Digital menu for restaurants", price: 19, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
]

