// import Image from 'next/image'
// import Link from 'next/link'
// import { notFound } from 'next/navigation'
// import { blogPosts } from '@/data/blog-posts'
// import { personalInfo } from '@/data/personal-info'

// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }))
// }

// export async function generateMetadata({ params }) {
//   const post = blogPosts.find(p => p.slug === params.slug)
  
//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     }
//   }

//   return {
//     title: `${post.title} - ${personalInfo.name}`,
//     description: post.excerpt,
//   }
// }

// export default function BlogPostPage({ params }) {
//   const post = blogPosts.find(p => p.slug === params.slug)
//   const relatedPosts = blogPosts
//     .filter(p => p.id !== post?.id && p.tags.some(tag => post?.tags.includes(tag)))
//     .slice(0, 3)

//   if (!post) {
//     notFound()
//   }

//   return (
//     <div className="py-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Back Link */}
//         <Link 
//           href="/blog" 
//           className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
//         >
//           ← Back to Blog
//         </Link>

//         {/* Article Header */}
//         <header className="mb-12">
//           <div className="mb-4">
//             <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded">
//               {post.category}
//             </span>
//           </div>
//           <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             {post.title}
//           </h1>
//           <div className="flex items-center justify-between text-gray-600 mb-8">
//             <div className="flex items-center space-x-4">
//               <span>By {post.author}</span>
//               <span>•</span>
//               <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
//               <span>•</span>
//               <span>{post.readTime}</span>
//             </div>
//           </div>
          
//           {/* Cover Image */}
//           <div className="relative h-96 rounded-lg overflow-hidden mb-8">
//             <Image
//               src={post.coverImage}
//               alt={post.title}
//               fill
//               className="object-cover"
//             />
//           </div>
          
//           {/* Tags */}
//           <div className="flex flex-wrap gap-2">
//             {post.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
//               >
//                 #{tag}
//               </span>
//             ))}
//           </div>
//         </header>

//         {/* Article Content */}
//         <article className="prose prose-lg max-w-none mb-12">
//           {/* This is where you would render the actual blog content */}
//           <p className="lead">{post.excerpt}</p>
//           <p>
//             This is where the full blog post content would go. In a real implementation, 
//             you might use MDX or a headless CMS to store and render the full content.
//           </p>
//           <p>
//             You could use libraries like @next/mdx, gray-matter, or remark to process 
//             markdown content and render it as HTML.
//           </p>
//         </article>

//         {/* Related Posts */}
//         {relatedPosts.length > 0 && (
//           <div className="border-t pt-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {relatedPosts.map((relatedPost) => (
//                 <Link
//                   key={relatedPost.id}
//                   href={`/blog/${relatedPost.slug}`}
//                   className="group block bg-white rounded-lg border hover:shadow-md transition-shadow p-4"
//                 >
//                   <div className="relative h-32 mb-3 rounded overflow-hidden">
//                     <Image
//                       src={relatedPost.coverImage}
//                       alt={relatedPost.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform"
//                     />
//                   </div>
//                   <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
//                     {relatedPost.title}
//                   </h3>
//                   <p className="text-sm text-gray-600">{relatedPost.readTime}</p>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8 group"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-blue-300 bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30">
                {post.category}
              </span>
              {post.featured && (
                <span className="text-sm font-semibold text-purple-300 bg-purple-500/30 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/30">
                  ⭐ Featured
                </span>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{post.author}</div>
                  <div className="text-sm text-blue-300">Author</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Cover Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-16">
        <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-gray-200">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-blue max-w-none mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <p className="text-lg text-gray-700 leading-relaxed m-0">
              {post.excerpt}
            </p>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              This is where the full blog post content would go. In a real implementation, 
              you might use MDX or a headless CMS to store and render the full content.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Introduction</h2>
            <p>
              You could use libraries like @next/mdx, gray-matter, or remark to process 
              markdown content and render it as HTML with proper styling and formatting.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quick Tip
              </h3>
              <p className="text-gray-700 m-0">
                This callout box highlights important information or tips for readers.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Modern web development best practices and patterns</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Performance optimization techniques</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Scalable architecture considerations</span>
              </li>
            </ul>
          </div>
        </article>

        {/* Share Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16 border border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enjoyed this article?</h3>
            <p className="text-gray-600 mb-6">Share it with your network</p>
            <div className="flex items-center justify-center gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Share on Twitter
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors border border-gray-200 shadow-lg hover:shadow-xl">
                Copy Link
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-200 pt-16">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900">Related Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-blue-600 font-semibold mb-2 flex items-center justify-between">
                      <span className="bg-blue-50 px-3 py-1 rounded-full">{relatedPost.category}</span>
                      <span className="text-gray-500">{relatedPost.readTime}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2 leading-tight">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          <div className="relative">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to get the latest articles and insights delivered to your inbox
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl text-gray-900 placeholder:text-gray-500"
              />
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl hover:scale-105 transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}