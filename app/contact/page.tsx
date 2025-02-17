"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/main-nav";
import React from "react";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-16 md:py-24 flex items-center">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold text-purple-400">Contact Us</h1>
        <p className="text-lg text-gray-300">Need help? Reach out to us, and we’ll get back to you.</p>

        <div className="mt-6 space-y-4">
          <p className="text-lg text-gray-400">📧 Email: <a href="mailto:hello@uiforest.com" className="text-purple-400">hello@uiforest.com</a></p>
          <p className="text-lg text-gray-400">🐦 Twitter: <a href="https://x.com/uiforest" className="text-purple-400">@uiforest</a></p>
          <p className="text-lg text-gray-400">💻 GitHub: <a href="https://github.com/ake144/ui-forest" className="text-purple-400">github.com/uiforest</a></p>
        </div>
      </div>
    </div>
    <Footer  />
    </>
    
  );
};

export default Contact;
