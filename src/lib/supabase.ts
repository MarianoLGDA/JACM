import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para la base de datos
export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string
          published: boolean
          tags: string[]
          author: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt: string
          published?: boolean
          tags?: string[]
          author?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string
          published?: boolean
          tags?: string[]
          author?: string
          created_at?: string
          updated_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          nombre: string
          email: string
          asunto: string | null
          mensaje: string
          leido: boolean
          created_at: string
        }
        Insert: {
          id?: string
          nombre: string
          email: string
          asunto?: string | null
          mensaje: string
          leido?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          nombre?: string
          email?: string
          asunto?: string | null
          mensaje?: string
          leido?: boolean
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          product_id: number
          product_name: string
          product_price: number
          quantity: number
          customer_nombre: string
          customer_apellido: string
          customer_email: string
          customer_telefono: string
          direccion: string
          ciudad: string
          codigo_postal: string
          pais: string
          metodo_envio: string
          costo_envio: number
          subtotal: number
          total: number
          status: string
          stripe_session_id: string | null
          stripe_payment_intent_id: string | null
          comentarios: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: number
          product_name: string
          product_price: number
          quantity?: number
          customer_nombre: string
          customer_apellido: string
          customer_email: string
          customer_telefono: string
          direccion: string
          ciudad: string
          codigo_postal: string
          pais?: string
          metodo_envio?: string
          costo_envio: number
          subtotal: number
          total: number
          status?: string
          stripe_session_id?: string | null
          stripe_payment_intent_id?: string | null
          comentarios?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: number
          product_name?: string
          product_price?: number
          quantity?: number
          customer_nombre?: string
          customer_apellido?: string
          customer_email?: string
          customer_telefono?: string
          direccion?: string
          ciudad?: string
          codigo_postal?: string
          pais?: string
          metodo_envio?: string
          costo_envio?: number
          subtotal?: number
          total?: number
          status?: string
          stripe_session_id?: string | null
          stripe_payment_intent_id?: string | null
          comentarios?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
