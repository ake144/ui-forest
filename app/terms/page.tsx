"use client";

import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-16 md:py-24 flex items-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-purple-400 text-center">Terms & Conditions</h1>

        <h2 className="text-2xl font-semibold text-purple-400">1. Usage Agreement</h2>
        <p className="text-gray-400">By accessing UI Forest, you agree to follow these terms.</p>

        <h2 className="text-2xl font-semibold text-purple-400">2. License & Restrictions</h2>
        <p className="text-gray-400">Our free UI components are open-source, but premium templates require a valid purchase.</p>

        <h2 className="text-2xl font-semibold text-purple-400">3. Payments & Refunds</h2>
        <p className="text-gray-400">All purchases are final. No refunds will be issued for digital products.</p>

        <p className="text-lg text-gray-400 text-center mt-6">
          Please read these terms carefully before using UI Forest.
        </p>
      </div>
    </div>
  );
};

export default Terms;
