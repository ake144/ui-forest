"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  return (
    <div className="w-full max-w-2xl mx-auto text-center mb-16">
      <h2 className="text-2xl font-semibold mb-4">Inside Design: Stories and Interviews</h2>
      <p className="text-muted-foreground mb-6">
        Subscribe to our latest blog posts and stay up to date with design trends and updates.
      </p>
      <form className="flex gap-2 max-w-md mx-auto">
        <Input type="email" placeholder="Enter your email" className="flex-1" />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  )
}

