"use client"

import { Copy } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        {/* Purple Spotlight Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-sm text-zinc-400">Docs</span>
            <span className="text-sm text-zinc-600">/</span>
            <span className="text-sm text-zinc-400">Next.js</span>
          </div>
          <div className="mb-4">
            <p className="text-zinc-400 mb-2 mt-5">
              Note: We have the exact same installation process as <a href="https://ui.shadcn.com/docs/installation" className="text-purple-400 hover:text-purple-300">shadcn/ui</a>.
            </p>
          </div>
          <h1 className="text-4xl font-bold mb-4">Next.js</h1>
          <p className="text-xl text-zinc-400 mb-12">Install and configure Next.js.</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6" id="create-project">Create project</h2>
              <p className="text-zinc-400 mb-4">
                Run the <code className="px-2 py-1 rounded bg-zinc-800 text-sm">init</code> command to create a new Next.js project or to setup an existing one:
              </p>
              <div className="relative">
                <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-zinc-100">
                    <span className="text-zinc-500">npx</span> shadcn@latest init
                  </code>
                </pre>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2 text-zinc-400 hover:text-white"
                  onClick={() => navigator.clipboard.writeText("npx shadcn@latest init")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4 p-4 border border-zinc-800 rounded-lg bg-zinc-900">
                <p className="text-sm text-zinc-400">
                  You can use the <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-xs">-d</code> flag for defaults i.e <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-xs">new-york</code>, <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-xs">zinc</code> and <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-xs">yes</code> for the css variables.
                </p>
                <div className="mt-2">
                  <pre className="bg-zinc-950 rounded p-2 overflow-x-auto">
                    <code className="text-sm text-zinc-100">
                      <span className="text-zinc-500">npx</span> shadcn@latest init -d
                    </code>
                  </pre>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6" id="configure">Configure components.json</h2>
              <p className="text-zinc-400 mb-4">
                You will be asked a few questions to configure <code className="px-2 py-1 rounded bg-zinc-800 text-sm">components.json</code>:
              </p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                <pre className="overflow-x-auto">
                  <code className="text-sm text-zinc-100">
                    {`Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Where is your global CSS file? › app/globals.css
Do you want to use CSS variables for colors? › yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components? › @/components
Configure the import alias for utils? › @/lib/utils
Are you using React Server Components? › yes`}
                  </code>
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6" id="thats-it">That's it!</h2>
              <p className="text-zinc-400 mb-4">
                You can now start adding components to your project. Run <code className="px-2 py-1 rounded bg-zinc-800 text-sm">add</code> to add components:
              </p>
              <div className="relative">
                <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-zinc-100">
                    <span className="text-zinc-500">npx</span> shadcn@latest add button
                  </code>
                </pre>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2 text-zinc-400 hover:text-white"
                  onClick={() => navigator.clipboard.writeText("npx shadcn@latest add button")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

                 <p className='mt-9 p-3 mx-5 '>For others frameworks visit <Link href='https://ui.shadcn.com/docs/installation'><span className='text-purple-600 p-1 '>here</span></Link></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

