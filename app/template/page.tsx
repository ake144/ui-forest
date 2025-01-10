"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {  Search,  Grid, List } from 'lucide-react'
import { cn } from "@/lib/utils"
import { allTemplates, featuredTemplates } from '@/lib/data'
import { FeaturedTemplateCard, TemplateCard } from '@/components/template/templates-page-card'
import { ContactWidget } from '@/components/component-widget'



export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredTemplates = allTemplates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      {/* Purple gradient spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <header className="text-center mb-24 mt-[100px] relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[128px] pointer-events-none" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl md:text-6xl  font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            Discover Our Cutting-Edge
            <br />
            Web Templates Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-md md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
          >
            Explore our curated selection of modern, responsive website templates
            built with React, Next.js, and Tailwind CSS. Perfect for your next project.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-3 md:gap-8 mb-16"
          >
            <StatsCard label="Free Templates" value="4" />
            <StatsCard label="Premium Templates" value="14" />
            <StatsCard label="Total Downloads" value="2.8k+" />
          </motion.div>
        </header>

        <section className="mb-16 relative">
          <div className="flex justify-between items-center mb-8">
            <h2 className="hidden md:text-3xl font-semibold text-white">Featured Templates</h2>
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

        <ContactWidget  />
      </div>
    </div>
  )
}

function StatsCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="md:px-8 px-2 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm"
    >
      <div className="sm:text-xl text-md md:text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-zinc-400">{label}</div>
    </motion.div>
  )
}
