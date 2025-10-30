import { NextRequest, NextResponse } from 'next/server';
import { retrieveCheckoutSession } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: NextRequest,
  { params }: { params: { sessionId: string } }
) {
  try {
    const session = await retrieveCheckoutSession(params.sessionId);

    // Si el pago está completado, registrar en tabla de confirmaciones
    const paymentStatus = session.payment_status;
    const orderId = (session.metadata as any)?.orderId as string | undefined;
    if (paymentStatus === 'paid' && orderId) {
      // Insertar/asegurar registro en la tabla 'orders_paid' con PK id = orderId
      const { error } = await supabase
        .from('orders_paid')
        .upsert({ id: orderId, status: 'pagado' }, { onConflict: 'id' });

      if (error) {
        console.error('Error inserting orders_paid:', error);
      }
    }
    
    return NextResponse.json(session);
  } catch (error) {
    console.error('Error retrieving session:', error);
    return NextResponse.json(
      { error: 'Error al recuperar la sesión' },
      { status: 500 }
    );
  }
}
