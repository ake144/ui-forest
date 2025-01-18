"use client"

import * as React from "react"
import { ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils"

interface ModernButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode

}

export function ModernButton({  className, ...props }: ModernButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium",
        "bg-[#1A1727]/50 backdrop-blur-sm",
        "border border-purple-500/10",
        "transition-all duration-300",
        "hover:border-purple-500/30 hover:bg-[#1A1727]/80",
        "focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-2 focus:ring-offset-[#0D0B1A]",
        className
      )}
      {...props}
    >
      <span className="relative z-10 bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] bg-clip-text text-transparent">
       
        <ArrowRight className="translate-x-0 duration-300 group-hover:translate-x-2 ml-2 h-4 w-4 inline-block stroke-[#FF3BFF]" />

      </span>
      <div className="absolute inset-0 rounded-full transition-opacity opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] opacity-20 blur-xl" />
      </div>
    </button>
  )
}

