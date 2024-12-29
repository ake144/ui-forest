"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface MorphingSearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
  backgroundColor?: string
  textColor?: string
}

export function MorphingSearchBar({
  onSearch,
  placeholder = "Search...",
  backgroundColor = "bg-primary",
  textColor = "text-primary-foreground",
}: MorphingSearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <motion.form
      className={`flex items-center justify-end ${backgroundColor} rounded-full overflow-hidden`}
      initial={{ width: "48px", height: "48px" }}
      animate={{ width: isExpanded ? "300px" : "48px" }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
    >
      {isExpanded ? (
        <>
          <Input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`flex-grow border-none ${backgroundColor} ${textColor} placeholder:${textColor} focus-visible:ring-0 focus-visible:ring-offset-0`}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={textColor}
            onClick={() => setIsExpanded(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </>
      ) : (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={`${backgroundColor} ${textColor}`}
          onClick={() => setIsExpanded(true)}
        >
          <Search className="h-4 w-4" />
        </Button>
      )}
    </motion.form>
  )
}

