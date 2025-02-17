"use client"

import Footer from "@/components/footer"
import Navbar from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zinc-900 text-white px-6 py-16 md:py-24 flex items-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-purple-400 text-center">Privacy Policy</h1>

        <p className="text-lg text-gray-300">
          At UI Forest, we respect your privacy. This policy outlines how we collect, use, and protect your data.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400">1. Data We Collect</h2>
        <p className="text-gray-400">We collect basic user data such as email addresses for login and premium template purchases.</p>

        <h2 className="text-2xl font-semibold text-purple-400">2. How We Use Your Data</h2>
        <p className="text-gray-400">Your data is used for authentication, processing payments, and improving our services.</p>

        <p className="text-lg text-gray-400 text-center mt-6">
          By using our platform, you agree to this privacy policy.
        </p>
      </div>
    </div>
    
    <Footer  />
</>
    
  )
}
