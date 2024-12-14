"use client";
import React from "react";

import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Layout, Palette, Zap, Code } from 'lucide-react'
 
const content = [
    {
        title: "Responsive Templates",
        description:
          "Fully responsive designs that look great on any device.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            <Layout  className="w-full h-full"/>,
          </div>
        ),
      },
  
  {
    title: "Customizable Components",
    description:
      "Easily customize colors, fonts, and styles to match your brand.",
    content: (
      <div className="h-full w-full  flex items-center justify-center  text-white">
        <Palette className="w-full h-full"/>,
      </div>
    ),
  },

  {
    title: "Performance Optimized",
    description:
      "Lightweight and fast-loading for optimal user experience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Zap className="w-full h-full"/>
      </div>
    ),
  },
  {
    title: "Developer Friendly",
    description:
      "Clean, well-documented code that's easy to integrate and modify.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <Code className="w-full h-full" />    
      </div>
    ),
  },
];
export function FeaturesList() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}