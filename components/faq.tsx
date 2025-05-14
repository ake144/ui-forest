"use client"

import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"


const faqs = [
  {
    question: "What is UIForest?",
    answer:
      "UIForest is a design resource platform offering a curated collection of high-quality UI components, free and premium templates, and ready-to-use design blocks for modern web development. It's built for developers, designers, and product teams who want to ship beautiful UIs faster.",
  },
  {
    question: "Are the UI components free to use?",
    answer:
      "Yes! UIForest provides a wide range of free components that you can use in both personal and commercial projects. We also offer premium templates and component bundles for those looking to build full apps or websites with production-ready design systems.",
  },
  {
    question: "What’s included in the premium templates?",
    answer:
      "Our premium templates include full-page layouts, reusable component structures, responsive design support, and integration-ready assets built using modern frameworks like React, Tailwind CSS, and more. These templates are ideal for startups, SaaS apps, portfolios, and dashboards.",
  },
  {
    question: "Can I use UIForest components in client projects?",
    answer:
      "Absolutely. Both free and premium assets can be used in unlimited personal and client projects. However, redistribution or resale of the assets as-is is not permitted. Always refer to our license page for detailed usage rights.",
  },
  {
    question: "Do I need to know how to code to use UIForest?",
    answer:
      "While UIForest is developer-friendly, our components are structured in a way that even non-developers using tools like Webflow or Framer can draw inspiration from them. For code-based usage, you should be familiar with basic frontend tools like React and Tailwind CSS.",
  },
  {
    question: "Are UIForest components responsive?",
    answer:
      "Yes, all UIForest components and templates are fully responsive and mobile-ready by default. We follow best practices to ensure your UI looks great on all screen sizes without extra effort.",
  },
  {
    question: "Do you provide design files (Figma/Sketch)?",
    answer:
      "Yes, for many of our premium templates, we include Figma files to make design handoff and customization even easier. Check each product’s description for file availability.",
  },
  {
    question: "How often do you release new components or templates?",
    answer:
      "We update UIForest regularly with new free components and premium template packs. Subscribe to our newsletter or follow us on social media to stay updated on the latest drops and releases.",
  },
]


function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: isOpen ? "rgba(124, 58, 237, 0.1)" : "transparent" }}
      className="rounded-xl overflow-hidden"
    >
      <button onClick={onClick} className="flex items-center justify-between w-full px-6 py-4 text-left">
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-violet-400" /> : <Plus className="w-5 h-5 text-violet-400" />}
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-gray-400">{answer}</div>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="relative bg-black py-20 overflow-hidden">

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-6xl p-3 font-extrabold text-white tracking-wider uppercase mb-4"
          >
            Frequently Asked Questions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto "
          >
            Get answers to common questions about UiForest and our offerings. If you have more questions, feel free to reach out!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </motion.div>

       
      </div>
    </section>
  )
}
