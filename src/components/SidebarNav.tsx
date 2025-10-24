'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  // Auto-abrir galería si estamos en una página de galería
  const isInGallery = pathname.startsWith('/galeria')
  const [isGalleryOpen, setIsGalleryOpen] = useState(isInGallery)

  // Sincronizar el estado cuando cambie la ruta
  useEffect(() => {
    setIsGalleryOpen(isInGallery)
  }, [isInGallery])

  const navigation = [
    { name: 'Cartas', href: '/blog' },
    { name: 'Sobre mí', href: '/about' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Shop', href: '/tienda' },
  ]

  const galleryItems = [
    { name: '2024', href: '/galeria/2024' },
    { name: '2025', href: '/galeria/2025' },
    { name: 'Dibujos', href: '/galeria/dibujos' },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <div className={`lg:hidden bg-transparent fixed top-4 z-50 transition-all duration-300 ${isOpen ? 'left-72' : 'left-4'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-transparent p-3  shadow-lg  "
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <nav className={`
        fixed inset-y-0 left-0 z-40 w-64 border-r bg-white lg:bg-transparent border-brand-400 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center p-4 sm:p-6 border-white/30 border-brand-400">
            <Link 
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-2xl sm:text-2xl font-light transition-colors duration-200 ${
                pathname === '/' ? 'text-gray-500 font-medium' : 'text-gray-400 hover:text-gray-500'
              }`}
            >
              JC .
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-4 sm:px-6 py-6 sm:py-8 overflow-y-auto">
            <ul className="space-y-4 sm:space-y-6">
              {/* Menú desplegable de Galería */}
              <li>
                <button
                  onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                  className={`
                    flex items-center justify-between w-full text-xl sm:text-xl transition-colors duration-200 py-1
                    ${galleryItems.some(item => pathname === item.href)
                      ? 'text-brand-400 font-medium' 
                      : 'text-brand-400 hover:text-brand-400'
                    }
                  `}
                >
                  <span>Galería</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isGalleryOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Submenú de galería */}
                <div className={`mt-2 ml-3 sm:ml-4 space-y-2 sm:space-y-3 transition-all duration-200 ${isGalleryOpen ? 'block' : 'hidden'}`}>
                  {galleryItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        block text-xl sm:text-xl transition-colors duration-200 py-1
                        ${pathname === item.href 
                          ? 'text-brand-400 font-medium' 
                          : 'text-brand-400 hover:text-brand-400'
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </li>
              
              {/* Navegación principal */}
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block text-xl sm:text-xl transition-colors duration-200 py-1
                      ${pathname === item.href 
                        ? 'text-gray-500 font-medium' 
                        : 'text-gray-400 hover:text-gray-500'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-6 border-white/30">

          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
