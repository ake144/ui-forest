'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Check, Copy } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function CodeBlock({ language, code }:any) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <SyntaxHighlighter language={language} style={atomDark} className="rounded-lg !bg-zinc-900">
        {code}
      </SyntaxHighlighter>
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute top-2 right-2"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  )
}

