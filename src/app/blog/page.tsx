import { getPublishedPosts } from '@/lib/blog-storage'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getPublishedPosts()

  return (
    <>
      {/* Full Background */}
      <div className="fixed inset-0 bg-white -z-10"></div>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Blog Artístico
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Reflexiones, técnicas y experiencias en el mundo del arte y la pintura
            </p>
          </div>

          {/* Posts */}
          {posts.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">
                  Próximamente...
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Estoy preparando contenido interesante para compartir contigo.
                  ¡Vuelve pronto para leer mis primeras entradas!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 sm:space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0">
                        <span className="text-xs sm:text-sm text-gray-500">
                          {new Date(post.createdAt).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="hidden sm:inline text-gray-300">•</span>
                        <span className="text-xs sm:text-sm text-gray-500">
                          {post.author}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 hover:text-amber-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
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

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm sm:text-base"
                    >
                      Leer más
                      <svg
                        className="ml-2 w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Admin Link */}
          <div className="mt-12 text-center">
     
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
