import Link from 'next/link'
import { ArrowLeft, Rocket, Bell, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'

export default function ProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mt-8 max-w-3xl mx-auto text-center">
          <Rocket className="mx-auto h-16 w-16 text-blue-400" />
          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
            Pro Version Coming Soon
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            We're working hard to bring you an enhanced experience. The Pro version of our Next.js 15 Boilerplate is almost ready for launch!
          </p>
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <Progress value={80} className="h-2 bg-gray-700" />
          <p className="mt-2 text-center text-sm text-gray-400">Development Progress: 80% Complete</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Advanced Authentication</h3>
            <p className="text-gray-300">Secure, customizable auth flows including social logins and multi-factor authentication.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">SaaS BoilerPlate</h3>
            <p className="text-gray-300">modern, customizable, and pro SaaS boilerplate for your next SaaS applications.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Dashboard & Admin Panel</h3>
            <p className="text-gray-300">Ready-to-use dashboard with customizable widgets and a powerful admin interface.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">E-commerce Integration</h3>
            <p className="text-gray-300">Full-featured e-commerce components with payment gateway integrations.</p>
          </div>
        </div>

        <div className="mt-16 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Stay Updated</h2>
          <p className="text-center mb-6 text-gray-300">
            Be the first to know when we launch. Subscribe to our newsletter for exclusive early access and special offers.
          </p>
          <form className="flex space-x-2">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
            <Button type="submit">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
          <ul className="inline-flex flex-col items-start text-left space-y-2">
            <li className="flex items-center">
              <Bell className="mr-2 h-5 w-5 text-blue-400" />
              Early access to beta features
            </li>
            <li className="flex items-center">
              <Bell className="mr-2 h-5 w-5 text-blue-400" />
              Exclusive pro-only components and templates
            </li>
            <li className="flex items-center">
              <Bell className="mr-2 h-5 w-5 text-blue-400" />
              Priority support and dedicated assistance
            </li>
            <li className="flex items-center">
              <Bell className="mr-2 h-5 w-5 text-blue-400" />
              Regular updates and new feature releases
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

