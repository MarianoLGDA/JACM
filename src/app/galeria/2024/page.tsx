'use client'
import React from "react";
import Image from "next/image";

const artworks = [
    {
        id: 1,
        title: "Diásporas",
        image: "/IMG_2560.jpeg",
        description: "130x230 cm . Óleo sobre lienzo . 2023"
    },
  
    
    {
        id: 4,
        title: "Escucha mejor",
        image: "/IMG_2562.jpeg",
        description: "180x180 cm . Óleo sobre lienzo . 2023"
    },
    
    {
        id: 5,
        title: "Viejo ascético",
        image: "/IMG_2563.jpeg",
        description: "80x120 cm . Óleo sobre lienzo . 2022"
    },
    {
        id: 9,
        title: "Luz en vacío",
        image: "/IMG_2568.jpeg",
        description: "180x180 cm . Óleo sobre lienzo . 2023"
    },
    {
        id: 10,
        title: "Marca de nacimiento",
        image: "/IMG_2569.jpeg",
        description: "145x80 cm . Óleo sobre lienzo . 2022"
    },
    {
        id: 12,
        title: "Autorretrato en Barcelona",
        image: "/IMG_2571.jpeg",
        description: "45x45 cm . Óleo sobre lienzo . 2024"
    },
    
    
]
export default function Galeria2024Page() {
  return (
    <>
      {/* Full Background */}
      <div className="fixed inset-0 bg-white -z-10 "></div>
      
      <div className="min-h-screen w-full py-4 sm:py-8 px-3 sm:px-4">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-6 sm:mb-12">
          <p className="text-2xl sm:text-3xl md:text-4xl text-center text-brand-400 max-w-2xl mx-auto py-6 sm:py-11">
            2024
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {artworks.map((artwork, index) => (
            <div key={artwork.id} className={`${index === 0 ? 'pt-3 sm:pt-6' : ''}`}>
              <div className="relative bg-gray-50 shadow-lg shadow-brand-400 p-4 sm:p-6 md:p-10">
                {/* Imagen */}
                <div className="flex justify-center mb-6 sm:mb-10">
                  <div className="w-full max-w-[280px] h-[280px] sm:max-w-[400px] sm:h-[400px] md:max-w-[500px] md:h-[500px] relative overflow-hidden">
                    <Image 
                      src={artwork.image} 
                      alt={artwork.title} 
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Información de la obra */}
                <div className="text-center mt-6 sm:mt-10">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
                    <p className="text-xs sm:text-sm text-brand-400 font-medium">{artwork.title}</p>
                    <p className="hidden sm:inline text-sm text-brand-400">•</p>
                    <p className="text-brand-400 text-xs sm:text-sm">{artwork.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
