"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Pricing", path: "/pricing" },
        { name: "templates", path: "/template" },
        { name: "components", path: "/components" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about-us" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Newsletter", path: "/" },
        { name: "Events", path: "/" },
        { name: "Help Center", path: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-center md:text-left items-start">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-2xl font-bold text-white">Ui Forest</h2>
            <p className="text-sm">Your #1 choice for customized UI</p>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { href: "mailto:tamiratake@gmail.com", icon: Mail },
                { href: "https://twitter.com/uiforest", icon: Twitter },
                { href: "https://github.com/uiforest", icon: Github },
              ].map(({ href, icon: Icon }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-zinc-300 transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="text-sm bg-zinc-800 inline-block px-3 py-1 rounded-full">
              ⚿ SOC 2 Certified
            </div>
          </motion.div>

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
                {section.links.map(({ name, path }) => (
                  <li key={name}>
                    <a
                      href={path}
                      className="hover:text-white transition-colors duration-200 text-sm"
                    >
                      {name}
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
          className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-center md:justify-between items-center text-center"
        >
          <p className="text-sm">© {currentYear} Ui Forest. All rights reserved.</p>
          <p className="text-sm mt-4 md:mt-0">Made with ❤️ by Akanji</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
