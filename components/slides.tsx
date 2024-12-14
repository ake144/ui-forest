"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroParallax } from "./ui/hero-parallax";


interface Template {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  category: string;
  features: string[];
}

const templates: Template[] = [
  {
    title: "Modern Dashboard",
    link: "/templates/modern-dashboard",
    thumbnail: "/templates/modern-dashboard.jpg",
    description: "A sleek and intuitive admin interface for your web application",
    category: "Admin",
    features: ["Responsive", "Dark Mode", "Data Visualization", "User Management"],
  },
  {
    title: "E-commerce Platform",
    link: "/templates/e-commerce-platform",
    thumbnail: "/templates/e-commerce-platform.jpg",
    description: "A powerful online store solution with advanced features",
    category: "E-commerce",
    features: ["Product Catalog", "Shopping Cart", "Secure Checkout", "Order Management"],
  },
  {
    title: "Portfolio Showcase",
    link: "/templates/portfolio-showcase",
    thumbnail: "/templates/portfolio-showcase.jpg",
    description: "An elegant design to highlight your creative work",
    category: "Creative",
    features: ["Project Gallery", "About Me Section", "Contact Form", "Blog Integration"],
  },
  {
    title: "Learning Management System",
    link: "/templates/lms",
    thumbnail: "/templates/lms.jpg",
    description: "A comprehensive platform for online education and course management",
    category: "Education",
    features: ["Course Creation", "Student Progress Tracking", "Discussion Forums", "Quiz Builder"],
  },
  {
    title: "Social Media Dashboard",
    link: "/templates/social-media-dashboard",
    thumbnail: "/templates/social-media-dashboard.jpg",
    description: "Monitor and manage your social media presence across multiple platforms",
    category: "Marketing",
    features: ["Analytics Integration", "Post Scheduler", "Engagement Metrics", "Content Calendar"],
  },
  {
    title: "Fitness Tracker",
    link: "/templates/fitness-tracker",
    thumbnail: "/templates/fitness-tracker.jpg",
    description: "Help users achieve their health goals with this comprehensive fitness app template",
    category: "Health & Wellness",
    features: ["Workout Planner", "Nutrition Tracking", "Progress Charts", "Community Challenges"],
  },
  // Add more templates here to reach at least 15 items for the HeroParallax
];

export function TemplateShowcase() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <HeroParallax products={templates.map(({ title, link, thumbnail }) => ({ title, link, thumbnail }))} />
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="mb-8 text-center text-4xl font-bold">Explore Our Templates</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <TemplateCard
              key={index}
              template={template}
              onClick={() => setSelectedTemplate(template)}
            />
          ))}
        </div>
      </div>
      {selectedTemplate && (
        <TemplateModal
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
    </div>
  );
}

const TemplateCard: React.FC<{
  template: Template;
  onClick: () => void;
}> = ({ template, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="group relative h-96 w-full overflow-hidden rounded-lg bg-gray-800 shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <img
      src={template.thumbnail}
      alt={template.title}
      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    <div className="absolute bottom-0 left-0 p-4 text-white">
      <h3 className="text-2xl font-bold">{template.title}</h3>
      <p className="text-sm text-gray-300">{template.description}</p>
      <span className="mt-2 inline-block rounded-full bg-gray-700 px-3 py-1 text-xs text-gray-300">
        {template.category}
      </span>
    </div>
  </motion.div>
);

const TemplateModal: React.FC<{
  template: Template;
  onClose: () => void;
}> = ({ template, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
  >
    <div className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-lg bg-gray-900 p-8">
      <h2 className="mb-4 text-3xl font-bold">{template.title}</h2>
      <img
        src={template.thumbnail}
        alt={template.title}
        className="mb-6 h-64 w-full rounded-lg object-cover"
      />
      <p className="mb-6 text-gray-300">{template.description}</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {template.features.map((feature, index) => (
          <span
            key={index}
            className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300"
          >
            {feature}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
        <Button>Use This Template</Button>
      </div>
    </div>
  </motion.div>
);

