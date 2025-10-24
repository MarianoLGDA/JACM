import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { products } from '@/data/products';

export async function POST(request: NextRequest) {
  try {
    const { productId, quantity, customerInfo } = await request.json();

    // Buscar el producto
    const product = products.find(p => p.id === productId);
    if (!product) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
    }

    // Extraer el precio numérico del string
    const priceMatch = product.price.match(/\$?([0-9,]+\.?[0-9]*)/);
    if (!priceMatch) {
      return NextResponse.json({ error: 'Precio inválido' }, { status: 400 });
    }

    const unitAmount = Math.round(parseFloat(priceMatch[1].replace(',', '')) * 100); // Convertir a centavos

    // Crear sesión de checkout de Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'mxn',
            product_data: {
              name: product.name,
              description: product.description,
              images: [`${process.env.NEXT_PUBLIC_APP_URL}${product.image}`],
            },
            unit_amount: unitAmount,
          },
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/tienda/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/tienda/comprar/${productId}`,
      customer_email: customerInfo.email,
      shipping_address_collection: {
        allowed_countries: ['MX', 'US', 'CA', 'ES'],
      },
      metadata: {
        productId: productId.toString(),
        quantity: quantity.toString(),
        customerName: `${customerInfo.nombre} ${customerInfo.apellido}`,
        customerPhone: customerInfo.telefono,
        shippingMethod: customerInfo.metodoEnvio,
        comments: customerInfo.comentarios || '',
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 15000, // $150 MXN en centavos
              currency: 'mxn',
            },
            display_name: 'Envío estándar',
            delivery_estimate: {
              minimum: {
                unit: 'week',
                value: 3,
              },
              maximum: {
                unit: 'week',
                value: 4,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 20000, // $200 MXN en centavos
              currency: 'mxn',
            },
            display_name: 'Envío express',
            delivery_estimate: {
              minimum: {
                unit: 'week',
                value: 1,
              },
              maximum: {
                unit: 'week',
                value: 2,
              },
            },
          },
        },
      ],
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
