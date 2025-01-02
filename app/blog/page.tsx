import BlogCard from "@/components/ui/blog-card";
import { getAllPosts } from "@/lib/mdx";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-wide uppercase mb-8 font-[var(--font-primary)]">
          Blog
        </h1>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <BlogCard 
              key={index}
              {...post}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 