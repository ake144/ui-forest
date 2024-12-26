import Navbar from "@/components/main-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-black">

      <main className="flex-1 overflow-y-auto p-4">
          <Navbar />
        {children}</main>
    </div>
  )
}

