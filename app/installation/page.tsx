"use client"

import { Card } from "@/components/ui/card"

const frameworks = [
  {
    name: "Next.js",
    description: "React framework with hybrid static & server rendering",
    logo: "/next.svg"
  },
  {
    name: "Vite",
    description: "Next Generation Frontend Tooling",
    logo: "/vite.svg"
  },
  {
    name: "Remix",
    description: "Full stack web framework",
    logo: "/remix.svg"
  },
  {
    name: "Astro",
    description: "Framework for building content-driven websites",
    logo: "/astro.svg"
  },
  {
    name: "Laravel",
    description: "PHP web application framework",
    logo: "/laravel.svg"
  },
  {
    name: "Gatsby",
    description: "React-based framework for marketing sites",
    logo: "/gatsby.svg"
  }
]

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        {/* Purple Spotlight Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Installation</h1>
          <p className="text-xl text-zinc-400 mb-12">
            How to install dependencies and structure your app.
          </p>

          <div className="mb-4">
            <p className="text-zinc-400 mb-2">
              Note: We have the exact same installation process as <a href="#" className="text-purple-400 hover:text-purple-300">shadcn/ui</a>.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Frameworks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {frameworks.map((framework) => (
                <Card key={framework.name} className="bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 p-6 transition-all backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center p-2">
                      <img 
                        src={framework.logo} 
                        alt={framework.name} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{framework.name}</h3>
                      <p className="text-sm text-zinc-400">{framework.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">TypeScript</h2>
            <p className="text-zinc-400 mb-4">
              We provide a TypeScript configuration file that you can use to get started:
            </p>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <pre className="overflow-x-auto">
                <code className="text-sm text-zinc-100">
                  {`{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`}
                </code>
              </pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

