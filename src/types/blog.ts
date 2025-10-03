export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  createdAt: string
  updatedAt: string
  published: boolean
  tags: string[]
}

export interface CreatePostData {
  title: string
  content: string
  excerpt: string
  published: boolean
  tags: string[]
}

