"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedSkillBars() {
  const sampleSkills = [
    { name: "JavaScript", level: 85, color: "#f7df1e" },
    { name: "React", level: 90, color: "#61dafb" },
    { name: "CSS", level: 75, color: "#2965f1" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {sampleSkills.map((skill, index) => (
        <div key={index} className="relative">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-sm font-medium">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <motion.div
              className="h-6 rounded-full"
              style={{ backgroundColor: skill.color }}
              initial={{ width: 0 }}
              animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
