"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function InteractiveTimeline() {
  const sampleEvents = [
    { date: "2024-01-01", title: "Event 1", description: "Description for event 1" },
    { date: "2024-02-01", title: "Event 2", description: "Description for event 2" },
    { date: "2024-03-01", title: "Event 3", description: "Description for event 3" },
  ];

  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto py-16">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200" />
      {sampleEvents.map((event, index) => (
        <motion.div
          key={index}
          className={`relative ${index % 2 === 0 ? "left-0 pr-8" : "left-1/2 pl-8"} mb-8`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className={`absolute top-0 ${index % 2 === 0 ? "right-0" : "left-0"} transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${
              activeEvent === index ? "bg-secondary" : "bg-primary"
            } cursor-pointer`}
            onClick={() => setActiveEvent(activeEvent === index ? null : index)}
          />
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              {activeEvent === index && <p className="text-sm">{event.description}</p>}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
