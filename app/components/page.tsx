"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Component, Lock } from 'lucide-react'
import Link from "next/link"

const components = [
  { name: "Animated Card Carousel", description: "A carousel displaying cards with animated transitions and navigation controls.", pro: false },
  { name: "Animated CTA Section", description: "A bold call-to-action section with animated elements.", pro: false },
  { name: "Animated Hero", description: "A dynamic hero section with mouse-following gradient background.", pro: false },
  { name: "Animated Skill Bars", description: "A component displaying skill levels with animated progress bars.", pro: false },
  { name: "Animated Stats Counter", description: "Eye-catching animated counters to display key statistics.", pro: false },
  { name: "FAQ Accordion", description: "An interactive accordion to present frequently asked questions.", pro: false },
  { name: "Feature Comparison Table", description: "A clear and concise table to compare different product tiers.", pro: false },
  { name: "Floating CTA Banner", description: "An attention-grabbing call-to-action banner that appears after a delay.", pro: false },
  { name: "Interactive Timeline", description: "A timeline component with interactive dots, customizable styles, and animated transitions.", pro: false },
  { name: "Morphing Search Bar", description: "A morphing search bar with dynamic expansion, customizable styles, and integrated search functionality.", pro: false },
  { name: "Newsletter Form", description: "A stylish form for newsletter subscriptions with validation.", pro: false },
  { name: "Pricing Calculator", description: "An interactive tool for users to calculate pricing based on their needs.", pro: false },
  { name: "Product Carousel", description: "A sleek product showcase with smooth transitions between items.", pro: false },
  { name: "Testimonial Slider", description: "An auto-rotating testimonial display to showcase customer feedback.", pro: false },
];


export default function ComponentsPage() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Purple Spotlight Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />
        
        <div className="container relative mx-auto px-4 py-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold tracking-tight text-white">Components</h1>
              <p className="text-zinc-400 text-lg">
                Beautifully designed components built with Radix UI and Tailwind CSS.
              </p>
            </div>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm">
                <TabsTrigger 
                  value="all" 
                  className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
                >
                  All Components
                </TabsTrigger>
                <TabsTrigger 
                  value="free"
                  className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
                >
                  Free
                </TabsTrigger>
                <TabsTrigger 
                  value="pro"
                  className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
                >
                  Pro
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {components.map((component) => (
                    <ComponentCard key={component.name} {...component} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="free" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {components.filter(c => !c.pro).map((component) => (
                    <ComponentCard key={component.name} {...component} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="pro" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {components.filter(c => c.pro).map((component) => (
                    <ComponentCard key={component.name} {...component} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

function ComponentCard({ name, description, pro }: { name: string; description: string; pro: boolean }) {
  return (
    <Card className="group relative overflow-hidden bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 transition-all backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CardHeader className="border-b border-zinc-800 p-0">
        <div className="flex h-48 items-center justify-center bg-zinc-950">
          <Component className="h-8 w-8 text-zinc-400" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-2.5 p-6">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-lg text-white">{name}</CardTitle>
          {pro && (
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 gap-1">
              <Lock className="h-3 w-3" />
              Pro
            </Badge>
          )}
        </div>
        <CardDescription className="line-clamp-2 text-sm text-zinc-400">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          asChild 
          className="w-full relative overflow-hidden group"
          variant={pro ? "default" : "outline"}
          style={{
            backgroundColor: pro ? '#18181b' : 'transparent',
            borderColor: pro ? 'transparent' : '#27272a',
            color: 'white'
          }}
        >
          <Link href={`/components/${name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-center gap-2">
            {pro ? "Upgrade to Pro" : "View Component"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

