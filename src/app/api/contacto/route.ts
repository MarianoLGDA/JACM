import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { z } from 'zod'

// Schema de validación para los mensajes de contacto
const contactMessageSchema = z.object({
  nombre: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre es demasiado largo'),
  email: z.string().email('Email inválido').max(255, 'El email es demasiado largo'),
  asunto: z.string().max(200, 'El asunto es demasiado largo').optional(),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(2000, 'El mensaje es demasiado largo')
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar los datos del formulario
    const validatedData = contactMessageSchema.parse(body)
    
    // Insertar el mensaje en Supabase
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          nombre: validatedData.nombre,
          email: validatedData.email,
          asunto: validatedData.asunto || null,
          mensaje: validatedData.mensaje,
          leido: false
        }
      ])
      .select()
      .single()

    if (error) {
      console.error('Error al guardar mensaje de contacto:', error)
      return NextResponse.json(
        { error: 'Error interno del servidor' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Mensaje enviado correctamente',
        id: data.id 
      },
      { status: 201 }
    )

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Datos inválidos',
          details: error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    console.error('Error inesperado:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// Endpoint para obtener mensajes (solo para administradores)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const unreadOnly = searchParams.get('unread') === 'true'
    
    const offset = (page - 1) * limit

    let query = supabase
      .from('contact_messages')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (unreadOnly) {
      query = query.eq('leido', false)
    }

    const { data, error, count } = await query

    if (error) {
      console.error('Error al obtener mensajes:', error)
      return NextResponse.json(
        { error: 'Error interno del servidor' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      messages: data,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit)
      }
    })

  } catch (error) {
    console.error('Error inesperado:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
