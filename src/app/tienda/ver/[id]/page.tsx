"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"


export default function TiendaVerPage({ params }: { params: { id: string } }) {
    const { id } = params
    const [quantity, setQuantity] = useState(1)
    const [isZoomed, setIsZoomed] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const product = products[Number(id) - 1]

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isZoomed) {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 100
            const y = ((e.clientY - rect.top) / rect.height) * 100
            setMousePosition({ x, y })
        }
    }
    return (
        <div className="min-h-screen w-full py-4 sm:py-8 px-3 sm:px-4 bg-white">
            <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Imagen del lado izquierdo */}
                        <div className="flex justify-center lg:justify-start">
                            <div 
                                className="relative overflow-hidden shadow-2xl cursor-zoom-in"
                                onMouseEnter={() => setIsZoomed(true)}
                                onMouseLeave={() => setIsZoomed(false)}
                                onMouseMove={handleMouseMove}
                            >
                                <Image 
                                    src={product.image} 
                                    alt={product.name} 
                                    width={600} 
                                    height={600}
                                    className={`transition-transform duration-300 ${
                                        isZoomed ? 'scale-150' : 'scale-100'
                                    }`}
                                    style={{
                                        transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                                    }}
                                />
                                {isZoomed && (
                                    <div className="absolute inset-0  flex items-center justify-center">
                           
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Información del producto del lado derecho */}
                        <div className="flex flex-col items-start text-left space-y-4 justify-start">
                            <div className="text-left">
                                <p className="text-3xl font-bold text-black text-left">{product.name}</p>
                                <p className="text-lg text-gray-600 py-2 text-left">{product.description}</p>
                                <p className="text-lg text-gray-600 py-2 text-left">Dimensiones: {product.size}</p>
                                {/* <p className="text-lg text-gray-600 py-2">Obras disponibles: {product.quantity}</p>
                                <p className="text-lg text-gray-600 py-2">{product.firma}</p> */}
                                
                                {/* Selector de cantidad */}
                                <div className="py-2">
                                    <label className="block text-lg text-gray-600 mb-2">Cantidad:</label>
                                    <div className="flex items-center space-x-3">
                                        <button 
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
                                            disabled={quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-semibold min-w-[2rem] text-center text-black">{quantity}</span>
                                        <button 
                                            onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))}
                                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
                                            disabled={quantity >= product.quantity}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <p className="text-2xl font-semibold text-gray-800 py-2">
                                    Precio: {product.price}
                                </p>
                                
                                {/* <p className="text-2xl font-semibold text-gray-800 py-2">
                                    Total: ${(parseFloat(product.price.replace(/[^0-9.]/g, '')) * quantity).toFixed(2)} MXN
                                </p> */}
                                
                                <div className="flex space-x-3 mt-4">
                                    <Link href={`/tienda/comprar/${product.id}?quantity=${quantity}`}>
                                        <button className="bg-transparent border border-black hover:bg-red-800 hover:text-white transition-colors duration-300 text-black px-4 py-2">
                                            Comprar ahora
                                        </button>
                                    </Link>

                                </div>
                      
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <h2 className="text-2xl font-bold text-black pt-10 text-left lg:text-left justify-start lg:pl-20 ">Detalles de la obra</h2>
                    <p className="text-lg text-gray-600 pt-10 text-left lg:text-left justify-start lg:pl-20">{product.firma}</p>
                    <p className="text-lg text-gray-600 pt-10 text-left lg:text-left justify-start lg:pl-20">{product.impresion}</p>
                    <p className="text-lg text-gray-600 pt-10 text-left lg:text-left justify-start lg:pl-20">{product.autenticidad}</p>
                    <p className="text-lg text-gray-600 pt-10 text-left lg:text-left justify-start lg:pl-20">{product.envio}</p>
                    <p className="text-lg text-gray-600 pt-10 text-left lg:text-left justify-start lg:pl-20">{product.paquete}</p>
                    <p className="text-lg text-gray-600 pt-10 text-left lg:text-left justify-start lg:pl-20">{product.costo_envio}</p>
                </div>
            </div>
        </div>
    )
}