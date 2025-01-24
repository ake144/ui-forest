"use client"

import { motion } from "framer-motion"
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}

const tiers: PricingTier[] = [
  {
    name: "Basic plan",
    price: "$12",
    description: "Perfect for small businesses and freelancers just getting started.",
    features: [
      "Curabitur faucibus",
      "massa ut pretium maximus",
      "Sed posuere nisi",
      "Pellentesque eu nibh et neque",
      "Suspendisse a leo",
      "Praesent quis venenatis ipsum",
      "Duis non diam vel tortor",
    ],
  },
  {
    name: "Startup",
    price: "$35",
    description: "Great for growing businesses that need more features and flexibility.",
    features: [
      "Curabitur faucibus",
      "massa ut pretium maximus",
      "Sed posuere nisi",
      "Pellentesque eu nibh et neque",
      "Suspendisse a leo",
      "Praesent quis venenatis ipsum",
      "Duis non diam vel tortor",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "$60",
    description: "Advanced features and support for larger organizations.",
    features: [
      "Curabitur faucibus",
      "massa ut pretium maximus",
      "Sed posuere nisi",
      "Pellentesque eu nibh et neque",
      "Suspendisse a leo",
      "Praesent quis venenatis ipsum",
      "Duis non diam vel tortor",
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-24 bg-[#000000]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Pricing for all sizes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative h-full bg-gradient-to-b from-white/[0.08] to-transparent border-white/[0.08] backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-300">
                {tier.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                      Most popular
                    </div>
                  </div>
                )}
                <CardHeader className="pt-8 pb-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">/mo</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">{tier.description}</p>
                </CardHeader>
                <CardContent className="pb-4">
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/5 border-white/10 hover:bg-white/10 text-white"
                  >
                    Get Started
                  </Button>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <div className="text-sm font-semibold text-white">Features</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-400">
                        <Check className="w-5 h-5 text-purple-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
