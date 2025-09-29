import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog-posts'
import { personalInfo } from '@/data/personal-info'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - ${personalInfo.name}`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post?.id && p.tags.some(tag => post?.tags.includes(tag)))
    .slice(0, 3)

  if (!post) {
    notFound()
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-between text-gray-600 mb-8">
            <div className="flex items-center space-x-4">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {/* Cover Image */}
          <div className="relative h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          {/* This is where you would render the actual blog content */}
          <p className="lead">{post.excerpt}</p>
          <p>
            This is where the full blog post content would go. In a real implementation, 
            you might use MDX or a headless CMS to store and render the full content.
          </p>
          <p>
            You could use libraries like @next/mdx, gray-matter, or remark to process 
            markdown content and render it as HTML.
          </p>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-white rounded-lg border hover:shadow-md transition-shadow p-4"
                >
                  <div className="relative h-32 mb-3 rounded overflow-hidden">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600">{relatedPost.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}