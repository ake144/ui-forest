"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function PricingCalculator() {
  const [users, setUsers] = useState(10)
  const [plan, setPlan] = useState<'basic' | 'pro' | 'enterprise'>('basic')

  const calculatePrice = () => {
    const pricePerUser = {
      basic: 10,
      pro: 20,
      enterprise: 35
    }
    return users * pricePerUser[plan]
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Calculate Your Plan</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Users
            </label>
            <Slider
              value={[users]}
              onValueChange={(value) => setUsers(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="mt-2 text-sm text-gray-500">{users} users</p>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Plan
            </label>
            <div className="flex space-x-4">
              {['basic', 'pro', 'enterprise'].map((p) => (
                <Button
                  key={p}
                  onClick={() => setPlan(p as 'basic' | 'pro' | 'enterprise')}
                  variant={plan === p ? 'default' : 'outline'}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </Button>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={`${users}-${plan}`}
            className="text-center"
          >
            <p className="text-2xl font-bold mb-2">
              Estimated Monthly Cost
            </p>
            <p className="text-4xl font-bold text-blue-600">
              ${calculatePrice()}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

