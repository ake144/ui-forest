"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Zap } from "lucide-react";

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-80 bg-zinc-900 border border-zinc-800 text-white shadow-2xl rounded-lg">
              <div className="relative p-4">
                <button
                  className="absolute right-2 top-2 text-zinc-400 hover:text-zinc-100"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                <h2 className="text-xl font-bold">Need Help with Payment?</h2>
              </div>
              <div className="px-4 py-2 space-y-2">
                <p className="text-zinc-300">We're here to assist you anytime!</p>
                <div className="flex items-center text-emerald-500">
                  <Zap className="h-4 w-4 mr-2" />
                  <p className="text-sm">Online replies near instant</p>
                </div>
              </div>
              <div className="p-4">
                <a
                  href="https://t.me/AkeTame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-white bg-purple-600 hover:bg-purple-700 py-2 rounded-lg transition"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <button
          className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-700 text-white flex items-center px-4 py-2 text-lg transition"
          onClick={() => setIsOpen(true)}
          aria-label="Open Contact Widget"
        >
          <MessageCircle className="h-6 w-6 mr-2" />
          Need Help?
        </button>
      )}
    </div>
  );
}
