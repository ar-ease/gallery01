import GalleryCard from "@/components/gallery/galleryCard";
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

        <div className="w-full">
          <div className="max-w-5xl-w-5xl flex items-center flex-wrap">
            {" "}
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
          </div>
        </div>
      </div>
    </div>
  );
}
