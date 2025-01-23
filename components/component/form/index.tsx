"use client"

import { useState } from "react"
import Link from "next/link"
import { Mountain, Github, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log("Signing in with:", email)
  }

  return (
    <div className="min-h-screen  text-white flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 relative"
      >
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center text-xl font-bold mb-8">
            <Mountain className="w-8 h-8 mr-2" />
            File<span className="text-fuchsia-500">Vault</span>
          </Link>
          <h1 className="text-2xl font-bold">Sign in to your account</h1>
          <p className="mt-2 text-sm text-gray-400">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-fuchsia-500 hover:text-fuchsia-400">
              Create one
            </Link>
          </p>
        </div>

        <div className="grid gap-4">
          <Button variant="outline" className="bg-white/5 hover:bg-white/10">
            <Twitter className="w-5 h-5 mr-2" />
            Continue with Twitter
          </Button>
          <Button variant="outline" className="bg-white/5 hover:bg-white/10">
            <Github className="w-5 h-5 mr-2" />
            Continue with GitHub
          </Button>
          <Button variant="outline" className="bg-white/5 hover:bg-white/10">
            Sign in with SSO
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#0A0118] px-2 text-gray-400">Or continue with</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@provider.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/5 border-white/10 focus:border-fuchsia-500 focus:ring-fuchsia-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <Link href="/forgot-password" className="text-sm text-fuchsia-500 hover:text-fuchsia-400">
                Forgot?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white/5 border-white/10 focus:border-fuchsia-500 focus:ring-fuchsia-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-600 hover:to-cyan-600"
          >
            Sign in
          </Button>
        </form>

        <p className="text-xs text-center text-gray-400">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-fuchsia-500 hover:text-fuchsia-400">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-fuchsia-500 hover:text-fuchsia-400">
            Privacy Policy
          </Link>
          .
        </p>
      </motion.div>
    </div>
  )
}

