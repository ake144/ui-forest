"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MorphingButton = () => {
    const [isCircle, setIsCircle] = useState(false);
    return (
      <motion.button
        className="relative w-48 h-14 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600  border border-gray-400/40 text-white font-bold overflow-hidden backdrop-blur-md"
        animate={{
          borderRadius: isCircle ? "50%" : "8px",
          width: isCircle ? "56px" : "192px",
        }}
        onClick={() => setIsCircle(!isCircle)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isCircle ? "circle" : "rectangle"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {isCircle ? "O" : "Morph"}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    );
  };

  const DropdownButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="relative">
        <motion.button
          className="relative w-48 h-14 bg-gradient-to-r from-blue-800 via-blue-900 to-purple-800 text-white font-semibold rounded-lg shadow-lg flex items-center justify-between px-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Select Option</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: isOpen ? 180 : 0 }}
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 w-full mt-2 bg-gray-800 text-white rounded-lg shadow-lg backdrop-blur-md overflow-hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {["Option 1", "Option 2", "Option 3"].map((option) => (
                <button
                  key={option}
                  className="w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  {option}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const SubmitButton = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = () => {
      setIsSubmitting(true);
      setTimeout(() => setIsSubmitting(false), 2000);
    };
    return (
      <motion.button
        className="relative w-48 h-14  border border-green-300/50 bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 text-white font-bold rounded-lg shadow-lg flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <motion.div
              className="w-5 h-5 border-t-2 border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <span>Submitting...</span>
          </>
        ) : (
          <span>Submit Form</span>
        )}
      </motion.button>
    );
  };

  const RippleButton = () => {
    const [ripples, setRipples] = useState<any>([]);
    const addRipple = (event:any) => {
      const button = event.currentTarget.getBoundingClientRect();
      const size = Math.max(button.width, button.height);
      const x = event.clientX - button.left - size / 2;
      const y = event.clientY - button.top - size / 2;
      const newRipple = {
        x,
        y,
        size,
        id: new Date().getTime(),
      };
      setRipples([...ripples, newRipple]);
    };
    return (
      <motion.button
        className="relative w-48 h-14 bg-gradient-to-r from-pink-900 to-gray-700 text-white font-bold rounded-lg overflow-hidden backdrop-blur-md"
        onClick={addRipple}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ripple
        {ripples.map((ripple:any) => (
          <motion.span
            key={ripple.id}
            className="absolute bg-white/40 rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
            initial={{ opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={() =>
              setRipples(ripples.filter((r:any) => r.id !== ripple.id))
            }
          />
        ))}
      </motion.button>
    );
  };


  export default function AllButtons() {
    return (
      <div className="grid grid-rows-2 max-w-8xl grid-cols-3 items-center justify-center h-1/2 0 p-8 gap-8 relative">
        <SubmitButton />
        <DropdownButton />
        <MorphingButton />
        <RippleButton />
      </div>
    );
  }