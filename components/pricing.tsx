'use client'

import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "$49",
    features: [
      "5 Templates",
      "20 Components",
      "Basic Support",
      "1 Month Updates"
    ]
  },
  {
    name: "Pro",
    price: "$99",
    features: [
      "20 Templates",
      "100 Components",
      "Priority Support",
      "6 Months Updates",
      "Custom Branding"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Templates",
      "Unlimited Components",
      "24/7 Support",
      "Lifetime Updates",
      "Custom Development"
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Choose Your Plan
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-lg p-8 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">Choose Plan</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

