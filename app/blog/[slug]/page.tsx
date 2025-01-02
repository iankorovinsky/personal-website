import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug } from '@/lib/mdx'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { meta, content } = await getPostBySlug(params.slug)

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <article className="prose prose-invert mx-auto">
        <h1 className="text-4xl font-bold tracking-wide uppercase mb-2 font-[var(--font-primary)]">
          {meta.title}
        </h1>
        <p className="text-zinc-400 text-lg mb-8 font-[var(--font-secondary)]">
          {meta.subtitle}
        </p>
        <div className="text-zinc-400 text-sm mb-8 font-[var(--font-secondary)]">
          {new Date(meta.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        <div className="mdx-content">
          <MDXRemote source={content} />
        </div>
      </article>
    </div>
  )
} 