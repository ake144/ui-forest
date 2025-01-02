'use client'


import {Testimonials} from "@/components/testimonials"

import Footer from "@/components/footer"
import { motion } from "framer-motion"
import Hero from "@/components/hero"
import { H1Text } from "@/components/texth1"

import { BuildText } from "@/components/buildwith"
// import { TemplateShowcase } from "@/components/slides"
import { ComponentPacks } from "@/components/component/component-packs"

import Navbar from "@/components/main-nav"
import CodePreview from "@/components/link-preview"
import { Spotlight } from "@/components/ui/Spotlight"
import { ExploreButton } from "@/components/explorebutton"
import { TemplatesShowcase } from "@/components/template/homepage/template-showcase"



export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <main>
      <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
              <Navbar  />
              <Hero />
              <H1Text/>
              <CodePreview   />
               <ComponentPacks /> 
              <BuildText  />
              <div>
                <div>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative"
              >
                <h2 className="text-6xl p-3 font-extrabold text-white mb-4 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Web Templates Collection
                </h2>
                {/* Title Glow Effect */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="w-72 h-72 bg-[#ac25ff] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <div className="w-72 h-72 bg-[#b845ff] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                </div>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto relative z-10">
                  Elevate your website with our curated collection of modern, customizable templates.
                </p>
              </motion.div>
                </div>
                  <div>
                  <TemplatesShowcase />
                  </div>
                  <div className="flex items-center justify-center mb-9 p-2">
                    <ExploreButton  link="/template"/>
                  </div>
              </div>
    
              <Testimonials />
            </main>

            <Footer />
    </div>
  )
}

