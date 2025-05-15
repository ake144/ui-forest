'use client'

import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from '@/components/main-nav'
import Link from 'next/link'
import TestimonialsSection from '@/components/pricing/testimonials'

export default function PricingPage() {
  const features = [
    "Unlimited access to all UI components",
    "Full source code and design files",
    "Regular updates and new component releases",
    "Access to private GitHub repository",
    "Integration with popular frameworks (React, Vue, Nextjs)",
    "Advanced component customization options",
    "Performance optimization tools",
    "Exclusive workshops and webinars",
    "Early access to beta features",
    "Personalized onboarding session",
    "Priority feature request system",
    // "API access for dynamic component generation",
  ]

  const currentPrice = 20
  const oldPrice = 100
  const discountPercentage = Math.round(((oldPrice - currentPrice) / oldPrice) * 100)



  return (
    <div className="h-full overflow-x-hidden bg-black text-white py-20 relative">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />        {/* <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />
         */}
       <Navbar />
      <div className="mt-14 mx-auto px-4">
     
        <div className="text-center mb-16">
          <h1 className=" text-xl sm:ext-3xl md:text-5xl font-bold mb-6">Unlock Lifetime Access to UI Forest</h1>
          <p className=" md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Elevate your design workflow with our comprehensive UI component library. One-time payment, lifetime value.
          </p>
        </div>

        <Card className="bg-zinc-900 border-zinc-700 max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="md:text-3xl text-xl sm:text-2xl font-bold">Lifetime Access</CardTitle>
            <CardDescription className="text-zinc-400 text-md md:text-lg mt-2">
              Everything you need to build stunning interfaces
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
          <div className="text-center">
              <span className="md:text-5xl sm:text-2xl text-xl font-bold">${currentPrice}</span>
              <span className="text-zinc-400 ml-2">one-time payment</span>
              <div className="mt-2">
                <span className="text-zinc-400 line-through mr-2">${oldPrice}</span>
                <span className="text-green-500 font-semibold">{discountPercentage}% off</span>
              </div>
            </div>
            <Button className="w-full text-lg py-6" size="lg">
              Get Lifetime Access
            </Button>
            <div className="border-t border-zinc-700 pt-6">
              <h3 className="text-xl font-semibold mb-4">What's included:</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center text-center">
            <p className="text-zinc-400 mb-4">
              Join thousands of developers and designers who trust UI Forest for their projects
            </p>
            <Link href="https://uiforest.gumroad.com/l/wrfiea"
           >
            <Button 
                variant="outline" 
                className="w-full border-purple-800 hover:text-md sm:w-auto"
                >
                Purchase
                </Button>
              </Link>

          </CardFooter>
        </Card>
        
        {/* <TestimonialsSection  /> */}
      </div>
    </div>
  )
}

