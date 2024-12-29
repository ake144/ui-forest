const transition = (currentIndex:number, index:number) => {
  return `absolute transition-opacity duration-500 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`;
}

export const components = [
  {
      slug: 'animated-hero',
      name: "Animated Hero",
      description: "A dynamic hero section with mouse-following gradient background.",
      pro: false,
      code: `"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export function AnimatedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
      const updateMousePosition = (ev) => {
          setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      window.addEventListener('mousemove', updateMousePosition);
      return () => {
          window.removeEventListener('mousemove', updateMousePosition);
      };
  }, []);

  return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
          <motion.div
              className="absolute inset-0 opacity-50"
              style={{
                  background: \`radial-gradient(circle at \${mousePosition.x}px \${mousePosition.y}px, rgba(100, 100, 255, 0.3) 0%, rgba(0, 0, 0, 0) 50%)\`,
              }}
          />
          <div className="relative z-10 text-center">
              <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold mb-6"
              >
                  Revolutionize Your Business
              </motion.h1>
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
              >
                  Empower your brand with cutting-edge solutions and unparalleled customer experiences.
              </motion.p>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
              >
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white mr-4">
                      Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                      Learn More
                  </Button>
              </motion.div>
          </div>
      </section>
  );
}`,
      examples: [
          {
              title: "Basic Example",
              preview: `<AnimatedHero />`,
              code: `<AnimatedHero />`
          }
      ]
  },
  {
      slug: 'floating-cta-banner',
      name: "Floating CTA Banner",
      description: "An attention-grabbing call-to-action banner that appears after a delay.",
      pro: false,
      code: `"use client"

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export function FloatingCTABanner() {
  return (
      <motion.div
          className="fixed bottom-10 right-10 p-4 bg-blue-600 text-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
      >
          <h2 className="text-lg font-bold">Join Us Today!</h2>
          <Button className="mt-2">Get Started</Button>
      </motion.div>
  );
}`,
      examples: [
          {
              title: "Basic Example",
              preview: `<FloatingCTABanner />`,
              code: `<FloatingCTABanner />`
          }
      ]
  },
  {
      slug: 'product-carousel',
      name: "Product Carousel",
      description: "A sleek product showcase with smooth transitions between items.",
      pro: false,
      code: `"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: "Product 1", image: "/images/product1.jpg" },
  { id: 2, name: "Product 2", image: "/images/product2.jpg" },
  // Add more products as needed...
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
      <div className="relative">
          <motion.img
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              className="w-full h-auto"
              transition={{ duration: 0.5 }}
          />
          <button onClick={nextProduct} className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-blue-600 text-white p-2 rounded">
              Next
          </button>
      </div>
  );
}`,
      examples: [
          {
              title: "Basic Example",
              preview: `<ProductCarousel />`,
              code: `<ProductCarousel />`
          }
      ]
  },
  {
      slug: 'testimonial-slider',
      name: "Testimonial Slider",
      description: "An auto-rotating testimonial display to showcase customer feedback.",
      pro: false,
      code: `"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, text: "This product is amazing!", author: "John Doe" },
  { id: 2, text: "I love using this service.", author: "Jane Smith" },
  // Add more testimonials as needed...
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
      <div className="relative">
          {testimonials.map((testimonial, index) => (
              <motion.div
                  key={testimonial.id}
                  className={transition(currentIndex, index)}
              >
                  <p className="text-lg italic">"{testimonial.text}"</p>
                  <p className="mt-2 font-bold">- {testimonial.author}</p>
              </motion.div>
          ))}
          <button onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)} className="absolute right-4 bg-blue-600 text-white p-2 rounded">
              Next
          </button>
      </div>
  );
}`,
      examples: [
          {
              title: "Basic Example",
              preview: `<TestimonialSlider />`,
              code: `<TestimonialSlider />`
          }
      ]
  },

    {
        slug: 'pricing-calculator',
        name: "Pricing Calculator",
        description: "A dynamic pricing calculator with configurable options.",
        pro: false,
        code: `'use client'

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
`,
        examples: [
            {
                title: "Basic Example",
                preview: `<Pricing />`,
                code: `<Pricing />`
            }
        ]
    },


    {
      slug: 'feature-comparison-table',
      name: "Feature Comparison Table",
      description: "A curated with Feature Comparison Table display to different features.",
      pro: false,
      code: `import { Check, X } from 'lucide-react'

const features = [
  { name: "Unlimited Projects", basic: true, pro: true, enterprise: true },
  { name: "24/7 Support", basic: false, pro: true, enterprise: true },
  { name: "Custom Integrations", basic: false, pro: false, enterprise: true },
  { name: "Analytics Dashboard", basic: false, pro: true, enterprise: true },
  { name: "Team Collaboration", basic: false, pro: true, enterprise: true },
  { name: "API Access", basic: false, pro: false, enterprise: true },
]

export function FeatureComparisonTable() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Compare Plans</h2>
        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {["Basic", "Pro", "Enterprise"].map((plan) => (
            <div key={plan} className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan}</h3>
                {plan === "Pro" && (
                  <p className="absolute top-0 py-1.5 px-4 bg-blue-500 text-white rounded-full transform -translate-y-1/2">
                    Most Popular
                  </p>
                )}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan === "Basic" ? "$19" : plan === "Pro" ? "$39" : "$99"}
                  </span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-gray-500">The perfect plan for getting started with our platform.</p>
              </div>

              <ul role="list" className="mt-6 space-y-6">
                {features.map((feature) => (
                  <li key={feature.name} className="flex">
                    {feature[plan.toLowerCase() as 'basic' | 'pro' | 'enterprise'] ? (
                      <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                    ) : (
                      <X className="flex-shrink-0 w-6 h-6 text-red-500" />
                    )}
                    <span className="ml-3 text-gray-500">{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}`,
      examples: [
          {
              title: "Basic Example",
              preview: `<FeatureComparisonTable />`,
              code: `<FeatureComparisonTable />`
          }
      ]
  },

    {
        slug: 'animated-stats-counter',
        name: "Animated Stats Counter",
        description: "A dynamic Animated Stats Counter with configurable options.",
        pro: false,
        code: `"use client"

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
}`,
        examples: [
            {
                title: "Animated Stats Counter",
                preview: `<AnimatedStatsCounter />`,
                code: `<AnimatedStatsCounter />`
            }
        ]
    },

    {
      slug: 'faq-accordion',
      name: "FAQ Accordion",
      description: "An interactive accordion to present frequently asked questions.",
      pro: false,
      code: `"use client"
  
  import { useState } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { ChevronDown } from 'lucide-react';
  
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
  ];
  
  export function FAQAccordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl text-gray-700  font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                <span className="text-lg text-gray-600 font-medium">{faq.question}</span>
                  <ChevronDown
                    className={\`w-5 h-5 transition-transform \${activeIndex === index ? 'transform rotate-180' : ''}\`}
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
                        collapsed: { opacity: 0, height: 0 },
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
    );
  }`,
      examples: [
          {
              title: "Basic Example",
              preview: `<FAQAccordion />`,
              code: `<FAQAccordion />`,
          },
      ],
  },
    {
        slug: 'newsletter-form',
        name: "Newsletter Form",
        description: "A dynamic Animated Stats Counter with configurable options.",
        pro: false,
        code: `"use client"

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

`,
        examples: [
            {
                title: "Newsletter Form",
                preview: `<NewsletterForm />`,
                code: `<NewsletterForm />`
            }
        ]
    },

    {
      slug: 'animated-cta-section',
      name: "Animated CTA",
      description: "A dynamic Animated Stats Counter with configurable options.",
      pro: false,
      code: `"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function AnimatedCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-6"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Join thousands of satisfied customers and take your company to the next level.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started Now
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
`,
      examples: [
          {
              title: "Newsletter Form",
              preview: `<NewsletterForm />`,
              code: `<NewsletterForm />`
          }
      ]
  },


];