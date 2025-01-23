"use client"

import { motion } from "framer-motion"
import { Check, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Free",
    price: "$0/mo",
    description: "Best for 1-5 users",
    features: [
      { name: "One workspace", included: true },
      { name: "Email support", included: true },
      { name: "1 day data retention", included: false },
      { name: "Custom roles", included: false },
      { name: "Priority support", included: false },
      { name: "SSO", included: false },
    ],
    cta: "Get started free",
    ctaVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$79/mo",
    description: "Best for 5-50 users",
    features: [
      { name: "Five workspaces", included: true },
      { name: "Email support", included: true },
      { name: "7 day data retention", included: true },
      { name: "Custom roles", included: true },
      { name: "Priority support", included: false },
      { name: "SSO", included: false },
    ],
    cta: "14-day free trial",
    ctaVariant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    description: "Best for 50+ users",
    features: [
      { name: "Unlimited workspaces", included: true },
      { name: "Email support", included: true },
      { name: "30 day data retention", included: true },
      { name: "Custom roles", included: true },
      { name: "Priority support", included: true },
      { name: "SSO", included: true },
    ],
    cta: "Contact us",
    ctaVariant: "outline" as const,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Use it for free for yourself, upgrade when your team needs advanced control.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border backdrop-blur-sm transition-colors duration-300 ${
                plan.popular
                  ? "border-fuchsia-500"
                  : "border-white/[0.08] hover:border-fuchsia-500/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="px-3 py-1 text-sm font-medium text-white bg-fuchsia-500 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-2 text-4xl font-bold">{plan.price}</div>
                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-fuchsia-500" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600" />
                    )}
                    <span className={feature.included ? "text-gray-200" : "text-gray-400"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button variant={plan.ctaVariant} className="w-full" size="lg">
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

