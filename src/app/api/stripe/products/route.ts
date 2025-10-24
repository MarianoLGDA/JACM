import { NextResponse } from 'next/server'
import { listProducts, listPrices } from '@/lib/stripe'

export async function GET() {
  try {
    const products = await listProducts()
    
    // Para cada producto, obtener sus precios
    const productsWithPrices = await Promise.all(
      products.data.map(async (product) => {
        try {
          const prices = await listPrices(product.id)
          return {
            ...product,
            price: prices.data[0] // Tomar el primer precio activo
          }
        } catch (error) {
          console.error(`Error fetching prices for product ${product.id}:`, error)
          return product
        }
      })
    )
    
    return NextResponse.json({ data: productsWithPrices })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Error fetching products' },
      { status: 500 }
    )
  }
}
