"use client";
import BentoGrid from "@/components/BentoGrid";
import GdgWelcomText from "@/components/GdgWelcomeText";
import { ModeToggle } from "@/components/ModeToggle";
import SearchBar from "@/components/search/SearchBar";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <SearchBar />
        <div className="absolute top-0 right-0 p-10">
          <ModeToggle />
        </div>

        <GdgWelcomText />

        <BentoGrid />
      </div>
    </div>
  );
}
