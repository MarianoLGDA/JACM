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
    }
  }
}
