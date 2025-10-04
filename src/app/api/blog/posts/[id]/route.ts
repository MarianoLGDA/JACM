import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getPostById, updatePost, deletePost } from '@/lib/blog-supabase'

// GET - Obtener un post por ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post = await getPostById(params.id)

    if (!post) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      )
    }

    // Si el post no está publicado, requiere autenticación
    if (!post.published) {
      const session = await getServerSession(authOptions)
      if (!session) {
        return NextResponse.json(
          { error: 'Post no encontrado' },
          { status: 404 }
        )
      }
    }

    return NextResponse.json({ post })
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      { error: 'Error al obtener el post' },
      { status: 500 }
    )
  }
}

// PUT - Actualizar un post (requiere autenticación)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json(
      { error: 'No autorizado' },
      { status: 401 }
    )
  }

  try {
    const body = await request.json()
    const { title, content, excerpt, published, tags } = body

    const updatedPost = await updatePost(params.id, {
      title,
      content,
      excerpt,
      published,
      tags
    })

    if (!updatedPost) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json({ post: updatedPost })
  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json(
      { error: 'Error al actualizar el post' },
      { status: 500 }
    )
  }
}

// DELETE - Eliminar un post (requiere autenticación)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json(
      { error: 'No autorizado' },
      { status: 401 }
    )
  }

  try {
    const deleted = await deletePost(params.id)

    if (!deleted) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'Post eliminado correctamente' })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      { error: 'Error al eliminar el post' },
      { status: 500 }
    )
  }
}

