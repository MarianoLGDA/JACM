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
      
      <div className="h-[90vh] flex flex-col items-center justify-center px-4 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">

        </div>
        
        {/* Text positioned at bottom left */}
        <div className="fixed bottom-8 left-8 right-8 sm:left-auto sm:right-20 z-20">
          <p className="text-md sm:text-xl text-white max-w-2xl">
          Entiendo la pintura como un espejo de la condición humana: un puente entre lo oculto y lo revelado, entre la soledad y la comunidad, entre el peso de lo terrenal y la aspiración hacia lo trascendente.
          </p>
          <p className="text-lg sm:text-xl brand-400 flex justify-end italic -mt-2">
            a.2025
          </p>
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
