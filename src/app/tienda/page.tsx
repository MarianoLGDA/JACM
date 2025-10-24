'use client'
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"

export default function TiendaPage() {
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, productId: number) => {
        if (hoveredProduct === productId) {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 100
            const y = ((e.clientY - rect.top) / rect.height) * 100
            setMousePosition({ x, y })
        }
    }
    return (
        <div className="min-h-screen w-full py-4 sm:py-8 px-3 sm:px-4 bg-white">
            <div className="relative grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto p-4 sm:p-6 md:p-10">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col">
                        <div className="flex justify-center lg:justify-start">
                            <div 
                                className="relative overflow-hidden cursor-zoom-in"
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                                onMouseMove={(e) => handleMouseMove(e, product.id)}
                            >
                                <Image 
                                    src={product.image} 
                                    alt={product.name} 
                                    width={500} 
                                    height={250}
                                    className={`w-[500px] h-[250px] object-cover transition-transform duration-300 ${
                                        hoveredProduct === product.id ? 'scale-150' : 'scale-100'
                                    }`}
                                    style={{
                                        transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                                    }}
                                />
                                {hoveredProduct === product.id && (
                                    <div className="absolute inset-0  flex items-center justify-center">
                           
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center py-4">
                            <p className="text-lg text-gray-500 text-center">{product.name}</p>
                            <p className="text-lg text-gray-500 text-center">{product.price}</p>
                            <Link href={`/tienda/ver/${product.id}`}>
                                <button className="bg-transparent border border-black hover:bg-red-800 hover:text-white transition-colors duration-300 text-black px-4 py-2 mt-2">Comprar</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}