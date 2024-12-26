'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Search } from 'lucide-react'
import { ExploreButton } from '@/components/explorebutton'
import { TemplatesCard } from '@/components/template/template-page-card'

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTemplates = allTemplates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-4  py-12">
        <header className="text-center mb-16 mt-[100px]">
          <h1 className="text-5xl font-bold mb-4">Explore Our UI Templates</h1>
          <p className="text-xl text-gray-300 mb-8">Discover professional designs to kickstart your next project</p>
          <ExploreButton />
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Featured Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemplates.map((template) => (
              <FeaturedTemplateCard key={template.name} {...template} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">All Templates</h2>
            <div className="relative">
              <Input
                type="search"
                placeholder="Search templates..."
                className="pl-10 pr-4 py-2 w-64 bg-gray-700 text-white placeholder-gray-400 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-gray-900 text-white">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="free">Free</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <TemplateGrid templates={filteredTemplates} />
            </TabsContent>
            <TabsContent value="free">
              <TemplateGrid templates={filteredTemplates.filter(t => t.price === 0)} />
            </TabsContent>
            <TabsContent value="premium">
              <TemplateGrid templates={filteredTemplates.filter(t => t.price > 0)} />
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}

function TemplateGrid({ templates }: { templates: typeof allTemplates }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {templates.map((template) => (
        <TemplatesCard  key={template.name} {...template} />
      ))}
    </div>
  )
}

function FeaturedTemplateCard({ name, description, price, image }: TemplateType) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-gradient-to-br from-pink-500 to-blue-700 text-white overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl">{name}</CardTitle>
          <CardDescription className="text-purple-200">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-purple-900 rounded-md overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <span className="text-2xl font-bold">{price === 0 ? 'Free' : `$${price}`}</span>
          <Button className="bg-white text-purple-700 hover:bg-purple-100">
            View Template <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


function TemplateCard({ name, description, price, image }: TemplateType) {
  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-gray-700 rounded-md overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-lg font-semibold">{price === 0 ? 'Free' : `$${price}`}</span>
        <Button variant="outline">Purchase</Button>
      </CardFooter>
    </Card>
  )
}

type TemplateType = {
  name: string;
  description: string;
  price: number;
  image: string;
}


type TemplatesType = {
  name: string;
  description: string;
  price: number;
  image: string;
  link:string;
  buyLink:string;
  stack:string[];
}


const featuredTemplates: TemplateType[] = [
  { name: "Pro Dashboard", description: "Feature-rich admin panel", price: 79, image: "/placeholder.svg?height=720&width=1280" },
  { name: "E-commerce Plus", description: "Advanced online store solution", price: 99, image: "/e-commerce.png" },
  { name: "Portfolio Pro", description: "Showcase your work in style", price: 49, image: "/placeholder.svg?height=720&width=1280" },
]

const allTemplates: TemplatesType[] = [
  { name: "Dashboard", description: "Modern admin dashboard", price: 49, image: "/placeholder.svg?height=720&width=1280",link:'', buyLink:'', stack:['nextjs','react','nextauth', 'prisma','supabase'] },
  { name: "E-commerce", description: "Complete online store", price: 79, image: "/placeholder.svg?height=720&width=1280",link:'', buyLink:'',stack:['nextjs','react','nextauth', 'prisma','supabase']},
  { name: "Blog", description: "Clean and minimal blog", price: 39, image: "/placeholder.svg?height=720&width=1280" , link:'', buyLink:'', stack:['nextjs','react','nextauth', 'prisma','supabase']},
  { name: "Portfolio", description: "Showcase your work", price: 29, image: "/placeholder.svg?height=720&width=1280", link:'', buyLink:'',stack:['nextjs','react','nextauth', 'prisma','supabase'] },
  { name: "Landing Page", description: "High-converting landing page", price: 59, image: "/placeholder.svg?height=720&width=1280",link:'', buyLink:'',stack:['nextjs','react','nextauth', 'prisma','supabase'] },
  { name: "SaaS Application", description: "Ready-to-use SaaS template", price: 99, image: "/placeholder.svg?height=720&width=1280" ,link:'', buyLink:'',stack:['nextjs','react','nextauth', 'prisma','supabase']},
  { name: "Personal Blog", description: "Minimalist personal blog", price: 0, image: "/placeholder.svg?height=720&width=1280" ,link:'', buyLink:'',stack:['nextjs','react','nextauth', 'prisma','supabase']},
  { name: "Startup Landing", description: "Modern startup landing page", price: 0, image: "/placeholder.svg?height=720&width=1280",link:'', buyLink:'',stack:['nextjs','react','nextauth', 'prisma','supabase'] },
  { name: "Restaurant Menu", description: "Digital menu for restaurants", price: 19, image: "/placeholder.svg?height=720&width=1280",link:'', buyLink:'',stack:['nextjs','react','nextauth', 'prisma','supabase'] },
]

