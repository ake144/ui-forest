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
 
    <div >
      <div className="min-h-screen bg-black overflow-x-hidden relative">
        {/* Base gradient background that covers the entire viewport */}
        <div className="fixed inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 pointer-events-none" />
        
        {/* Purple spotlight effect that follows the content */}
        <div className="fixed inset-0 bg-gradient-to-b from-purple-900/50 to-transparent pointer-events-none" />
        
        <Navbar />
        <main className="relative pt-16">
          {children}
        </main>
      </div>
    </div>
  )
}

