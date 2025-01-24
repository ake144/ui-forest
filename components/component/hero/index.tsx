"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Star, Users, Building } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "Happy Clients", value: "500+", icon: Users },
  { label: "Success Rate", value: "99%", icon: Star },
  { label: "Industries", value: "25+", icon: Building },
]

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  }

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative font-geist-sans min-h-[calc(100vh-5rem)] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#3b0764,transparent)]" />

      {/* Floating Navigation */}
      <motion.div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        initial={{ y: -100 }}
        animate={{ y: scrolled ? 0 : -100 }}
      >
        <div className="bg-black/50 backdrop-blur-lg rounded-full border border-purple-500/20 p-2 px-4 flex gap-4">
          <Link href="#features" className="text-sm text-gray-300 hover:text-white">
            Features
          </Link>
          <Link href="#about" className="text-sm text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="#contact" className="text-sm text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Top Badge */}
          <div className="flex justify-center mb-6 gap-4">
            <Badge variant="outline" 
              className= "h-1/4 max-w-[300px] text-purple-300 bg-gradient-to-r from-purple-400/10 to-purple-400/20 w-auto px-6 py-2 text-sm inline-flex items-center justify-center rounded-full backdrop-blur-sm border border-purple-400/10 hover:scale-105 transform transition-all"
            >
              ✨ Industry Leader 2024
            </Badge>
          </div>

          {/* Main Heading */}
          <motion.div className="space-y-4" initial="hidden" animate="show" variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Transform Your Factory with
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">
                AI-Powered Manufacturing
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Revolutionize your production line with cutting-edge AI solutions. Boost efficiency by{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="underline decoration-purple-500 decoration-2">up to 300%</TooltipTrigger>
                  <TooltipContent>Based on our client success metrics</TooltipContent>
                </Tooltip>
              </TooltipProvider>{" "}
              while reducing costs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/form">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-6 rounded-full min-w-[200px] flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] focus:ring-4 focus:ring-purple-500/30"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 border-purple-500/20 hover:bg-purple-500/10"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 backdrop-blur-sm"
                >
                  <stat.icon className="h-6 w-6 text-purple-400 mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <ChevronDown className="h-6 w-6 text-purple-400" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

