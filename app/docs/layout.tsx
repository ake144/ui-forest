import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UI Forest Documentation',
  description: 'Documentation for UI Forest components and templates',
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
      <main className="min-h-screen bg-black text-white">
        {children}
      </main>
    </div>
  )
}

