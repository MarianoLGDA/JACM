'use client'
import React from "react";
import Image from "next/image";

const artworks = [
    {
        id: 1,
        title: "Estudio de Velázquez",
        image: "/dibujo1.jpg",
        description: "A4"
    },
  
    
    {
        id: 4,
        title: "Estudio de mujer",
        image: "/dibujo2.jpg",
        description: "A4"
    },
    
    {
        id: 5,
        title: "Retrato de Johan",
        image: "/dibujo3.jpg",
        description: "A4"
    },
    {
        id: 9,
        title: "Estudio de Ribera",
        image: "/dibujo4.jpg",
        description: "A4"
    },
    {
        id: 10,
        title: "Estudio de Tiziano",
        image: "/Tiziano.jpg",
        description: "A4"
    },
  
    
    
]
export default function Galeria2024Page() {
  return (
    <>
      {/* Full Background */}
      <div className="fixed inset-0 bg-white -z-10 "></div>
      
      <div className="min-h-screen w-full py-4 sm:py-8 px-3 sm:px-4">
        {/* Header */}
       {/* Header */}
       <div className="max-w-6xl mx-auto -mt-4 sm:mb-8">
          <p className="text-xl italic sm:text-3xl md:text-4xl text-center text-brand-400 max-w-2xl mx-auto py-4 sm:py-2">
            Dibujos
          </p>
        </div>
        <div className="max-w-4xl mx-auto -mt-4 sm:mb-12">
          <p className="text-md lg:text-lg text-center text-brand-400 max-w-2xl mx-auto py-4 sm:py-2">
            Obras seleccionadas
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
