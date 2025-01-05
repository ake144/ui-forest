import Navbar from "@/components/main-nav";
import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col overflow-x-hidden md:flex-row h-full bg-black text-white">
    {/* Sidebar */}
    <div className="md:w-[250px] ">
      <Sidebar />
    </div>
    {/* Navbar for mobile and content */}
    <main className="flex-1 flex  flex-col md:flex-row">
       <div className="flex "><Navbar /></div>  
      <div className="flex-1 p-4">{children}</div>
    </main>
  </div>
  );
}
