import React from "react";  
import Image from "next/image";
export default function AboutPage() {
  return (
    <>
    <div className="fixed inset-0 bg-white -z-10"></div>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 py-10">
        Sobre mí
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-1">
          <p className="text-gray-900 text-sm  mb-6 py-2 max-w-none lg:max-w-[500px]">
          José Antonio Corona Mañón (México, 2000) estudió los métodos de la pintura antigua con el pintor Antonio Mañón en 2020. Es egresado de la Licenciatura en Arquitectura por el Instituto Tecnológico y de Estudios Superiores de Monterrey y actualmente reside en Madrid.
          </p>
          <p className="text-gray-900 text-sm mb-6 py-2 max-w-none lg:max-w-[500px]">
          Su práctica artística se nutre de un interés profundo por el autoconocimiento y la reflexión sobre la manera en que los seres humanos habitan consigo mismos y con los demás. A través de la pintura al óleo, disciplina que cultiva como un espacio de estudio y evolución constante, busca rescatar y renovar la tradición pictórica clásica para proponer nuevas formas de relación y conexión.
          </p>
          <p className="text-gray-900 text-sm mb-6 py-2 max-w-none lg:max-w-[500px]">
          Su obra plantea ambientes de contemplación que invitan al espectador a entrar en contacto con su interioridad, conjugando elementos de la psicología, la filosofía y la historia del arte. Desde esta perspectiva multidisciplinaria, su trabajo reivindica la belleza como necesidad cultural y humana, y explora la capacidad del arte para iluminar tanto los rincones ocultos de la individualidad como las resonancias compartidas de la experiencia colectiva.
          </p>
          <p className="text-gray-900 text-sm py-2 max-w-none lg:max-w-[500px]">
          Entre sus influencias se encuentran reflexiones filosóficas y literarias que giran en torno a la libertad, el destino y el autodescubrimiento. Su pensamiento se ha nutrido del Gran Inquisidor de Fiódor Dostoievski, de la búsqueda espiritual de Siddhartha y la figura de Abraxas en Demian de Hermann Hesse, junto con su práctica de meditación y el estudio de filosofías orientales y védicas. Estas fuentes alimentan una visión existencial y simbólica que se entreteje en su exploración pictórica.
          </p>
          <p className="text-gray-900 text-sm py-2 max-w-none lg:max-w-[500px]">
          Ha participado en exposiciones como Memorias Ocultas: Visiones de Humanidad en Casa Versalles (2024) y en el Museo del Barro (2025), y en 2025 realizó una residencia en la Odd Nerdrum School (Noruega). Actualmente desarrolla el proyecto expositivo Entre el espíritu y la materia (2026). 
          </p>
        </div>
        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start shadow-lg shadow-brand-400">
          <Image 
            src="/IMG_2682.jpg" 
            alt="José Antonio Corona Mañón" 
            width={400} 
            height={400} 
            className=" w-full max-w-sm lg:max-w-none lg:w-[400px] h-auto" 
          />
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 py-10">  
        Exhibiciones
      </h1>
      <div className="space-y-6">
        <p className="text-gray-900 font-bold">
        - Memorias ocultas: Visiones de humanidad (2025) . Museo del Barro, Metepec, México
        </p>
        <p className="text-gray-900 font-bold">
        - Memorias ocultas: Visiones de humanidad (2024) . Casa Versalles, Ciudad de México, México
        </p>
        <p className="text-gray-900 font-bold">
        - Muestra colectiva (2023) . Galería Fundadores, Toluca, México
        </p>
      </div>
    </div>
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center lg:justify-start">
        <Image 
          src="/IMG_2683.jpg" 
          alt="Memorias ocultas: Visiones de humanidad" 
          width={500} 
          height={500} 
          className="w-full max-w-md lg:max-w-none lg:w-[500px] h-auto"
        />
      </div>
    </div>
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center lg:justify-end">
        <Image 
          src="/IMG_2686.jpg" 
          alt="Memorias ocultas: Visiones de humanidad" 
          width={500} 
          height={500} 
          className="w-full max-w-md lg:max-w-none lg:w-[500px] h-auto "
        />
      </div>
    </div>
   
    </>

  );
}
