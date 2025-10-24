'use client'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { retrieveCheckoutSession } from '@/lib/stripe';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/stripe/session/${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setSession(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching session:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen w-full py-4 sm:py-8 px-3 sm:px-4 bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Verificando tu compra...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full py-4 sm:py-8 px-3 sm:px-4 bg-gray-50">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">¡Compra exitosa!</h1>
            <p className="text-gray-600">
              Gracias por tu compra. Hemos recibido tu pago y procesaremos tu pedido.
            </p>
          </div>

          {session && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
              <h3 className="font-semibold text-gray-800 mb-2">Detalles de la compra:</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p><strong>ID de sesión:</strong> {session.id}</p>
                <p><strong>Total pagado:</strong> ${(session.amount_total / 100).toFixed(2)} MXN</p>
                <p><strong>Estado:</strong> {session.payment_status}</p>
                {session.customer_details?.email && (
                  <p><strong>Email:</strong> {session.customer_details.email}</p>
                )}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">¿Qué sigue?</h3>
              <ul className="text-sm text-blue-700 space-y-1 text-left">
                <li>• Recibirás un email de confirmación con los detalles de tu compra</li>
                <li>• Procesaremos tu pedido en 1-2 días hábiles</li>
                <li>• Te enviaremos información de seguimiento cuando tu obra esté en camino</li>
                <li>• El tiempo de entrega es de 3-4 semanas (estándar) o 1-2 semanas (express)</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/tienda" 
                className="flex-1 bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 text-center"
              >
                Seguir comprando
              </Link>
              <Link 
                href="/" 
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200 text-center"
              >
                Ir al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
