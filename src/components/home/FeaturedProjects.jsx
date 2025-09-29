// // 


// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import Button from '@/components/ui/Button'
// import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
// import { projects } from '@/data/projects'

// function ProjectCard({ project, index }) {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <Card 
//       className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white rounded-2xl border border-gray-100 hover:border-blue-200"
//       style={{ 
//         animationDelay: `${index * 150}ms`
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Project Image with Overlay */}
//       <div className="relative h-56 lg:h-64 overflow-hidden">
//         <Image
//           src={project.image}
//           alt={project.title}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-110"
//         />
        
//         {/* Gradient Overlay */}
//         <div 
//           className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent transition-opacity duration-300 ${
//             isHovered ? 'opacity-100' : 'opacity-0'
//           }`}
//         ></div>

//         {/* Quick Action Buttons */}
//         <div 
//           className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
//             isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//           }`}
//         >
//           <Button size="sm" className="shadow-lg backdrop-blur-sm" asChild>
//             <Link href={`/projects/${project.slug}`}>
//               <span className="flex items-center gap-2">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//                 View
//               </span>
//             </Link>
//           </Button>
//           {project.liveUrl && (
//             <Button variant="outline" size="sm" className="backdrop-blur-sm bg-white/90 border-white shadow-lg" asChild>
//               <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                 <span className="flex items-center gap-2">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                   Live
//                 </span>
//               </a>
//             </Button>
//           )}
//         </div>

//         {/* Featured Badge */}
//         {project.featured && (
//           <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg flex items-center gap-1">
//             <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//             Featured
//           </div>
//         )}

//         {/* Project Number */}
//         <div className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg backdrop-blur-md bg-white/90 text-blue-600 border-2 border-blue-500 shadow-lg">
//           {(index + 1).toString().padStart(2, '0')}
//         </div>
//       </div>

//       <CardHeader>
//         <CardTitle className="group-hover:text-blue-600 transition-colors text-gray-900">
//           {project.title}
//         </CardTitle>
//       </CardHeader>

//       <CardContent>
//         {/* Description */}
//         <p className="text-gray-600 mb-4 line-clamp-2">
//           {project.shortDescription}
//         </p>

//         {/* Technologies */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.technologies.slice(0, 4).map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors cursor-default"
//             >
//               {tech}
//             </span>
//           ))}
//           {project.technologies.length > 4 && (
//             <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
//               +{project.technologies.length - 4}
//             </span>
//           )}
//         </div>

//         {/* Stats Row */}
//         {(project.stats?.views || project.stats?.likes || project.year) && (
//           <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
//             {project.year && (
//               <div className="flex items-center gap-1.5">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//                 {project.year}
//               </div>
//             )}
//             {project.stats?.views && (
//               <div className="flex items-center gap-1.5">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//                 {project.stats.views}
//               </div>
//             )}
//             {project.stats?.likes && (
//               <div className="flex items-center gap-1.5">
//                 <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
//                 </svg>
//                 {project.stats.likes}
//               </div>
//             )}
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div className="flex gap-2">
//           <Button size="sm" className="flex-1 group/btn" asChild>
//             <Link href={`/projects/${project.slug}`} className="flex items-center justify-center gap-2">
//               Details
//               <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </Link>
//           </Button>
//           {project.githubUrl && (
//             <Button 
//               variant="outline" 
//               size="sm" 
//               asChild
//               className="aspect-square p-0 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
//             >
//               <a 
//                 href={project.githubUrl} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 aria-label="View on GitHub"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                 </svg>
//               </a>
//             </Button>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// export default function FeaturedProjects() {
//   const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

//   return (
//     <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
//       {/* Background Decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//         <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-block mb-4">
//             <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-600 flex items-center gap-2 inline-flex">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//               Portfolio Showcase
//             </span>
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
//             Featured Projects
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Showcasing some of my recent work that demonstrates creativity, technical skill, and problem-solving
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {featuredProjects.map((project, index) => (
//             <ProjectCard key={project.id} project={project} index={index} />
//           ))}
//         </div>

//         {/* Empty State */}
//         {featuredProjects.length === 0 && (
//           <div className="text-center py-16">
//             <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
//               <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//               </svg>
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">
//               Projects Coming Soon
//             </h3>
//             <p className="text-gray-600">
//               I'm currently working on some exciting projects. Check back soon!
//             </p>
//           </div>
//         )}

//         {/* CTA Section */}
//         {featuredProjects.length > 0 && (
//           <div className="text-center">
//             <Button size="lg" asChild className="group shadow-lg hover:shadow-xl">
//               <Link href="/projects" className="inline-flex items-center gap-2">
//                 View All Projects
//                 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </Link>
//             </Button>
//             <p className="mt-4 text-sm text-gray-500">
//               Explore {projects.length} total projects
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { projects } from '@/data/projects'

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
      className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white rounded-2xl border border-gray-100 hover:border-blue-200"
      style={{ 
        animationDelay: `${index * 150}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with Overlay */}
      <div className="relative h-48 lg:h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>

        {/* Quick Action Buttons */}
        <div 
          className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button size="sm" className="shadow-lg backdrop-blur-sm" asChild>
            <Link href={`/projects/${project.slug}`}>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View
              </span>
            </Link>
          </Button>
          {project.liveUrl && (
            <Button variant="outline" size="sm" className="backdrop-blur-sm bg-white/90 border-white shadow-lg" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live
                </span>
              </a>
            </Button>
          )}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured
          </div>
        )}

        {/* Project Number */}
        <div className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base backdrop-blur-md bg-white/90 text-blue-600 border-2 border-blue-500 shadow-lg">
          {(index + 1).toString().padStart(2, '0')}
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="group-hover:text-blue-600 transition-colors text-gray-900 text-lg">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Stats Row */}
        {(project.stats?.views || project.stats?.likes || project.year) && (
          <div className="flex items-center gap-3 text-xs text-gray-500">
            {project.year && (
              <div className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {project.year}
              </div>
            )}
            {project.stats?.views && (
              <div className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {project.stats.views}
              </div>
            )}
            {project.stats?.likes && (
              <div className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                {project.stats.likes}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 group/btn" asChild>
            <Link href={`/projects/${project.slug}`} className="flex items-center justify-center gap-2">
              Details
              <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
          {project.githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="aspect-square p-0 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
            >
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View on GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="px-3 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-blue-600 flex items-center gap-2 inline-flex">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Portfolio Showcase
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing some of my recent work that demonstrates creativity, technical skill, and problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {featuredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Projects Coming Soon
            </h3>
            <p className="text-gray-600">
              I'm currently working on some exciting projects. Check back soon!
            </p>
          </div>
        )}

        {/* CTA Section */}
        {featuredProjects.length > 0 && (
          <div className="text-center">
            <Button size="lg" asChild className="group shadow-lg hover:shadow-xl">
              <Link href="/projects" className="inline-flex items-center gap-2">
                View All Projects
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
            <p className="mt-3 text-sm text-gray-500">
              Explore {projects.length} total projects
            </p>
          </div>
        )}
      </div>
    </section>
  )
}