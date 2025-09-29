import Image from 'next/image'
import Link from 'next/link'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { blogPosts } from '@/data/blog-posts'
import { personalInfo } from '@/data/personal-info'

export const metadata = {
  title: `Blog - ${personalInfo.name}`,
  description: 'Articles and tutorials about web development',
}

function BlogCard({ post }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
        />
        {post.featured && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 text-xs rounded">
            Featured
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="text-xs text-gray-500">{post.readTime}</span>
        </div>
        <CardTitle>
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>By {post.author}</span>
          <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}