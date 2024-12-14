import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProTemplate() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Upgrade to Pro Starter Template
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Get even more features and premium support with our Pro version
        </p>
        <ul className="mt-8 space-y-4 text-left text-gray-600">
          <li className="flex items-start">
            <ArrowRight className="h-6 w-6 text-green-500 mr-2" />
            <span>Advanced authentication flows</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="h-6 w-6 text-green-500 mr-2" />
            <span>Pre-built dashboard and admin panel</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="h-6 w-6 text-green-500 mr-2" />
            <span>E-commerce components and integrations</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="h-6 w-6 text-green-500 mr-2" />
            <span>Premium email and chat support</span>
          </li>
        </ul>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/pro">
              Get Pro Template
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

