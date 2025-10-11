// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import Button from '@/components/ui/Button'
// import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
// import { projects } from '@/data/projects'

// export default function ProjectsPage() {
//   const [filter, setFilter] = useState('all')
//   const [hoveredCard, setHoveredCard] = useState(null)
  
//   const categories = ['all', ...new Set(projects.map(p => p.category))]
//   const filteredProjects = filter === 'all' 
//     ? projects 
//     : projects.filter(p => p.category === filter)

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Background Decoration */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 -right-32 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-20 -left-32 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
//       </div>

//       <div className="relative py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <div className="inline-block mb-4">
//               <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-600 flex items-center gap-2 inline-flex">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
//                 </svg>
//                 Portfolio Collection
//               </span>
//             </div>
//             <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
//               My Projects
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               A collection of projects that showcase my skills in full-stack development, 
//               from concept to deployment.
//             </p>

//             {/* Stats */}
//             <div className="flex items-center justify-center gap-8 mt-8 text-sm">
//               <div className="flex items-center gap-2 text-gray-600">
//                 <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
//                 </svg>
//                 <span className="font-semibold">{projects.length} Projects</span>
//               </div>
//               <div className="flex items-center gap-2 text-gray-600">
//                 <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//                 </svg>
//                 <span className="font-semibold">{projects.filter(p => p.featured).length} Featured</span>
//               </div>
//               <div className="flex items-center gap-2 text-gray-600">
//                 <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
//                 </svg>
//                 <span className="font-semibold">{categories.length - 1} Categories</span>
//               </div>
//             </div>
//           </div>

//           {/* Filter Tabs */}
//           <div className="flex flex-wrap justify-center gap-3 mb-12">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setFilter(category)}
//                 className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
//                   filter === category
//                     ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
//                     : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
//                 }`}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//                 {category !== 'all' && (
//                   <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
//                     filter === category ? 'bg-white/20' : 'bg-gray-100'
//                   }`}>
//                     {projects.filter(p => p.category === category).length}
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Projects Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project, index) => (
//               <Card 
//                 key={project.id} 
//                 className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl border border-gray-100 hover:border-blue-200"
//                 onMouseEnter={() => setHoveredCard(project.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="relative h-56 overflow-hidden">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
                  
//                   {/* Gradient Overlay */}
//                   <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent transition-opacity duration-300 ${
//                     hoveredCard === project.id ? 'opacity-100' : 'opacity-0'
//                   }`}></div>

//                   {/* Featured Badge */}
//                   {project.featured && (
//                     <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg flex items-center gap-1">
//                       <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                       Featured
//                     </div>
//                   )}

//                   {/* Category Badge */}
//                   <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/90 text-gray-700 shadow-md">
//                     {project.category}
//                   </div>

//                   {/* Quick Actions (visible on hover) */}
//                   <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
//                     hoveredCard === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                   }`}>
//                     <Button size="sm" className="shadow-lg backdrop-blur-sm" asChild>
//                       <Link href={`/projects/${project.slug}`}>
//                         <span className="flex items-center gap-2">
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                           </svg>
//                           View
//                         </span>
//                       </Link>
//                     </Button>
//                     {project.liveUrl && (
//                       <Button variant="outline" size="sm" className="backdrop-blur-sm bg-white/90 border-white shadow-lg" asChild>
//                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                           <span className="flex items-center gap-2">
//                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                             </svg>
//                             Live
//                           </span>
//                         </a>
//                       </Button>
//                     )}
//                   </div>
//                 </div>

//                 <CardHeader>
//                   <CardTitle className="text-xl group-hover:text-blue-600 transition-colors text-gray-900">
//                     {project.title}
//                   </CardTitle>
//                 </CardHeader>

//                 <CardContent>
//                   <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
//                     {project.shortDescription}
//                   </p>
                  
//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.slice(0, 4).map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium hover:bg-blue-100 transition-colors cursor-default"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                     {project.technologies.length > 4 && (
//                       <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
//                         +{project.technologies.length - 4}
//                       </span>
//                     )}
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-2">
//                     <Button size="sm" asChild className="flex-1 group/btn">
//                       <Link href={`/projects/${project.slug}`} className="flex items-center justify-center gap-2">
//                         View Details
//                         <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                         </svg>
//                       </Link>
//                     </Button>
//                     {project.githubUrl && (
//                       <Button 
//                         variant="outline" 
//                         size="sm" 
//                         asChild
//                         className="aspect-square p-0 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
//                       >
//                         <a 
//                           href={project.githubUrl} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           aria-label="View on GitHub"
//                         >
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                           </svg>
//                         </a>
//                       </Button>
//                     )}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Empty State */}
//           {filteredProjects.length === 0 && (
//             <div className="text-center py-20">
//               <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
//                 <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                 No Projects Found
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 No projects match the selected filter. Try a different category.
//               </p>
//               <Button onClick={() => setFilter('all')}>
//                 View All Projects
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [hoveredCard, setHoveredCard] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [currentImageIndex, setCurrentImageIndex] = useState({})
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const categories = ['all', ...new Set(projects.map(p => p.category))]
  
  // Handle image navigation
  const handlePrevImage = (projectId, imagesLength, e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imagesLength) % imagesLength
    }))
  }

  const handleNextImage = (projectId, imagesLength, e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imagesLength
    }))
  }

  const goToImage = (projectId, index, e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: index
    }))
  }
  
  // Filter and Search Logic
  const filteredProjects = useMemo(() => {
    let result = projects

    // Filter by category
    if (filter !== 'all') {
      result = result.filter(p => p.category === filter)
    }

    // Search by title, description, or technologies
    if (searchQuery) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Sort
    if (sortBy === 'featured') {
      result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    } else if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title))
    }

    return result
  }, [filter, searchQuery, sortBy])

  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndex = { ...prev }
        
        filteredProjects.forEach(project => {
          if (project.images && project.images.length > 1) {
            const currentIndex = prev[project.id] || 0
            newIndex[project.id] = (currentIndex + 1) % project.images.length
          }
        })
        
        return newIndex
      })
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [isMobile, filteredProjects])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio Showcase
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore my collection of full-stack applications, showcasing modern web development 
                practices and creative problem-solving.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-6">
              <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">{projects.length}</div>
                  <div className="text-xs text-gray-500">Total Projects</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">{projects.filter(p => p.featured).length}</div>
                  <div className="text-xs text-gray-500">Featured</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">{categories.length - 1}</div>
                  <div className="text-xs text-gray-500">Categories</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Sort Bar */}
          <div className="mb-8 bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1">
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search projects by name, description, or technology..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold text-gray-700 whitespace-nowrap">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="default">Default</option>
                  <option value="featured">Featured First</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            {(searchQuery || filter !== 'all') && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-bold text-gray-900">{filteredProjects.length}</span> of <span className="font-bold text-gray-900">{projects.length}</span> projects
                  {searchQuery && <span> matching "<span className="font-semibold text-blue-600">{searchQuery}</span>"</span>}
                  {filter !== 'all' && <span> in <span className="font-semibold text-purple-600">{filter}</span></span>}
                </p>
              </div>
            )}
          </div>

          {/* Filter & View Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200 scale-105'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  {category !== 'all' && (
                    <span className={`ml-2 px-2 py-0.5 rounded-md text-xs font-bold ${
                      filter === category ? 'bg-white/30' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {projects.filter(p => p.category === category).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                aria-label="Grid view"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                aria-label="List view"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Projects Grid/List */}
          <div className={`transition-all duration-500 ${
            viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" 
              : "flex flex-col gap-6"
          }`}>
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 rounded-2xl border border-gray-100 hover:border-blue-200 animate-fade-in ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row' : 'flex flex-col'
                }`}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image Section with Slider */}
                <div className={`relative overflow-hidden group/image ${
                  viewMode === 'list' ? 'sm:w-80 h-64 sm:h-auto flex-shrink-0' : 'h-56 w-full'
                }`}>
                  {/* Image Display - supports multiple images or single image */}
                  {project.images && project.images.length > 0 ? (
                    <>
                      <Link href={`/projects/${project.slug}`} className="block w-full h-full">
                        <Image
                          src={project.images[currentImageIndex[project.id] || 0]}
                          alt={`${project.title} - Image ${(currentImageIndex[project.id] || 0) + 1}`}
                          fill
                          loading="lazy"
                          className="object-cover transition-all duration-500"
                        />
                      </Link>
                      
                      {/* Slider Controls - Only show if multiple images */}
                      {project.images.length > 1 && (
                        <>
                          {/* Previous Button - Hidden on mobile */}
                          <button
                            onClick={(e) => handlePrevImage(project.id, project.images.length, e)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-30 hidden md:flex"
                            aria-label="Previous image"
                          >
                            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>

                          {/* Next Button - Hidden on mobile */}
                          <button
                            onClick={(e) => handleNextImage(project.id, project.images.length, e)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-30 hidden md:flex"
                            aria-label="Next image"
                          >
                            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>

                          {/* Image Indicators */}
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
                            {project.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => goToImage(project.id, index, e)}
                                className={`transition-all duration-300 rounded-full ${
                                  (currentImageIndex[project.id] || 0) === index
                                    ? 'w-8 h-2 bg-white'
                                    : 'w-2 h-2 bg-white/60 hover:bg-white/80'
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                              />
                            ))}
                          </div>

                          {/* Image Counter */}
                          <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold rounded-lg z-20">
                            {(currentImageIndex[project.id] || 0) + 1} / {project.images.length}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    /* Fallback to single image */
                    <Link href={`/projects/${project.slug}`} className="block w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </Link>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2 z-10">
                    <span className="px-3 py-1.5 text-xs font-semibold rounded-lg backdrop-blur-md bg-white/90 text-gray-800 shadow-lg">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1.5 text-xs font-bold rounded-lg backdrop-blur-md bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Hover Actions - Only show when not interacting with slider */}
                  {!(project.images && project.images.length > 1) && (
                    <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 z-20 ${
                      hoveredCard === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}>
                      <Button size="sm" className="shadow-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white" asChild>
                        <Link href={`/projects/${project.slug}`} className="flex items-center gap-2 px-4 py-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Details
                        </Link>
                      </Button>
                      {project.liveUrl && (
                        <Button size="sm" className="shadow-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white" asChild>
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 px-4 py-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col">
                  <CardHeader className="pb-3">
                    <Link href={`/projects/${project.slug}`}>
                      <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors cursor-pointer">
                        {project.title}
                      </CardTitle>
                    </Link>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <p className="text-gray-600 leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-semibold rounded-lg border border-blue-100 hover:border-blue-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2 mt-auto">
                      <Button size="sm" asChild className="flex-1 group/btn">
                        <Link href={`/projects/${project.slug}`}>
                          <span className="flex items-center justify-center gap-2">
                            View Project
                            <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </Link>
                      </Button>
                      {project.githubUrl && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="w-10 h-10 p-0 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all flex-shrink-0"
                        >
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 px-4 animate-fade-in">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 animate-bounce">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No Projects Found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {searchQuery 
                  ? `No projects match "${searchQuery}". Try a different search term.`
                  : "No projects match your current filters. Try adjusting your selection."
                }
              </p>
              <div className="flex gap-3 justify-center">
                {searchQuery && (
                  <Button 
                    onClick={() => setSearchQuery('')}
                    variant="outline"
                    className="border-2"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Clear Search
                    </span>
                  </Button>
                )}
                {filter !== 'all' && (
                  <Button 
                    onClick={() => setFilter('all')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Show All Projects
                    </span>
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add CSS animation for fade-in */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}