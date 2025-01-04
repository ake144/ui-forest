import Navbar from "@/components/main-nav";
import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-full bg-black text-white">
    {/* Sidebar */}
    <div className="md:w-[200px] ">
      <Sidebar />
    </div>
    {/* Navbar for mobile and content */}
    <main className="flex-1 flex flex-col">
      <Navbar />
      <div className="flex-1 p-4">{children}</div>
    </main>
  </div>
  );
}
