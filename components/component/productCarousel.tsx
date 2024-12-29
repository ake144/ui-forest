"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: "$299",
    image:
      "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Wireless Keyboard",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1496243975092-6ec259c776e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "4K Monitor",
    price: "$499",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Ergonomic Mouse",
    price: "$79",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      {/* Carousel Content */}
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={products[currentIndex].id}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center"
          >
            {/* Product Image */}
            <div className="w-full md:w-2/5">
              <img
                src={products[currentIndex].image}
                alt={products[currentIndex].name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-3/5 md:pl-8 text-center md:text-left mt-8 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {products[currentIndex].name}
              </h2>
              <p className="text-2xl text-gray-500 mb-6">
                {products[currentIndex].price}
              </p>
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Add to Cart
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevProduct}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
        aria-label="Previous product"
      >
        <ChevronLeft className="text-black" size={24} />
      </button>
      <button
        onClick={nextProduct}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
        aria-label="Next product"
      >
        <ChevronRight className="text-black" size={24} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to product ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
