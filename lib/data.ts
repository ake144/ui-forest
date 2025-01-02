import { TemplatesType } from "./types";

const transition = (currentIndex:number, index:number) => {
  return `absolute transition-opacity duration-500 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`;
}

export const components = [
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
{
  slug: "animated-card-carousel",
  name: "Animated Card Carousel",
  description: "A carousel displaying cards with animated transitions and navigation controls.",
  pro: false,
  code: `"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CardData {
title: string;
content: string;
color: string;
}

interface AnimatedCardCarouselProps {
cards: CardData[];
}

export function AnimatedCardCarousel({ cards }: AnimatedCardCarouselProps) {
const [currentIndex, setCurrentIndex] = useState(0);

const nextCard = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
};

const prevCard = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
};

return (
  <div className="relative w-full max-w-md mx-auto">
    <div className="overflow-hidden rounded-lg">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={{
            enter: (direction: number) => ({
              x: direction > 0 ? 1000 : -1000,
              opacity: 0,
            }),
            center: {
              zIndex: 1,
              x: 0,
              opacity: 1,
            },
            exit: (direction: number) => ({
              zIndex: 0,
              x: direction < 0 ? 1000 : -1000,
              opacity: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <Card className="w-full h-64" style={{ backgroundColor: cards[currentIndex].color }}>
            <CardContent className="flex flex-col items-center justify-center h-full text-white">
              <h2 className="text-2xl font-bold mb-4">{cards[currentIndex].title}</h2>
              <p className="text-center">{cards[currentIndex].content}</p>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
    <Button
      variant="outline"
      size="icon"
      className="absolute top-1/2 left-2 transform -translate-y-1/2"
      onClick={prevCard}
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
    <Button
      variant="outline"
      size="icon"
      className="absolute top-1/2 right-2 transform -translate-y-1/2"
      onClick={nextCard}
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  </div>
);
}`,
  examples: [
      {
          title: "Animated Card Carousel Example",
          preview: `<AnimatedCardCarousel cards={[{title: "Card 1", content: "Content 1", color: "#3498db"}]} />`,
          code: `<AnimatedCardCarousel cards={[{title: "Card 1", content: "Content 1", color: "#3498db"}]} />`,
      },
  ],
},

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
    slug: "animated-skill-bars",
    name: "Animated Skill Bars",
    description: "A component displaying skill levels with animated progress bars.",
    pro: false,
    code: `"use client"
  
  import { useEffect, useState } from "react";
  import { motion } from "framer-motion";
  
  interface Skill {
  name: string;
  level: number;
  color: string;
  }
  
  interface AnimatedSkillBarsProps {
  skills: Skill[];
  barHeight?: string;
  animationDuration?: number;
  }
  
  export function AnimatedSkillBars({
  skills,
  barHeight = "h-6",
  animationDuration = 1,
  }: AnimatedSkillBarsProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="relative">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-sm font-medium">{skill.level}%</span>
          </div>
          <div className={\`w-full bg-gray-200 rounded-full \${barHeight} overflow-hidden\`}>
            <motion.div
              className={\`\${barHeight} rounded-full\`}
              style={{ backgroundColor: skill.color }}
              initial={{ width: 0 }}
              animate={isVisible ? { width: \`\${skill.level}%\` } : { width: 0 }}
              transition={{ duration: animationDuration, delay: index * 0.2 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
  }`,
    examples: [
        {
            title: "Animated Skill Bars Example",
            preview: `<AnimatedSkillBars skills={[{name: "JavaScript", level: 90, color: "#f7df1e"}]} />`,
            code: `<AnimatedSkillBars skills={[{name: "JavaScript", level: 90, color: "#f7df1e"}]} />`,
        },
    ],
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
    slug: "morphing-search-bar",
    name: "Morphing Search Bar",
    description: "A morphing search bar with dynamic expansion, customizable styles, and integrated search functionality.",
    pro: false,
    code: `"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MorphingSearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  backgroundColor?: string;
  textColor?: string;
}

export function MorphingSearchBar({
  onSearch,
  placeholder = "Search...",
  backgroundColor = "bg-primary",
  textColor = "text-primary-foreground",
}: MorphingSearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <motion.form
      className={\`flex items-center justify-end \${backgroundColor} rounded-full overflow-hidden\`}
      initial={{ width: "48px", height: "48px" }}
      animate={{ width: isExpanded ? "300px" : "48px" }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
    >
      {isExpanded ? (
        <>
          <Input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={\`flex-grow border-none \${backgroundColor} \${textColor} placeholder:\${textColor} focus-visible:ring-0 focus-visible:ring-offset-0\`}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={textColor}
            onClick={() => setIsExpanded(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </>
      ) : (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={\`\${backgroundColor} \${textColor}\`}
          onClick={() => setIsExpanded(true)}
        >
          <Search className="h-4 w-4" />
        </Button>
      )}
    </motion.form>
  );
}`,
    examples: [
        {
            title: "Morphing Search Bar Example",
            preview: `<MorphingSearchBar onSearch={(query) => console.log(query)} />`,
            code: `<MorphingSearchBar onSearch={(query) => console.log(query)} />`,
        },
    ],
},
{
  slug: "interactive-timeline",
  name: "Interactive Timeline",
  description: "A timeline component with interactive dots, customizable styles, and animated transitions.",
  pro: false,
  code: `"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineEvent {
date: string;
title: string;
description: string;
}

interface InteractiveTimelineProps {
events: TimelineEvent[];
lineColor?: string;
dotColor?: string;
activeColor?: string;
}

export function InteractiveTimeline({
events,
lineColor = "bg-gray-200",
dotColor = "bg-primary",
activeColor = "bg-secondary",
}: InteractiveTimelineProps) {
const [activeEvent, setActiveEvent] = useState<number | null>(null);

return (
  <div className="relative w-full max-w-3xl mx-auto py-16">
    <div className={\`absolute left-1/2 transform -translate-x-1/2 h-full w-1 \${lineColor}\`} />
    {events.map((event, index) => (
      <motion.div
        key={index}
        className={\`relative \${index % 2 === 0 ? "left-0 pr-8" : "left-1/2 pl-8"} mb-8\`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div
          className={\`absolute top-0 \${index % 2 === 0 ? "right-0" : "left-0"} transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full \${activeEvent === index ? activeColor : dotColor} cursor-pointer\`}
          onClick={() => setActiveEvent(activeEvent === index ? null : index)}
        />
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{event.date}</p>
            {activeEvent === index && <p className="text-sm">{event.description}</p>}
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);
}`,
  examples: [
      {
          title: "Interactive Timeline Example",
          preview: `<InteractiveTimeline events={[{date: "2023", title: "Event 1", description: "Details about Event 1"}]} />`,
          code: `<InteractiveTimeline events={[{date: "2023", title: "Event 1", description: "Details about Event 1"}]} />`,
      },
  ],
},



];









export const featuredTemplates: TemplatesType[] = [
  {
    name: "Pro Dashboard",
    description: "A modern and responsive admin dashboard with dark mode support and comprehensive analytics.",
    price: 79,
    image: "/placeholder.svg?height=720&width=1280",
    link: '#',
    buyLink: '#',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    name: "E-commerce Plus",
    description: "Complete e-commerce solution with cart, checkout, and inventory management.",
    price: 99,
    image: "/e-commerce.png",
    link: '#',
    buyLink: '#',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    name: "Dashboard",
    description: "Modern admin dashboard with dark mode and real-time analytics.",
    price: 49,
    image: "/placeholder.svg?height=720&width=1280",
    link: '',
    buyLink: '',
    stack: ['Next.js', 'React', 'NextAuth', 'Prisma', 'Supabase']
  },
]

export const allTemplates: TemplatesType[] = [
  {
    name: "Dashboard",
    description: "Modern admin dashboard with dark mode and real-time analytics.",
    price: 49,
    image: "/placeholder.svg?height=720&width=1280",
    link: '',
    buyLink: '',
    stack: ['Next.js', 'React', 'NextAuth', 'Prisma', 'Supabase']
  },
  {
    name: "E-commerce",
    description: "Full-featured online store with product management and payments.",
    price: 79,
    image: "/placeholder.svg?height=720&width=1280",
    link: '',
    buyLink: '',
    stack: ['Next.js', 'React', 'Stripe', 'Prisma', 'PostgreSQL']
  },
  { name: "Blog", description: "Clean and minimal blog", price: 39, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
  { name: "Portfolio", description: "Showcase your work", price: 29, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
  { name: "Landing Page", description: "High-converting landing page", price: 59, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
  { name: "SaaS Application", description: "Ready-to-use SaaS template", price: 99, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
  { name: "Personal Blog", description: "Minimalist personal blog", price: 0, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
  { name: "Startup Landing", description: "Modern startup landing page", price: 0, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
  { name: "Restaurant Menu", description: "Digital menu for restaurants", price: 19, image: "/placeholder.svg?height=720&width=1280", link: '', buyLink: '', stack: ['nextjs', 'react', 'nextauth', 'prisma', 'supabase'] },
]

