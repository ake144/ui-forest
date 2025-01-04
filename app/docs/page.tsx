"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Book, Layers, Copy, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('components')

  const components = [
    { name: 'Button', description: 'A clickable button component with various styles.' },
    { name: 'Card', description: 'A versatile card component for displaying content.' },
    { name: 'Input', description: 'An input field for collecting user data.' },
  ]

  const templates = [
    { name: 'Landing Page', description: 'A responsive landing page template.' },
    { name: 'Dashboard', description: 'An admin dashboard template with various widgets.' },
    { name: 'Blog', description: 'A clean and modern blog template.' },
  ]

  const filteredComponents = components.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredTemplates = templates.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
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
            UI Forest Documentation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
          >
            Explore our collection of modern, responsive UI components and templates
            built with React, Next.js, and Tailwind CSS.
          </motion.p>
        </header>

        <section className="mb-16 relative">
          <div className="flex justify-between items-center mb-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search components and templates..."
                className="w-64 bg-zinc-900/50 border-zinc-800 text-white placeholder-zinc-400 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
            </div>
          </div>

          <Tabs defaultValue="components" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="bg-zinc-900/50 border border-zinc-800/50 text-gray-100 backdrop-blur-sm w-fit mb-8">
              <TabsTrigger value="components" className="data-[state=active]:bg-zinc-800">
                <Book className="w-5 h-5 mr-2" />
                Components
              </TabsTrigger>
              <TabsTrigger value="templates" className="data-[state=active]:bg-zinc-800">
                <Layers className="w-5 h-5 mr-2" />
                Templates
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="components">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredComponents.map((component) => (
                  <Card key={component.name} className="bg-zinc-900/50 border-zinc-800/50 text-white">
                    <CardHeader>
                      <CardTitle>{component.name}</CardTitle>
                      <CardDescription className="text-zinc-400">{component.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="secondary" className="w-full mb-2">
                        <Link href="/components/docs" className="flex items-center justify-center">
                          <Book className="w-4 h-4 mr-2" />
                          View Documentation
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Code
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredComponents.length === 0 && (
                <p className="text-center text-zinc-400 mt-8">No components found matching your search.</p>
              )}
            </TabsContent>
            
            <TabsContent value="templates">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredTemplates.map((template) => (
                  <Card key={template.name} className="bg-zinc-900/50 border-zinc-800/50 text-white">
                    <CardHeader>
                      <CardTitle>{template.name}</CardTitle>
                      <CardDescription className="text-zinc-400">{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="secondary" className="w-full">
                        <Link href="#" className="flex items-center justify-center">
                          <Github className="w-4 h-4 mr-2" />
                          Clone Repository
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredTemplates.length === 0 && (
                <p className="text-center text-zinc-400 mt-8">No templates found matching your search.</p>
              )}
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Installation</h2>
          <Card className="bg-zinc-900/50 border-zinc-800/50 text-white">
            <CardContent className="pt-6">
              {activeTab === 'components' ? (
                <>
                  <p className="mb-4 text-zinc-400">To use our components, simply copy the code and paste it into your project. Then customize as needed.</p>
                  <p className="mb-4 text-zinc-400">For detailed documentation on each component, visit:</p>
                  <code className="bg-zinc-800 px-2 py-1 rounded">/components/docs</code>
                </>
              ) : (
                <>
                  <p className="mb-4 text-zinc-400">To use our templates, follow these steps:</p>
                  <ol className="list-decimal list-inside text-zinc-400">
                    <li className="mb-2">Clone the repository:
                      <br />
                      <code className="bg-zinc-800 px-2 py-1 rounded">git clone https://github.com/ui-forest/templates.git</code>
                    </li>
                    <li className="mb-2">Navigate to the project directory:
                      <br />
                      <code className="bg-zinc-800 px-2 py-1 rounded">cd templates</code>
                    </li>
                    <li className="mb-2">Install dependencies:
                      <br />
                      <code className="bg-zinc-800 px-2 py-1 rounded">npm install</code>
                    </li>
                    <li className="mb-2">Start the development server:
                      <br />
                      <code className="bg-zinc-800 px-2 py-1 rounded">npm run dev</code>
                    </li>
                    <li>Open your browser and visit <code className="bg-zinc-800 px-2 py-1 rounded">http://localhost:3000</code></li>
                  </ol>
                </>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

