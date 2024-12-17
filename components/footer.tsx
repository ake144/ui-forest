'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: 'Product', links: ['Pricing', 'Downloads', 'Integrations', 'Features'] },
    { title: 'Company', links: ['About', 'Careers', 'Press', 'News'] },
    { title: 'Resources', links: ['Blog', 'Newsletter', 'Events', 'Help center'] },
  ]

  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white">Ui Forest</h2>
              <p className="mt-2 text-sm">Your #1 choices for customized ui</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <a
                href="mailto:hi@cursor.com"
                className="text-white hover:text-zinc-300 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://twitter.com/cursor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-300 transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com/cursor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-300 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm bg-zinc-800 inline-block px-3 py-1 rounded-full"
            >
              ⚿ SOC 2 Certified
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm">© {currentYear} Ui-forest. All rights reserved.</p>
          <p className="text-sm mt-4 md:mt-0">Made with ❤️ by Akanji</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

