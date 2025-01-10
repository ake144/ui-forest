'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Zap } from 'lucide-react'

export function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-80 bg-zinc-900 border-zinc-800 text-white shadow-2xl">
              <CardHeader className="relative pb-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <CardTitle className="text-xl font-bold">Need Help with Payment?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-zinc-300">We're here to assist you anytime!</p>
                <div className="flex items-center text-emerald-500">
                  <Zap className="h-4 w-4 mr-2" />
                  <p className="text-sm">Online replies near instant</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <a
                    href="https://t.me/AkeTame"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Support
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isOpen && (
        <Button 
          size="lg"
          className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-700"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6 mr-2" />
          Need Help?
        </Button>
      )}
    </div>
  )
}

