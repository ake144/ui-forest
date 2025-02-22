"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ModernButton } from "./button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import UiForestLogo from "./logo";

const navItems = [
  { name: "Templates", href: "/template" },
  { name: "Components", href: "/components" },
  { name: "Docs", href: "/docs"},
  {name:"Pricing", href:"/pricing"},
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-sm" : "bg-background",
        "md:pl-[200px]" // Add padding to account for the sidebar on larger screens
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

        
          <Link href="/" className="flex items-center space-x-2">
              <UiForestLogo  />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex text-gray-50 space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 text-white w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col text-white space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="hidden md:flex text-gray-50 items-center space-x-4">
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                {/* Signed out users get sign in button */}
                <SignInButton mode="modal">
                  <ModernButton>
                    Join Uiforest
                  </ModernButton>
                </SignInButton>
              </SignedOut>
            </div>
        </div>
      </div>
    </motion.header>
  );
}
