import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            404
          </h1>
          <h2 className="text-3xl font-semibold">Page Not Found</h2>
          <p className="text-zinc-400">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="border-t border-zinc-800 pt-8">
          <p className="text-zinc-400 mb-4">
            Let's get you back on track:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default">
              <Link href="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Documentation
              </Link>
            </Button>
          </div>
        </div>

        <p className="text-sm text-zinc-500">
          If you believe this is a mistake, please{" "}
          <Link href="/contact" className="text-purple-400 hover:underline">
            contact our support team
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

