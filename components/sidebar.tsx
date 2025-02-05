"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Home, Layers, ChevronDown, Search } from "lucide-react";
import { getAllComponentSlugs } from "@/lib/getItems";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isComponentsOpen, setIsComponentsOpen] = useState(true);
  const [components, setComponents] = useState<any>([]);
 

  // Fetch components data
  useEffect(() => {
    const fetchComponents = async () => {
      const fetchedComponents = await getAllComponentSlugs();
      setComponents(fetchedComponents);
    };

    fetchComponents();
  }, []);

  // Filter components based on search term
  const filteredComponents = Array.isArray(components)
  ? components.filter((component: any) =>
      component.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : [];


  const sidebarVariants = {
    open: { width: "16rem" },
    closed: { width: "4rem" },
  };

  return (
    <motion.div
      className={cn(
        "flex flex-col z-50 h-full bg-zinc-900 text-white border-r border-zinc-800 overflow-hidden",
        isOpen ? "items-start" : "items-center"
      )}
      initial="open"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div
        className={cn(
          "flex items-center h-16 px-4 border-b border-zinc-800 w-full",
          isOpen ? "justify-between" : "justify-center"
        )}
      >
        {/* Add Logo or Title Here */}
      </div>

      <ScrollArea className="flex-grow w-full">
        <nav className="p-4 space-y-2">
          {isOpen && (
            <div className="relative mb-4">
              <Search
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-400"
                size={18}
              />
              <Input
                type="search"
                placeholder="Search components..."
                className="pl-8 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}

          <NavItem href="/components/docs" icon={Home} isOpen={isOpen}>
            Docs
          </NavItem>

          <div>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-between text-zinc-400 hover:text-white hover:bg-zinc-800",
                isComponentsOpen && "text-white"
              )}
              onClick={() => setIsComponentsOpen(!isComponentsOpen)}
            >
              <div className="flex items-center">
                <Layers className="mr-2 h-5 w-5" />
                {isOpen && "Components"}
              </div>
              {isOpen && (
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isComponentsOpen && "rotate-180"
                  )}
                />
              )}
            </Button>
            {isComponentsOpen && isOpen && (
              <div className="mt-2 ml-4 space-y-1">
                {filteredComponents.map((component:any) => (
                  <NavItem
                    key={component.name}
                    href={`/components/${component.slug}`}
                    icon={Layers} // Replace with the actual icon if available
                    isOpen={isOpen}
                    compact
                  >
                    {component.name}
                  </NavItem>
                ))}
              </div>
            )}
          </div>
        </nav>
      </ScrollArea>
    </motion.div>
  );
}

function NavItem({
  href,
  icon: Icon,
  children,
  isOpen,
  compact = false,
}: {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
  isOpen: boolean;
  compact?: boolean;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center py-2 px-3 rounded-md transition-colors",
        isActive
          ? "bg-zinc-800 text-white"
          : "text-zinc-400 hover:text-white hover:bg-zinc-800",
        compact && "py-1"
      )}
    >
      <Icon className={cn("h-5 w-5", isOpen && "mr-2")} />
      {isOpen && <span className={cn(compact && "text-sm")}>{children}</span>}
    </Link>
  );
}
