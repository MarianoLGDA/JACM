import { supabase } from './supabase'
import { BlogPost, CreatePostData } from '@/types/blog'

// Generar ID único
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Obtener todos los posts
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching posts:', error)
      return []
    }

    return data.map(post => ({
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      published: post.published,
      tags: post.tags || [],
      author: post.author,
      createdAt: post.created_at,
      updatedAt: post.updated_at
    }))
  } catch (error) {
    console.error('Error in getAllPosts:', error)
    return []
  }
}

// Obtener posts publicados
export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    console.log('🔍 Fetching published posts...')
    
    // Primero, obtener TODOS los posts para debug
    const { data: allData, error: allError } = await supabase
      .from('blog_posts')
      .select('*')
    
    console.log('🗂️ ALL posts in database:', allData?.length || 0)
    console.log('🗂️ ALL posts data:', allData)
    
    // Temporalmente, devolver todos los posts para probar
    console.log('🔧 TEMPORARY: Returning all posts to test RLS issue')
    const data = allData?.filter(post => post.published === true) || []
    const error = allError
    
    console.log('🔧 Filtered published posts:', data.length)

    if (error) {
      console.error('❌ Error fetching published posts:', error)
      return []
    }

    console.log('📊 Published posts found:', data?.length || 0)
    console.log('📝 Published posts data:', data)

    return data.map(post => ({
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      published: post.published,
      tags: post.tags || [],
      author: post.author,
      createdAt: post.created_at,
      updatedAt: post.updated_at
    }))
  } catch (error) {
    console.error('❌ Error in getPublishedPosts:', error)
    return []
  }
}

// Obtener un post por ID
export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single()

    if (error || !data) {
      return null
    }

    return {
      id: data.id,
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      published: data.published,
      tags: data.tags || [],
      author: data.author,
      createdAt: data.created_at,
      updatedAt: data.updated_at
    }
  } catch (error) {
    console.error('Error in getPostById:', error)
    return null
  }
}

// Crear un nuevo post
export async function createPost(data: CreatePostData): Promise<BlogPost | null> {
  try {
    const newPost = {
      id: generateId(),
      title: data.title,
      content: data.content,
      excerpt: data.excerpt || data.content.substring(0, 200) + '...',
      published: data.published || false,
      tags: data.tags || [],
      author: 'José Antonio Corona Mañón',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    const { data: insertedData, error } = await supabase
      .from('blog_posts')
      .insert([newPost])
      .select()
      .single()

    if (error) {
      console.error('Error creating post:', error)
      return null
    }

    return {
      id: insertedData.id,
      title: insertedData.title,
      content: insertedData.content,
      excerpt: insertedData.excerpt,
      published: insertedData.published,
      tags: insertedData.tags || [],
      author: insertedData.author,
      createdAt: insertedData.created_at,
      updatedAt: insertedData.updated_at
    }
  } catch (error) {
    console.error('Error in createPost:', error)
    return null
  }
}

// Actualizar un post
export async function updatePost(id: string, data: Partial<CreatePostData>): Promise<BlogPost | null> {
  try {
    const updateData = {
      ...data,
      updated_at: new Date().toISOString()
    }

    const { data: updatedData, error } = await supabase
      .from('blog_posts')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error || !updatedData) {
      console.error('Error updating post:', error)
      return null
    }

    return {
      id: updatedData.id,
      title: updatedData.title,
      content: updatedData.content,
      excerpt: updatedData.excerpt,
      published: updatedData.published,
      tags: updatedData.tags || [],
      author: updatedData.author,
      createdAt: updatedData.created_at,
      updatedAt: updatedData.updated_at
    }
  } catch (error) {
    console.error('Error in updatePost:', error)
    return null
  }
}

// Eliminar un post
export async function deletePost(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting post:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Error in deletePost:', error)
    return false
  }
}
