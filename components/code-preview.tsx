"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const ImprovedConfettiButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleConfetti = () => {
    setIsAnimating(true);
   ());
  };

  return (
    <motion.button
      onClick={handleConfetti}
      className="relative px-8 py-4 bg-gradient-to-br from-purple-700 to-pink-800 
                 text-white font-semibold rounded-full shadow-lg 
                 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={isAnimating ? { rotate: [0, -10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10">Celebrate!</span>
      <motion.span
        className="absolute inset-0 bg-white rounded-full"
        initial={{ scale: 0, opacity: 0.5 }}
        animate={isAnimating ? { scale: 2, opacity: 0 } : { scale: 0, opacity: 0.5 }}
        transition={{ duration: 0.5 }}
      />
      <motion.span
        className="absolute inset-0 border-2 border-white rounded-full"
        initial={{ scale: 1 }}
        animate={isAnimating ? { scale: 1.5, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
};

export default ImprovedConfettiButton;

`;

const CodePreview = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleConfetti = () => {
    setIsAnimating(true);

    // Create a multi-stage confetti effect
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 1;

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    (function frame() {
      const timeLeft = animationEnd - Date.now();
      const ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          y: Math.random() * skew - 0.2,
        },
        colors: ['#ff0000', '#00ff00', '#0000ff'],
        shapes: ['circle', 'square'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.8, 1.2),
        drift: randomInRange(-0.4, 0.4),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      } else {
        setIsAnimating(false);
      }
    }());
  };


  return (
    <div  className="mx-12 p-8 ">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
        Customization made easy
        <br />
        <span className="text-pink-500">Just Copy and Paste</span>
      </h1>
    <div className="grid grid-cols-1 gap-7 md:gap-0 md:grid-cols-2 min-h-screen bg-black text-white h-screen">
     
        
     
      {/* Left Side: Code */}
      <div className="md:p-6   overflow-auto">
        <h2 className="text-2xl mb-4 font-bold">Code</h2>
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          wrapLongLines
          customStyle={{ borderRadius: "8px", background: "#1e1e2e" }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>

      {/* Right Side: Preview */}
      <div className="flex items-center justify-center bg-gradient-to-br from-pink-500 to-fuchsia-600 p-6">
        <button
          onClick={handleConfetti}
          className="px-6 py-3 bg-gradient-to-br from-purple-700 to-pink-800 
                     text-white font-semibold rounded-full shadow-lg 
                     hover:scale-105 transition-transform duration-300"
        >
          Celebrate!
        </button>
      </div>

      
    </div>
    </div>
  );
};

export default CodePreview;
