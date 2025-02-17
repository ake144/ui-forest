"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/main-nav";
import React from "react";

const RefundPolicy = () => {
  return (
    <>
    <Navbar  />
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-16 md:py-24 flex items-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-purple-400 text-center">Refund Policy</h1>

        <p className="text-lg text-gray-300">
          Since our products are digital, all sales are **final**. We do not offer refunds unless required by law or there's an special cases.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400">When Refunds Apply</h2>
        <p className="text-gray-400">If a purchase was made by mistake or due to a technical error, you may contact our support team.</p>

        <p className="text-lg text-gray-400 text-center mt-6">
          By purchasing, you agree to this refund policy.
        </p>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default RefundPolicy;
