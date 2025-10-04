import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getAllPosts, getPublishedPosts, createPost } from '@/lib/blog-supabase'
import { CreatePostData } from '@/types/blog'

// GET - Obtener todos los posts (públicos) o todos (si está autenticado)
export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions)
  const { searchParams } = new URL(request.url)
  const includeUnpublished = searchParams.get('includeUnpublished') === 'true'

  try {
    let posts
    
    if (session && includeUnpublished) {
      // Usuario autenticado puede ver todos los posts
      posts = await getAllPosts()
    } else {
      // Usuarios no autenticados solo ven posts publicados
      posts = await getPublishedPosts()
    }

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Error al obtener los posts' },
      { status: 500 }
    )
  }
}

// POST - Crear nuevo post (requiere autenticación)
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json(
      { error: 'No autorizado' },
      { status: 401 }
    )
  }

  try {
    const body = await request.json()
    const { title, content, excerpt, published, tags }: CreatePostData = body

    console.log('📝 Creating post with data:', { title, published, tags })

    // Validación básica
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Título y contenido son requeridos' },
        { status: 400 }
      )
    }

    const newPost = await createPost({
      title,
      content,
      excerpt: excerpt || content.substring(0, 150) + '...',
      published: published || false,
      tags: tags || []
    })

    return NextResponse.json({ post: newPost }, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Error al crear el post' },
      { status: 500 }
    )
  }
}

