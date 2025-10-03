import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Background Image */}
      <div className="fixed inset-0 z-0 h-screen">
        <Image
          src="/jose.jpg"
          alt="Fondo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
        </div>

        {/* Featured Artwork */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="mt-16 text-center">
        </div>
      </div>
    </>
  );
}
