// import Image from 'next/image'
// import Link from 'next/link'
// import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
// import { blogPosts } from '@/data/blog-posts'
// import { personalInfo } from '@/data/personal-info'

// export const metadata = {
//   title: `Blog - ${personalInfo.name}`,
//   description: 'Articles and tutorials about web development',
// }

// function BlogCard({ post }) {
//   return (
//     <Card className="overflow-hidden hover:shadow-lg transition-shadow">
//       <div className="relative h-48">
//         <Image
//           src={post.coverImage}
//           alt={post.title}
//           fill
//           className="object-cover"
//         />
//         {post.featured && (
//           <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 text-xs rounded">
//             Featured
//           </div>
//         )}
//       </div>
//       <CardHeader>
//         <div className="flex items-center justify-between mb-2">
//           <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
//             {post.category}
//           </span>
//           <span className="text-xs text-gray-500">{post.readTime}</span>
//         </div>
//         <CardTitle>
//           <Link 
//             href={`/blog/${post.slug}`}
//             className="hover:text-blue-600 transition-colors"
//           >
//             {post.title}
//           </Link>
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {post.tags.slice(0, 3).map((tag) => (
//             <span
//               key={tag}
//               className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
        
//         {/* Meta */}
//         <div className="flex items-center justify-between text-sm text-gray-500">
//           <span>By {post.author}</span>
//           <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// export default function BlogPage() {
//   const featuredPosts = blogPosts.filter(post => post.featured)
//   const regularPosts = blogPosts.filter(post => !post.featured)

//   return (
//     <div className="py-20">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Blog
//           </h1>
//           <p className="text-xl text-gray-600">
//             Thoughts, tutorials, and insights about web development
//           </p>
//         </div>

//         {/* Featured Posts */}
//         {featuredPosts.length > 0 && (
//           <div className="mb-16">
//             <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Posts</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {featuredPosts.map((post) => (
//                 <BlogCard key={post.id} post={post} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* All Posts */}
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-8">All Posts</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogPosts.map((post) => (
//               <BlogCard key={post.id} post={post} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import Image from 'next/image'
import Link from 'next/link'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { blogPosts } from '@/data/blog-posts'
import { personalInfo } from '@/data/personal-info'

export const metadata = {
  title: `Blog - ${personalInfo.name}`,
  description: 'Articles and tutorials about web development',
}

function BlogCard({ post, featured = false }) {
  return (
    <Card className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 ${featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
      <div className="relative h-56 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {post.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm">
            ⭐ Featured
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-white text-sm font-medium drop-shadow-lg">Read more →</span>
        </div>
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            {post.category}
          </span>
          <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTime}
          </span>
        </div>
        <CardTitle className="leading-tight">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 line-clamp-2"
          >
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100 hover:border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100">
          <span className="text-gray-700 font-medium flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
              {post.author.charAt(0)}
            </div>
            {post.author}
          </span>
          <span className="text-gray-500 text-xs">
            {new Date(post.publishedDate).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with gradient */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <svg className="w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.2,42.3C65,55.4,54.2,67,41.1,74.3C28,81.6,14,84.6,-0.7,85.8C-15.4,87,-30.8,86.4,-43.6,79.2C-56.4,72,-66.6,58.2,-73.4,43.1C-80.2,28,-83.6,11.7,-83.1,-4.8C-82.6,-21.3,-78.2,-38,-69.3,-51.4C-60.4,-64.8,-47,-74.9,-32.7,-81.9C-18.4,-88.9,-3.2,-92.8,10.7,-90.4C24.6,-88,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="relative">
            <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 mb-6 animate-gradient">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Exploring the latest in web development, design patterns, and technology trends
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
              <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
              <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-1 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>
            <div className="ml-auto">
              <span className="text-sm text-gray-500 font-medium px-4 py-2 bg-gray-100 rounded-full">
                {blogPosts.length} articles
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest articles and insights delivered directly to your inbox
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
              />
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}