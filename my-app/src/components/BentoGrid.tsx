"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageType {
  id: number;
  src: string;
}

const BentoGrid = () => {
  const images: ImageType[] = [
    { id: 1, src: "/api/placeholder/800/600" },
    { id: 2, src: "/api/placeholder/400/300" },
    { id: 3, src: "/api/placeholder/800/600" },
    { id: 4, src: "/api/placeholder/800/600" },
    { id: 5, src: "/api/placeholder/400/300" },
    { id: 6, src: "/api/placeholder/400/300" },
    { id: 7, src: "/api/placeholder/800/600" },
    { id: 8, src: "/api/placeholder/400/300" },
    { id: 9, src: "/api/placeholder/400/300" },
    { id: 10, src: "/api/placeholder/400/300" },
    { id: 11, src: "/api/placeholder/400/300" },
    { id: 12, src: "/api/placeholder/400/300" },
  ];

  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const getImageSize = (index: number) => {
    const pattern = index % 12;
    switch (pattern) {
      case 0:
        return "col-span-2 row-span-2";
      case 3:
        return "col-span-2 row-span-2";
      case 7:
        return "col-span-2 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(image)}
            className={`group relative overflow-hidden rounded-xl bg-gray-100 ${getImageSize(
              index,
            )} transition-transform duration-300 hover:scale-[1.02] hover:cursor-pointer`}
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src={image.src}
              alt={`Gallery image ${image.id}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-lg font-semibold">Image {image.id}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full m-4">
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={`Selected image ${selectedImage.id}`}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 1200px) 100vw"
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BentoGrid;
