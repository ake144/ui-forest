"use client"

import Footer from "@/components/footer"
import Navbar from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
      <>
<Navbar />
<div className="min-h-screen bg-zinc-900 text-white px-6 py-16 md:py-24 flex items-center">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold text-purple-400">About UI Forest</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Welcome to <span className="text-purple-400 font-semibold">UI Forest</span> – a curated collection of high-quality UI components and premium templates.
          Built with **React, Next.js, TailwindCSS, TypeScript, and ShadCN**, our goal is to provide modern, **easy-to-use** solutions for developers.
        </p>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-purple-400">What We Offer</h2>
          <ul className="text-lg text-gray-400 space-y-3">
            <li>✅ **Free UI Components** – 100% free and customizable.</li>
            <li>💎 **Premium Templates** – High-quality designs for professionals.</li>
            <li>🚀 **Easy Integration** – Seamlessly works with Next.js & React.</li>
            <li>⚡ **Lifetime Access** – One-time purchase for lifetime use.</li>
          </ul>
        </div>
      </div>
    </div>
    
<Footer />
    </>
  )
}
