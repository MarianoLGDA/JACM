import { BlogPost, CreatePostData } from '@/types/blog'
import fs from 'fs'
import path from 'path'

const BLOG_DATA_FILE = path.join(process.cwd(), 'data', 'blog-posts.json')

// Asegurar que el directorio data existe
function ensureDataDirectory() {
  const dataDir = path.dirname(BLOG_DATA_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Leer todos los posts
export function getAllPosts(): BlogPost[] {
  ensureDataDirectory()
  
  if (!fs.existsSync(BLOG_DATA_FILE)) {
    return []
  }
  
  try {
    const data = fs.readFileSync(BLOG_DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

// Obtener posts publicados
export function getPublishedPosts(): BlogPost[] {
  return getAllPosts()
    .filter(post => post.published)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

// Obtener un post por ID
export function getPostById(id: string): BlogPost | null {
  const posts = getAllPosts()
  return posts.find(post => post.id === id) || null
}

// Crear un nuevo post
export function createPost(data: CreatePostData): BlogPost {
  const posts = getAllPosts()
  
  const newPost: BlogPost = {
    id: generateId(),
    ...data,
    author: 'José Antonio Corona Mañón',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  
  posts.push(newPost)
  savePosts(posts)
  
  return newPost
}

// Actualizar un post
export function updatePost(id: string, data: Partial<CreatePostData>): BlogPost | null {
  const posts = getAllPosts()
  const postIndex = posts.findIndex(post => post.id === id)
  
  if (postIndex === -1) {
    return null
  }
  
  posts[postIndex] = {
    ...posts[postIndex],
    ...data,
    updatedAt: new Date().toISOString()
  }
  
  savePosts(posts)
  return posts[postIndex]
}

// Eliminar un post
export function deletePost(id: string): boolean {
  const posts = getAllPosts()
  const filteredPosts = posts.filter(post => post.id !== id)
  
  if (filteredPosts.length === posts.length) {
    return false // Post no encontrado
  }
  
  savePosts(filteredPosts)
  return true
}

// Guardar posts en el archivo
function savePosts(posts: BlogPost[]) {
  ensureDataDirectory()
  
  try {
    fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(posts, null, 2))
  } catch (error) {
    console.error('Error saving blog posts:', error)
    throw new Error('Failed to save blog posts')
  }
}

// Generar ID único
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

