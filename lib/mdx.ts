import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_PATH = path.join(process.cwd(), 'app/content/blog')

interface BlogPost {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
  preview: string;
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(POSTS_PATH, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  return {
    meta: data,
    content,
    slug: realSlug,
  }
}

export async function getAllPosts() {
  const posts = fs.readdirSync(POSTS_PATH)
  const allPosts = posts
    .filter((fileName) => /\.mdx?$/.test(fileName))
    .map((fileName) => {
      const realSlug = fileName.replace(/\.mdx$/, '')
      const filePath = path.join(POSTS_PATH, fileName)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)

      return {
        ...(data as BlogPost),
        slug: realSlug,
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return allPosts
} 