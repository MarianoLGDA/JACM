import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Middleware adicional si es necesario
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Proteger rutas /admin/*
        if (req.nextUrl.pathname.startsWith('/admin')) {
          return !!token
        }
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/admin/:path*']
}

