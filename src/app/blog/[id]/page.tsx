import { getPostById } from '@/lib/blog-storage'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostById(params.id)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-4 sm:mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm sm:text-base"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver al blog
            </Link>
          </div>

          {/* Post Content */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8">
              {/* Header */}
              <header className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 space-y-1 sm:space-y-0">
                  <span>
                    {new Date(post.createdAt).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <span>{post.author}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  {post.title}
                </h1>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-amber-100 text-amber-800 text-xs sm:text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* Content */}
              <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
                <div
                  className="text-gray-700 leading-relaxed text-sm sm:text-base"
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {post.content}
                </div>
              </div>

              {/* Footer */}
              <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <div className="text-xs sm:text-sm text-gray-500">
                    Última actualización: {' '}
                    <span className="block sm:inline">
                      {new Date(post.updatedAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <Link
                    href="/blog"
                    className="text-amber-600 hover:text-amber-700 font-medium text-xs sm:text-sm self-start sm:self-auto"
                  >
                    Ver más posts →
                  </Link>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
