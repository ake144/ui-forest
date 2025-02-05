'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TemplateSection } from './template-section'


const templates = [
  {
    title: "Recharge",
    description: "A professional faster, scale smarter platform designed for solo developers and enterprises. Build powerful content management systems with our SDK wrapper and extensive customization options.",
    price: 15,
    image: "/recharge.png",
    techStack: [
      { icon: "N", label: "Next.js" },
      { icon: "⚛", label: "React" },
      { icon: "TS", label: "TypeScript" },
      { icon: "~", label: "Tailwind" },
      { icon: "M", label: "MDX" },
      { icon: "⚡", label: "API" }
    ],
    link:'https://recharger-gamma.vercel.app/'
  },
  {
    title: "SuperCharge your app",
    description: "A professional faster, scale smarter platform designed for solo developers and enterprises. Build powerful content management systems with our SDK wrapper and extensive customization options.",
    price: 15,
    image: "/supercharge.png",
    techStack: [
      { icon: "N", label: "Next.js" },
      { icon: "⚛", label: "React" },
      { icon: "TS", label: "TypeScript" },
      { icon: "~", label: "Tailwind" },
      { icon: "M", label: "MDX" },
      { icon: "⚡", label: "API" }
    ],
    link:'https://supercharge1.vercel.app'
  },
  {
    title: "E-commerce site",
    description: "A complete solution for building a modern e-commerce site. Includes a powerful CMS, payment gateway integration, and a customizable storefront.",
    price: 14,
    image: "/e-commerce.png",
    techStack: [
      { icon: "⚛", label: "Nextjs" },
      { icon: "🐍", label: "React" },
      { icon: "⚡", label: "API" },
      { icon: "TS", label: "TypeScript" },
      { icon: "☁️", label: "Tailwindcss" }
    ],
    link: 'https://e-commerce-plus-next.vercel.app/',
  },
  {
    title: "Keento",
    description: "A complete solution for building modern ai agent for business with full customization options.",
    price: 20,
    image: "/ai.png",
    techStack: [
      { icon: "⚛", label: "Nextjs" },
      { icon: "🐍", label: "React" },
      { icon: "⚡", label: "React Hook Form" },
      { icon: "TS", label: "TypeScript" },
      { icon: "☁️", label: "Tailwindcss" },

    ],
    link:'https://keento1.vercel.app/'
  },
  {
    title: "DesignAgency",
    description: "A complete SaaS starter for design agency business .",
    price: 12,
    image: "/design1.png",
    link: 'https://design-agency-wpfl.vercel.app/',
    techStack: [
      { icon: "⚛", label: "Nextjs" },
      { icon: "🐍", label: "React" },
      { icon: "⚡", label: "Framer-motion" },
      { icon: "TS", label: "TypeScript" },
      { icon: "☁️", label: "Tailwindcss" }
    ],
  },
  {
    title: "Horizone",
    description: "A complete SaaS starter hotel and tourism related stuff",
    price: 12,
    image: "/hotel.png",
    link: 'https://hotel-x2.vercel.app/',
    techStack: [
      { icon: "⚛", label: "Nextjs" },
      { icon: "🐍", label: "React" },
      { icon: "⚡", label: "Framer-motion" },
      { icon: "TS", label: "TypeScript" },
      { icon: "☁️", label: "Tailwindcss" }
    ],
  },
  {
    title: "PlantX",
    description: "A complete starter templates for plant and agriculture business.",
    price: 12,
    image: "/plantx.png",
    link: 'https://plantx-swart.vercel.app/',
    techStack: [
      { icon: "⚛", label: "Nextjs" },
      { icon: "🐍", label: "React" },
      { icon: "⚡", label: "Framer-motion" },
      { icon: "TS", label: "TypeScript" },
      { icon: "☁️", label: "Tailwindcss" }
    ],
  },

  
  {
    title: "FileVault",
    description: "A complete SaaS starter for file management.",
    price: 14,
    image: "/filevaluet.png",
    link: 'https://filevault-79w9.vercel.app/',
    techStack: [
      { icon: "⚛", label: "Nextjs" },
      { icon: "🐍", label: "React" },
      { icon: "⚡", label: "Framer-motion" },
      { icon: "TS", label: "TypeScript" },
      { icon: "☁️", label: "Tailwindcss" }
    ],
  },
  {
    title: "Streamline Logistics",
    description: "A complete SaaS starter for  logistics and transportation business.",
    price: 12,
    image: "/logistic.png",
    link: 'https://logistics-sooty-phi.vercel.app/',
    techStack: [
      { icon: "⚛", label: "Nextjs" },
      { icon: "🐍", label: "React" },
      { icon: "⚡", label: "Framer-motion" },
      { icon: "TS", label: "TypeScript" },
      { icon: "☁️", label: "Tailwindcss" }
    ],
  },
  {
    title: "SaaS Starter",
    description: "A complete SaaS starter kit with user management, billing, and subscription features.",
    price: 0,
    image: "/saas.png",
    link: 'https://next-saas-starter1.vercel.app/',
    techStack: [
      { icon: "⚛", label: "Nextjs" },
      { icon: "🐍", label: "React" },
      { icon: "⚡", label: "API" },
      { icon: "TS", label: "TypeScript" },
      { icon: "☁️", label: "Tailwindcss" }
    ],
  },
]

export function TemplatesShowcase() {
  const [activeTemplate, setActiveTemplate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const totalWidth = (templates.length + 2) * 100; // Total width based on number of templates
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${totalWidth - 100}%`]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY;
        const containerHeight = containerRef.current.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollPercentage = scrollPosition / (containerHeight - windowHeight);
        const newActiveTemplate = Math.floor(scrollPercentage * templates.length);
        setActiveTemplate(Math.min(newActiveTemplate, templates.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="flex h-full" style={{ x }}>
          {templates.map((template, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[90vw] h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TemplateSection {...template} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}