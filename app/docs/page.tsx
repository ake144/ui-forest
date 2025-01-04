"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Layers, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState('components')

  return (
    <div className="min-h-screen ">
      {/* Additional spotlight effect for the header area */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/30 rounded-full blur-[128px] pointer-events-none opacity-80" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <header className="text-center mb-24 relative">
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
            Your comprehensive guide to understanding and implementing our modern UI components
            and templates built with React, Next.js, and Tailwind CSS.
          </motion.p>
        </header>

        <section className="mb-16 relative">
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
              <div className="grid gap-8">
                <Card className="bg-zinc-900/50 border-zinc-800/50 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl">What are UI Forest Components?</CardTitle>
                    <CardDescription className="text-zinc-400 text-lg">
                      Our components are carefully crafted, reusable UI elements that help you build consistent and beautiful interfaces.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">Key Features</h3>
                      <ul className="list-disc list-inside text-zinc-400 space-y-2">
                        <li>Built with React and Next.js for optimal performance</li>
                        <li>Fully customizable with Tailwind CSS</li>
                        <li>Accessible by default, following WCAG guidelines</li>
                        <li>Responsive design that works across all devices</li>
                        <li>Dark mode support out of the box</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">Why Use Our Components?</h3>
                      <div className="text-zinc-400 space-y-2">
                        <p>Our components are designed to accelerate your development process while maintaining high quality and consistency. They are:</p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                          <li>Thoroughly tested and production-ready</li>
                          <li>Built with TypeScript for better type safety</li>
                          <li>Optimized for performance and bundle size</li>
                          <li>Regularly updated with new features and improvements</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">How to Use</h3>
                      <div className="text-zinc-400 space-y-4">
                        <p>To use our components just follow this simple steps</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>copy the code</li>
                          <li>paste it into your project</li>
                          <li>customize as you needed</li>
                          <li>Read detailed API documentation</li>
                        </ul>
                      </div>
                      <Button variant="secondary" className="mt-4" asChild>
                        <Link href="/components/docs" className="flex items-center">
                          View Installation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">Getting Started</h3>
                      <div className="text-zinc-400 space-y-4">
                        <p>To start using our components, visit our components page where you can:</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Browse our complete component library</li>
                          <li>View live examples and usage patterns</li>
                          <li>Copy code snippets directly into your project</li>
                          <li>Read detailed API documentation</li>
                        </ul>
                      </div>
                      <Button variant="secondary" className="mt-4" asChild>
                        <Link href="/components" className="flex items-center">
                          View Components
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="templates">
              <div className="grid gap-8">
                <Card className="bg-zinc-900/50 border-zinc-800/50 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl">About Our Templates</CardTitle>
                    <CardDescription className="text-zinc-400 text-lg">
                      Jump-start your projects with our professionally designed, fully functional website templates.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">Template Categories</h3>
                      <ul className="list-disc list-inside text-zinc-400 space-y-2">
                        <li>Landing Pages - Perfect for product launches and marketing</li>
                        <li>Dashboards - Administrative interfaces with data visualization</li>
                        <li>E-commerce - Complete online store templates</li>
                        <li>Blogs - Modern content management layouts</li>
                        <li>Portfolio - Showcase your work professionally</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">Template Benefits</h3>
                      <div className="text-zinc-400 space-y-2">
                        <p>Our templates provide numerous advantages:</p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                          <li>Significant time savings in development</li>
                          <li>Professional designs that follow best practices</li>
                          <li>Modular structure for easy customization</li>
                          <li>SEO-friendly architecture</li>
                          <li>Performance optimized out of the box</li>
                        </ul>
                      </div>
                    </div>


                <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">How to Use</h3>
                      <div className="text-zinc-400 space-y-4">
                        <p>To use our templates, follow these steps:</p>
                        <ol className="list-decimal list-inside text-zinc-200">
                            <li className="mb-2">Clone the repository:
                            <br />
                            <code className="bg-zinc-600 px-2 py-1 rounded">git clone https://github.com/ake144/ui-forest.git</code>
                            </li>
                            <li className="mb-2">Navigate to the project directory:
                            <br />
                            <code className="bg-zinc-600 px-2 py-1 rounded">cd ui-forest</code>
                            </li>
                            <li className="mb-2">Install dependencies:
                            <br />
                            <code className="bg-zinc-600 px-2 py-1 rounded">npm install</code>
                            </li>
                            <li className="mb-2">Start the development server:
                            <br />
                            <code className="bg-zinc-600 px-2 py-1 rounded">npm run dev</code>
                            </li>
                            <li>Open your browser and visit <code className="bg-zinc-600 px-2 py-1 rounded">
                                http://localhost:3000</code>
                                
                            </li>
                        </ol>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">Using Our Templates</h3>
                      <div className="text-zinc-400 space-y-4">
                        <p>Each template comes with:</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Detailed documentation and setup guides</li>
                          <li>Pre-configured development environment</li>
                          <li>Example content and data structures</li>
                          <li>Responsive layouts for all screen sizes</li>
                        </ul>
                      </div>
                      <Button variant="secondary" className="mt-4" asChild>
                        <Link href="/template" className="flex items-center">
                          Browse Templates
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Getting Support</h2>
          <Card className="bg-zinc-900/50 border-zinc-800/50 text-white">
            <CardContent className="pt-6 space-y-4">
              <p className="text-zinc-400">
                We're here to help you make the most of our components and templates. Here's how you can get support:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Read our comprehensive documentation</li>
                <li>Join our community Discord server for real-time help</li>
                <li>Submit issues on GitHub for bug reports</li>
                <li>Follow our blog for tutorials and updates</li>
              </ul>
              <p className="text-zinc-400 mt-4">
                For enterprise support and custom development services, please contact our team directly.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

