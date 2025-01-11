"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How do I place an order?",
    answer: "To place an order, simply browse our products, add items to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for your convenience."
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary depending on your location. Typically, domestic orders arrive within 3-5 business days, while international orders may take 7-14 business days."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. Products must be in their original condition with tags attached. Please refer to our Returns page for more details."
  },
]

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl text-gray-700 font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg text-gray-600 font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="p-4 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

