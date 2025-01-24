"use client"

import { cn } from "@/lib/utils"

interface BubbleTextProps {
  text?: string
  className?: string
}

const BubbleText = ({ text = "UiForest Text Effect", className }: BubbleTextProps) => {
  return (
    <h2 className={cn("text-center text-5xl font-thin text-indigo-300", className)}>
      {text.split("").map((child, idx) => (
        <span
          key={idx}
          className="inline-block transition-all duration-300 hover:font-black hover:text-indigo-100 
          hover:next:font-medium hover:next:text-indigo-200
          hover:next-next:font-light
          group-hover:font-medium group-hover:text-indigo-200
          group-hover:group-hover:next:font-light"
        >
          {child}
        </span>
      ))}
    </h2>
  )
}

export default function Example() {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <BubbleText />
    </div>
  )
}

