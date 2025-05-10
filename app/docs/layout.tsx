import Navbar from "@/components/main-nav";


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
 
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        {/* Base gradient background that covers the entire viewport */}
        <div className="fixed inset-0 " />
        
        {/* Purple spotlight effect that follows the content */}
        <div className="fixed inset-0  pointer-events-none" />
        <Navbar />
        <main className="relative pt-16">
          {children}
        </main>
      </div>
  )
}

