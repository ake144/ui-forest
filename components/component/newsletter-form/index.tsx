"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, AlertCircle } from 'lucide-react'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    }, 1500)
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Stay Updated with Our Newsletter</h2>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow"
            disabled={status === 'loading' || status === 'success'}
          />
          <Button
            type="submit"
            className="bg-white text-purple-600 hover:bg-gray-100"
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          {status === 'success' && (
            <p className="text-green-300 flex items-center">
              <Check className="mr-2" /> Successfully subscribed!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-300 flex items-center">
              <AlertCircle className="mr-2" /> Please enter a valid email address.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  )
}

