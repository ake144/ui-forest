"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MorphingSearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    console.log("Search query submitted:", query);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <motion.form
      className="flex items-center justify-end bg-primary rounded-full overflow-hidden"
      initial={{ width: "48px", height: "48px" }}
      animate={{ width: isExpanded ? "300px" : "48px" }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
    >
      {isExpanded ? (
        <>
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow border-none bg-primary text-primary-foreground placeholder:text-primary-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-primary-foreground"
            onClick={() => setIsExpanded(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </>
      ) : (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="bg-primary text-primary-foreground"
          onClick={() => setIsExpanded(true)}
        >
          <Search className="h-4 w-4" />
        </Button>
      )}
    </motion.form>
  );
}
