# 🚀 Configuración de Supabase para el Blog

## Paso 1: Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta o inicia sesión
3. Crea un nuevo proyecto
4. Anota la URL del proyecto y la clave anónima

## Paso 2: Crear la Tabla de Blog Posts

Ejecuta este SQL en el editor de Supabase:

```sql
-- Crear la tabla blog_posts
CREATE TABLE blog_posts (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  published BOOLEAN DEFAULT false,
  tags TEXT[] DEFAULT '{}',
  author TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para mejor rendimiento
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_created_at ON blog_posts(created_at DESC);

-- Habilitar Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Política para lectura pública de posts publicados
CREATE POLICY "Posts publicados son visibles para todos" ON blog_posts
  FOR SELECT USING (published = true);

-- Política para que usuarios autenticados puedan ver todos los posts
CREATE POLICY "Usuarios autenticados pueden ver todos los posts" ON blog_posts
  FOR SELECT USING (auth.role() = 'authenticated');

-- Política para que usuarios autenticados puedan crear posts
CREATE POLICY "Usuarios autenticados pueden crear posts" ON blog_posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Política para que usuarios autenticados puedan actualizar posts
CREATE POLICY "Usuarios autenticados pueden actualizar posts" ON blog_posts
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Política para que usuarios autenticados puedan eliminar posts
CREATE POLICY "Usuarios autenticados pueden eliminar posts" ON blog_posts
  FOR DELETE USING (auth.role() = 'authenticated');
```

## Paso 3: Configurar Variables de Entorno

Crea un archivo `.env.local` con:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase

# NextAuth Configuration (mantén las existentes)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu_nextauth_secret

# Google OAuth (si lo usas)
GOOGLE_CLIENT_ID=tu_google_client_id
GOOGLE_CLIENT_SECRET=tu_google_client_secret
```

## Paso 4: Configurar en Vercel

1. Ve a tu proyecto en Vercel
2. Configuración → Environment Variables
3. Añade las variables de Supabase:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Paso 5: Migrar Datos Existentes (Opcional)

Si tienes posts en el archivo JSON, puedes migrarlos manualmente:

1. Copia el contenido de `data/blog-posts.json`
2. Usa el panel de Supabase para insertar los datos
3. O crea un script de migración temporal

## ✅ Verificación

Una vez configurado:

1. Reinicia tu aplicación local
2. Prueba crear, editar y eliminar posts
3. Verifica que funcione en Vercel después del deploy

## 🔧 Troubleshooting

- **Error de conexión**: Verifica las URLs y claves
- **Error de permisos**: Revisa las políticas RLS
- **Error en producción**: Verifica las variables de entorno en Vercel
