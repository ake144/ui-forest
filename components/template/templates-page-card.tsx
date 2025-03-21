"use client"

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { TemplatesType } from '@/lib/types'
import Image from 'next/image'



export function FeaturedTemplateCard({ name, description, price, image, stack = [],link, repo,  viewMode }: TemplatesType & { viewMode: 'grid' | 'list' }) {
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
              <Image src={image} alt={name} className="w-full h-full object-cover transition-transform group-hover:scale-105" 
               
               objectFit='cover'
               layout='fill'
                loading="lazy"
              />
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
            <CardFooter className="p-6 flex gap-4 flex-row pt-0">
            <Button variant="outline" className="flex-1 text-white" asChild>
                <a href={link} className="flex items-center hover:text-gray-50 text-gray-50/50 justify-center gap-2">
                  View Demo
                </a>
              </Button>
              
              <Button className="flex-1 bg-zinc-800 text-white hover:bg-zinc-700" asChild>
                <a href={repo} className="flex items-center text-gray-50/50 justify-center gap-2">
                  Get Template
                </a>
              </Button>
            </CardFooter>
          </div>
        </Card>
      </motion.div>
    )
  }
  
  export function TemplateCard({ name, description, price, image, stack = [], link, repo, viewMode }: TemplatesType & { viewMode: 'grid' | 'list' }) {
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
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img src={image} alt={name} className="w-full h-full object-cover transition-transform group-hover:scale-105"  loading="lazy"/>
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
              <Button variant="outline" className="flex-1 text-white" asChild>
                <a href={link}>Demo</a>
              </Button>
              <Button className="flex-1 bg-zinc-800 text-white hover:bg-zinc-700" asChild>
                <a href={repo}>
                  {price === 0 ? 'Download' : 'Purchase'}
                </a>
              </Button>
            </CardFooter>
          </div>
        </Card>
      </motion.div>
    )
  }
  
  