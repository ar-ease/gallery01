"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MinimalSearchBar() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="flex justify-center  bg-transparent sticky top-0 z-20">
      <form onSubmit={handleSearch} className="relative w-full max-w-lg mt-8">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-2 rounded-full bg-muted text-foreground placeholder-muted-foreground 
              transition duration-300 ease-in-out 
              focus:ring-2 focus:ring-primary focus:ring-opacity-50 
              shadow-md focus:shadow-xl"
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            className="absolute right-1 top-1/2 -translate-y-1/2 
              text-muted-foreground hover:text-foreground 
              transition duration-300 ease-in-out"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  );
}
