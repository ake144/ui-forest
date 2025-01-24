"use client"

import { motion } from "framer-motion"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it typically take to complete a website project?",
    answer: "Project timelines vary based on complexity and scope. A basic website might take 4-6 weeks, while more complex platforms could take 3-4 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
  },
  {
    question: "Do you provide ongoing support after the website launch?",
    answer: "Yes, we offer comprehensive post-launch support packages. This includes regular maintenance, security updates, content updates, and technical support. We can customize a support plan based on your needs."
  },
  {
    question: "What sets your design agency apart from others?",
    answer: "We combine cutting-edge technology with creative design thinking. Our approach focuses on data-driven decisions, user-centric design, and scalable solutions. We're not just designers – we're strategic partners in your digital success."
  },
  {
    question: "Can you help with rebranding my existing website?",
    answer: "We specialize in website redesigns and rebranding. We'll analyze your current site, identify areas for improvement, and create a modern, effective design while preserving your brand's core values and existing customer base."
  },
  {
    question: "Do you handle e-commerce website development?",
    answer: "Yes, we have extensive experience in e-commerce development. We work with various platforms and can create custom solutions, implement payment gateways, inventory management systems, and ensure your online store is secure and user-friendly."
  },
  {
    question: "What is your design process like?",
    answer: "Our design process follows a systematic approach: Discovery & Research → Strategy & Planning → Design & Prototyping → Development → Testing → Launch → Post-Launch Support. We maintain clear communication and regular updates throughout each phase."
  }
]

export default function FAQ() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our web design and development services. Can&apos;t find the answer you&apos;re looking for? Feel free to contact us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-white/[0.08] rounded-lg backdrop-blur-sm px-6 py-2 data-[state=open]:bg-white/[0.02]"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-6 text-left">
                      <div className="flex-1 text-lg font-medium">{faq.question}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pt-4 pb-2 text-gray-400"
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400">
              Still have questions? {" "}
              <a href="#contact" className="text-purple-500 hover:text-purple-400 font-medium">
                Contact our support team
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
