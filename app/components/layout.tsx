import Navbar from "@/components/main-nav"
import { Sidebar } from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-black text-white ">
      <Sidebar />

      <main className="flex-1  overflow-y-auto p-4">
         
        {children}</main>
    </div>
  )
}

