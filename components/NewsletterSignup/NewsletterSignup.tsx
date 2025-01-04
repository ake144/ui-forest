'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from '@/hooks/use-toast'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')

   const {toast}  = useToast()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    toast({
      title: "Subscribed!",
      description: "You'll be notified when the blog launches.",
    })
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-gray-800 text-white border-gray-700"
      />
      <Button type="submit" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
        Notify Me
      </Button>
    </form>
  )
}

