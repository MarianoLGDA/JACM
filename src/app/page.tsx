'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
    // Funciones para carrusel de Sátiro
    const [currentImage, setCurrentImage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const nextImage = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 150);
    };
  
    const prevImage = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
          setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 150);
    };

  
    const goToImage = (index: number) => {
      if (isTransitioning || index === currentImage) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 150);
    };
  const images = [
    {
      id: 1,
      image: "/carrousel_1.jpg",
      description: "Fondo"
    },
    {
      id: 2,
      image: "/carrousel_2.jpg",
      description: "Fondo"
    },
    {
      id: 3,
      image: "/carrousel_3.jpg",
      description: "Fondo"
    },
    {
      id: 4,
      image: "/carrousel_4.jpg",
      description: "Fondo"
    },
    {
      id: 5,
      image: "/carrousel_5.jpg",
      description: "Fondo"
    },
    {
      id: 6,
      image: "/carrousel_6.jpg",
      description: "Fondo"
    },
    {
      id: 7,
      image: "/carrousel_7.jpg",
      description: "Fondo"
    },
    {
      id: 8,
      image: "/carrousel_8.jpg",
      description: "Fondo"
    },
    {
      id: 9,
      image: "/carrousel_9.jpg",
      description: "Fondo"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2500);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      {/* Background Image */}
      <div className="fixed inset-0 z-0 h-screen">
        <div className="absolute inset-0 bg-white">
       
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mb-8 sm:mb-16 pt-8 sm:pt-20">
        {/* Hero Section */}
        {/* Carrusel de Imagenes */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-16 pt-8 sm:pt-20">

          
          <div className="relative shadow-brand-400 p-4 sm:p-6 md:p-8">
            {/* Imagen principal con controles en los bordes */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              {/* Flecha izquierda */}

              {/* Imagen */}
              <div className="w-full sm:pr-10 left-[50%] -translate-x-1/2 max-w-[500px] h-[500px] sm:max-w-[800px] sm:h-[800px] md:max-w-[500px] md:h-[500px] relative overflow-hidden mx-4">
                 <Image 
                   src={images[currentImage].image} 
                   alt={images[currentImage].description || ''} 
                   fill
                   className={`object-contain transition-opacity duration-300 ease-in-out ${
                     isTransitioning ? 'opacity-0' : 'opacity-100'
                   }`}
                 />
              </div>
            </div>
          </div>
        </div>

        
        {/* Text positioned at bottom left */}
        <div className="fixed bottom-8 left-8 right-8 sm:left-auto sm:right-20 z-20">
          <p className="text-md sm:text-xl text-brand-400 max-w-2xl">
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
