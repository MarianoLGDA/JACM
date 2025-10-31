"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Aquí puedes agregar la lógica para enviar el formulario
      // Por ahora simularemos el envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-white -z-10"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Contacto
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl">
            Si estás interesado en mi obra, tienes alguna consulta sobre comisiones, 
            o simplemente deseas ponerte en contacto, no dudes en escribirme.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Formulario de Contacto */}
          {/* <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Envíame un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">¡Mensaje enviado correctamente! Te responderé pronto.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
                </div>
              )}
            </form>
          </div> */}

          {/* Información de Contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Información de contacto
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-700">
                    <a 
                      href="mailto:joseantoniocoronamanon@gmail.com" 
                      className="hover:text-gray-900 transition-colors"
                    >
                      joseantoniocoronamanon@gmail.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Ubicación</h3>
                  <p className="text-gray-700">Madrid, España</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Redes sociales</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <a 
                        href="https://www.instagram.com/joseacoronam/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition-colors block"
                      >
                        Instagram: @joseacoronam
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <a 
                        href="https://x.com/joscoronam" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition-colors block"
                      >
                        X: @josecoronam
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Comisiones</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Acepto comisiones para retratos y obras personalizadas. 
                    Contacta conmigo para discutir tu proyecto, plazos y presupuesto.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Tiempo de respuesta</h3>
                  <p className="text-gray-700 text-sm">
                    Normalmente respondo en un plazo de 24-48 horas.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagen decorativa */}
            <div className="mt-8">
              <div className="relative">
                <Image 
                  src="/IMG_9898.jpg" 
                  alt="Obra de José Antonio Corona Mañón" 
                  width={400} 
                  height={500} 
                  className="w-full h-auto shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sección adicional sobre el proceso */}
      </div>
    </>
  );
}
