import Navbar from '@/components/main-nav'
import NewsletterSignup from '@/components/NewsletterSignup/NewsletterSignup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Coming Soon | Your Site Name',
  description: 'Our blog is under construction. Stay tuned for amazing content!',
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <Navbar />
      <div className="text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Blog Coming Soon
        </h1>
        <p className="mb-8 text-xl text-gray-400">
          We're working hard to bring you amazing content. Stay tuned!
        </p>
        <div className="mb-8">
          <NewsletterSignup />
        </div>
        <div className="animate-pulse">
          <svg
            className="h-10 w-10 text-gray-500 mx-auto"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

