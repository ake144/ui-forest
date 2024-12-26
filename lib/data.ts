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



];