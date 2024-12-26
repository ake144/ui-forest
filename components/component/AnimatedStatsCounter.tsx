"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { label: "Happy Customers", value: 10000, prefix: "+" },
  { label: "Products Sold", value: 500000, prefix: "" },
  { label: "5-Star Reviews", value: 25000, prefix: "" },
  { label: "Countries Served", value: 50, prefix: "" },
]

export function AnimatedStatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <div ref={ref} className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.span
                  className="text-4xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                >
                  {hasAnimated ? (
                    <>
                      {stat.prefix}
                      {stat.value.toLocaleString()}
                    </>
                  ) : (
                    '0'
                  )}
                </motion.span>
                <p className="mt-2 text-xl text-white opacity-80">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

