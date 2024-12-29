"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export function PricingCalculator() {
  const [users, setUsers] = useState(10);
  const [plan, setPlan] = useState<"basic" | "pro" | "enterprise">("basic");

  const calculatePrice = () => {
    const pricePerUser = {
      basic: 10,
      pro: 20,
      enterprise: 35,
    };
    return users * pricePerUser[plan];
  };

  return (
    <div className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Pricing Calculator
        </h2>
        <div className="bg-white p-10 rounded-xl shadow-xl ring-1 ring-gray-200">
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-4">
              Number of Users
            </label>
            <Slider
              value={[users]}
              onValueChange={(value) => setUsers(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="mt-3 text-sm text-gray-600 font-semibold">
              {users} {users === 1 ? "user" : "users"}
            </p>
          </div>
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-4">
              Select Plan
            </label>
            <div className="flex space-x-4">
              {["basic", "pro", "enterprise"].map((p) => (
                <Button
                  key={p}
                  onClick={() => setPlan(p as "basic" | "pro" | "enterprise")}
                  variant={plan === p ? "default" : "outline"}
                  className={`${
                    plan === p
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-indigo-50"
                  }`}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </Button>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={`${users}-${plan}`}
            className="text-center"
          >
            <p className="text-xl text-gray-700 font-medium mb-4">
              Estimated Monthly Cost
            </p>
            <p className="text-5xl font-extrabold text-indigo-600">
              ${calculatePrice()}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
