"use client";

import { ArrowRight, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";


const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`relative w-full  z-[55] transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/vercel.svg"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="font-bold text-white text-lg">PLC</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 bg-transparent/20 backdrop-blur-md rounded-full px-6 py-3 border border-gray-800">
          <Link
            href="#"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-gray-400 p-2 focus:outline-none"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-400 ">
            <Sun className="h-5 w-5" />
          </Button>
          <Button className="group bg-purple-600 rounded-full hover:bg-purple-700">
            Start Now
            <ArrowRight className="translate-x-0 duration-300 group-hover:translate-x-2 ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md border-t border-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <Link
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;