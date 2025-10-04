'use client'
import React, { useState } from "react";
import Image from "next/image";

// Carrusel de Sátiros
const satiroArtworks = [
    {
        id: 1,
        title: "Sátiro",
        image: "/nikos1.jpg",
        description: "55x50 cm . Óleo sobre lienzo . 2025"
    },
    {
        id: 2,
        title: "Sátiro",
        image: "/nikos2.jpg",
        description: "55x50 cm . Óleo sobre lienzo . 2025"
    },
    {
        id: 3,
        title: "Sátiro",
        image: "/nikos3.jpg",
        description: "55x50 cm . Óleo sobre lienzo . 2025"
    },
    {
        id: 4,
        title: "Sátiro",
        image: "/nikos4.jpg",
        description: "55x50 cm . Óleo sobre lienzo . 2025"
    }
];

// Carrusel de Eir
const eirArtworks = [
    {
        id: 5,
        title: "Eir",
        image: "/eir.jpg",
        description: "70x90 cm . Óleo sobre lienzo . 2025"
    },
    {
        id: 6,
        title: "Eir",
        image: "/eir2.jpg",
        description: "70x90 cm . Óleo sobre lienzo . 2025"
    },
    {
        id: 7,
        title: "Eir",
        image: "/eir3.jpg",
        description: "70x90 cm . Óleo sobre lienzo . 2025"
    },
    {
        id: 8,
        title: "Eir",
        image: "/eir4.jpg",
        description: "70x90 cm . Óleo sobre lienzo . 2025"
    }
];

// Carrusel de Shygi
const shygiArtworks = [
    {
        id: 9,
        title: "Shiyi",
        image: "/chino1.jpg",
        description: "60x65 cm . Óleo sobre lienzo . 2025"
    },
    {
        id: 10,
        title: "Shiyi",
        image: "/chino2.jpg",
        description: "60x65 cm . Óleo sobre lienzo . 2025"
    },
    {
        id: 11,
        title: "Shiyi",
        image: "/chino3.jpg",
        description: "60x65 cm . Óleo sobre lienzo . 2025"
    }
];
    


export default function Galeria2024Page() {
  const [currentSatiroSlide, setCurrentSatiroSlide] = useState(0);
  const [currentEirSlide, setCurrentEirSlide] = useState(0);
  const [currentShygiSlide, setCurrentShygiSlide] = useState(0);
  
  // Estados para controlar las transiciones
  const [isTransitioningSatiro, setIsTransitioningSatiro] = useState(false);
  const [isTransitioningEir, setIsTransitioningEir] = useState(false);
  const [isTransitioningShygi, setIsTransitioningShygi] = useState(false);
  // Funciones para carrusel de Sátiro
  const nextSatiroSlide = () => {
    if (isTransitioningSatiro) return;
    setIsTransitioningSatiro(true);
    setTimeout(() => {
      setCurrentSatiroSlide((prev) => (prev + 1) % satiroArtworks.length);
      setTimeout(() => setIsTransitioningSatiro(false), 50);
    }, 150);
  };

  const prevSatiroSlide = () => {
    if (isTransitioningSatiro) return;
    setIsTransitioningSatiro(true);
    setTimeout(() => {
      setCurrentSatiroSlide((prev) => (prev - 1 + satiroArtworks.length) % satiroArtworks.length);
      setTimeout(() => setIsTransitioningSatiro(false), 50);
    }, 150);
  };

  const goToSatiroSlide = (index: number) => {
    if (isTransitioningSatiro || index === currentSatiroSlide) return;
    setIsTransitioningSatiro(true);
    setTimeout(() => {
      setCurrentSatiroSlide(index);
      setTimeout(() => setIsTransitioningSatiro(false), 50);
    }, 150);
  };

  // Funciones para carrusel de Eir
  const nextEirSlide = () => {
    if (isTransitioningEir) return;
    setIsTransitioningEir(true);
    setTimeout(() => {
      setCurrentEirSlide((prev) => (prev + 1) % eirArtworks.length);
      setTimeout(() => setIsTransitioningEir(false), 50);
    }, 150);
  };

  const prevEirSlide = () => {
    if (isTransitioningEir) return;
    setIsTransitioningEir(true);
    setTimeout(() => {
      setCurrentEirSlide((prev) => (prev - 1 + eirArtworks.length) % eirArtworks.length);
      setTimeout(() => setIsTransitioningEir(false), 50);
    }, 150);
  };

  const goToEirSlide = (index: number) => {
    if (isTransitioningEir || index === currentEirSlide) return;
    setIsTransitioningEir(true);
    setTimeout(() => {
      setCurrentEirSlide(index);
      setTimeout(() => setIsTransitioningEir(false), 50);
    }, 150);
  };

  // Funciones para carrusel de Shygi
  const nextShygiSlide = () => {
    if (isTransitioningShygi) return;
    setIsTransitioningShygi(true);
    setTimeout(() => {
      setCurrentShygiSlide((prev) => (prev + 1) % shygiArtworks.length);
      setTimeout(() => setIsTransitioningShygi(false), 50);
    }, 150);
  };

  const prevShygiSlide = () => {
    if (isTransitioningShygi) return;
    setIsTransitioningShygi(true);
    setTimeout(() => {
      setCurrentShygiSlide((prev) => (prev - 1 + shygiArtworks.length) % shygiArtworks.length);
      setTimeout(() => setIsTransitioningShygi(false), 50);
    }, 150);
  };

  const goToShygiSlide = (index: number) => {
    if (isTransitioningShygi || index === currentShygiSlide) return;
    setIsTransitioningShygi(true);
    setTimeout(() => {
      setCurrentShygiSlide(index);
      setTimeout(() => setIsTransitioningShygi(false), 50);
    }, 150);
  };

  return (
    <>
      {/* Full Background */}
      <div className="fixed inset-0 bg-white -z-10"></div>
      
      <div className="min-h-screen w-full py-4 sm:py-8 px-3 sm:px-4">
         {/* Header */}
         <div className="max-w-6xl mx-auto -mt-4 sm:mb-8">
          <p className="text-xl italic sm:text-3xl md:text-4xl text-center text-brand-400 max-w-2xl mx-auto py-4 sm:py-2">
            2025
          </p>
        </div>
        <div className="max-w-4xl mx-auto -mt-4 sm:mb-12">
          <p className="text-md lg:text-lg text-center text-brand-400 max-w-2xl mx-auto py-4 sm:py-2">
            Obras seleccionadas
          </p>
        </div>

        {/* Carrusel de Sátiros */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-16 pt-8 sm:pt-20">

          
          <div className="relative bg-gray-50 shadow-lg shadow-brand-400 p-4 sm:p-6 md:p-8">
            {/* Imagen principal con controles en los bordes */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              {/* Flecha izquierda */}
              <button 
                onClick={prevSatiroSlide}
                className="bg-white hover:bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-md transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Imagen */}
              <div className="w-full max-w-[250px] h-[250px] sm:max-w-[350px] sm:h-[350px] md:max-w-[500px] md:h-[500px] relative overflow-hidden mx-4">
                 <Image 
                   src={satiroArtworks[currentSatiroSlide].image} 
                   alt={satiroArtworks[currentSatiroSlide].title} 
                   fill
                   className={`object-contain transition-opacity duration-300 ease-in-out ${
                     isTransitioningSatiro ? 'opacity-0' : 'opacity-100'
                   }`}
                 />
              </div>

              {/* Flecha derecha */}
              <button 
                onClick={nextSatiroSlide}
                className="bg-white hover:bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-md transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Información de la obra */}
            <div className="text-center mb-4 sm:mb-6">
              <div className={`flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center transition-opacity duration-300 ease-in-out ${
                isTransitioningSatiro ? 'opacity-0' : 'opacity-100'
              }`}>
                <p className="text-xs sm:text-sm text-brand-400 font-medium">{satiroArtworks[currentSatiroSlide].title}</p>
                <p className="hidden sm:inline text-sm text-brand-400">•</p>
                <p className="text-brand-400 text-xs sm:text-sm">{satiroArtworks[currentSatiroSlide].description}</p>
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center">
              <div className="flex space-x-2">
                {satiroArtworks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSatiroSlide(index)}
                    className={`w-2 h-2 sm:w-1 sm:h-1 rounded-full transition-colors duration-300 ${
                      index === currentSatiroSlide ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel de Eir */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-16">
          
          <div className="relative bg-gray-50 shadow-lg shadow-brand-400 p-4 sm:p-6 md:p-8">
            {/* Imagen principal con controles en los bordes */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              {/* Flecha izquierda */}
              <button 
                onClick={prevEirSlide}
                className="bg-white hover:bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-md transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Imagen */}
              <div className="w-full max-w-[250px] h-[250px] sm:max-w-[350px] sm:h-[350px] md:max-w-[500px] md:h-[500px] relative overflow-hidden mx-4">
                 <Image 
                   src={eirArtworks[currentEirSlide].image} 
                   alt={eirArtworks[currentEirSlide].title} 
                   fill
                   className={`object-contain transition-opacity duration-300 ease-in-out ${
                     isTransitioningEir ? 'opacity-0' : 'opacity-100'
                   }`}
                 />
              </div>

              {/* Flecha derecha */}
              <button 
                onClick={nextEirSlide}
                className="bg-white hover:bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-md transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Información de la obra */}
            <div className="text-center mb-4 sm:mb-6">
              <div className={`flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center transition-opacity duration-300 ease-in-out ${
                isTransitioningEir ? 'opacity-0' : 'opacity-100'
              }`}>
                <p className="text-xs sm:text-sm text-brand-400 font-medium">{eirArtworks[currentEirSlide].title}</p>
                <p className="hidden sm:inline text-sm text-brand-400">•</p>
                <p className="text-brand-400 text-xs sm:text-sm">{eirArtworks[currentEirSlide].description}</p>
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center">
              <div className="flex space-x-2">
                {eirArtworks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToEirSlide(index)}
                    className={`w-2 h-2 sm:w-1 sm:h-1 rounded-full transition-colors duration-300 ${
                      index === currentEirSlide ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel de Shygi */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-16">
          
          <div className="relative bg-gray-50 shadow-lg shadow-brand-400 p-4 sm:p-6 md:p-8">
            {/* Imagen principal con controles en los bordes */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              {/* Flecha izquierda */}
              <button 
                onClick={prevShygiSlide}
                className="bg-white hover:bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-md transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Imagen */}
              <div className="w-full max-w-[250px] h-[250px] sm:max-w-[350px] sm:h-[350px] md:max-w-[500px] md:h-[500px] relative overflow-hidden mx-4">
                 <Image 
                   src={shygiArtworks[currentShygiSlide].image} 
                   alt={shygiArtworks[currentShygiSlide].title} 
                   fill
                   className={`object-contain transition-opacity duration-300 ease-in-out ${
                     isTransitioningShygi ? 'opacity-0' : 'opacity-100'
                   }`}
                 />
              </div>

              {/* Flecha derecha */}
              <button 
                onClick={nextShygiSlide}
                className="bg-white hover:bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-md transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Información de la obra */}
            <div className="text-center mb-4 sm:mb-6">
              <div className={`flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center transition-opacity duration-300 ease-in-out ${
                isTransitioningShygi ? 'opacity-0' : 'opacity-100'
              }`}>
                <p className="text-xs sm:text-sm text-brand-400 font-medium">{shygiArtworks[currentShygiSlide].title}</p>
                <p className="hidden sm:inline text-sm text-brand-400">•</p>
                <p className="text-brand-400 text-xs sm:text-sm">{shygiArtworks[currentShygiSlide].description}</p>
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center">
              <div className="flex space-x-2">
                {shygiArtworks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToShygiSlide(index)}
                    className={`w-2 h-2 sm:w-1 sm:h-1 rounded-full transition-colors duration-300 ${
                      index === currentShygiSlide ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
