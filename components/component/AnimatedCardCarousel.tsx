"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AnimatedCardCarousel() {
  const sampleCards = [
    { title: "Card 1", content: "This is the first card.", color: "#ff6363" },
    { title: "Card 2", content: "This is the second card.", color: "#ffa600" },
    { title: "Card 3", content: "This is the third card.", color: "#bc5090" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sampleCards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sampleCards.length) % sampleCards.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="overflow-hidden rounded-lg">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            variants={{
              enter: { x: 1000, opacity: 0 },
              center: { x: 0, opacity: 1 },
              exit: { x: -1000, opacity: 0 },
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          >
            <Card className="w-full h-64" style={{ backgroundColor: sampleCards[currentIndex].color }}>
              <CardContent className="flex flex-col items-center justify-center h-full text-white">
                <h2 className="text-2xl font-bold mb-4">{sampleCards[currentIndex].title}</h2>
                <p className="text-center">{sampleCards[currentIndex].content}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <Button variant="outline" size="icon" className="absolute top-1/2 left-2" onClick={prevCard}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="absolute top-1/2 right-2" onClick={nextCard}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
