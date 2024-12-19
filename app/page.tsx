'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Showcase from "@/components/showcase"
import Pricing from "@/components/pricing"
import {Testimonials} from "@/components/testimonials"

import Footer from "@/components/footer"
import { motion } from "framer-motion"
import Features from "@/components/feature"
import Hero from "@/components/hero"
import CTA from "@/components/cta"
import { FeaturesList } from "@/components/feature-lists"

import { FeaturesSection } from "@/components/featureSection"
import { H1Text } from "@/components/texth1"

import { BuildText } from "@/components/buildwith"
// import { TemplateShowcase } from "@/components/slides"
import { ComponentPacks } from "@/components/component/component-packs"
import { TemplatesShowcase } from "@/components/template/template-showcase"
import { SiteHeader } from "@/components/header"
import Navbar from "@/components/main-nav"
import CodePreview from "@/components/link-preview"
import { Spotlight } from "@/components/ui/Spotlight"



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
        {/* <FeaturesList /> */}
         <H1Text/>

         <CodePreview   />
          <ComponentPacks /> 
        {/* <FeaturesSection /> */}
        <BuildText  />
        <TemplatesShowcase />
        {/* <TemplateShowcase  /> */}
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}

