'use client'
import React from 'react';
import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen w-full py-4 sm:py-8 px-3 sm:px-4 bg-gray-50">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Compra cancelada</h1>
            <p className="text-gray-600">
              Tu compra ha sido cancelada. No se ha realizado ningún cargo.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">¿Necesitas ayuda?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Si tuviste problemas con el pago o necesitas asistencia, no dudes en contactarnos.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Email:</strong> contacto@jacm.com</p>
                <p><strong>Teléfono:</strong> +52 55 1234 5678</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/tienda" 
                className="flex-1 bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 text-center"
              >
                Volver a la tienda
              </Link>
              <Link 
                href="/contacto" 
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200 text-center"
              >
                Contactar soporte
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
