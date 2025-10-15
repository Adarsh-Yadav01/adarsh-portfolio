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
      className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 bg-white rounded-3xl border-2 border-gray-100 hover:border-blue-300"
      style={{ 
        animationDelay: `${index * 150}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with Overlay */}
      <div className="relative h-56 lg:h-60 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        
        {/* Animated Gradient Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Animated Shine Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
            isHovered ? 'translate-x-full' : '-translate-x-full'
          }`}></div>
        </div>

        {/* Quick Action Buttons */}
        <div 
          className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button size="sm" className="shadow-2xl backdrop-blur-md bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 hover:from-violet-500 hover:via-blue-500 hover:to-cyan-400 text-white border-2 border-white/30 hover:scale-110 transition-all font-bold relative overflow-hidden group/shine" asChild>
            <Link href={`/projects/${project.slug}`}>
              <span className="flex items-center gap-2 relative z-10">
                <svg className="w-4 h-4 transition-transform group-hover/shine:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="group-hover/shine:tracking-wide transition-all">View Details</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/shine:translate-x-full transition-transform duration-700"></span>
            </Link>
          </Button>
          {project.liveUrl && (
            <Button variant="outline" size="sm" className="backdrop-blur-md bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white border-2 border-purple-400/50 shadow-2xl hover:scale-110 transition-all font-bold" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </span>
              </a>
            </Button>
          )}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white shadow-2xl flex items-center gap-1.5 border-2 border-white/30 animate-pulse">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured
          </div>
        )}

        {/* Project Number Badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg backdrop-blur-md bg-white/95 text-blue-600 border-2 border-blue-500 shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform">
          {(index + 1).toString().padStart(2, '0')}
        </div>

        {/* Category Badge */}
        {project.category && (
          <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-md bg-gray-900/80 text-white border border-white/20 shadow-lg">
            {project.category}
          </div>
        )}
      </div>

      <CardHeader className="pb-3 pt-5">
        <CardTitle className="group-hover:text-blue-600 transition-colors text-gray-900 text-xl font-bold leading-tight">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 font-medium">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 hover:from-blue-100 hover:to-indigo-100 transition-all cursor-default border border-blue-200/50 shadow-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-300/50 shadow-sm">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Stats Row */}
        {(project.stats?.views || project.stats?.likes || project.year) && (
          <div className="flex items-center gap-4 text-xs text-gray-500 font-semibold pt-2 border-t border-gray-100">
            {project.year && (
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {project.year}
              </div>
            )}
            {project.stats?.views && (
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {project.stats.views}
              </div>
            )}
            {project.stats?.likes && (
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                {project.stats.likes}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button size="sm" className="flex-1 group/btn font-bold shadow-lg hover:shadow-xl hover:shadow-blue-500/50 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 border-0 hover:scale-105 transition-all" asChild>
            <Link href={`/projects/${project.slug}`} className="flex items-center justify-center gap-2">
              View Details
              <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
          {project.githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="aspect-square p-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black hover:from-black hover:via-gray-900 hover:to-gray-800 text-white border-2 border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl hover:shadow-gray-900/50 hover:scale-110 transition-all"
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
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Enhanced Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 flex items-center gap-2 inline-flex border-2 border-blue-200/50 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Portfolio Showcase
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Showcasing some of my recent work that demonstrates creativity, technical skill, and innovative problem-solving
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {featuredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-gray-200 shadow-xl">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6 shadow-lg">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Projects Coming Soon
            </h3>
            <p className="text-gray-600 text-lg font-medium">
              I'm currently working on some exciting projects. Check back soon!
            </p>
          </div>
        )}

        {/* Enhanced CTA Section */}
        {featuredProjects.length > 0 && (
          <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border-2 border-blue-200/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Want to see more?</h3>
            <p className="text-gray-600 mb-6 text-lg font-medium max-w-2xl mx-auto">
              Explore my complete portfolio of {projects.length} projects showcasing diverse skills and technologies
            </p>
            <Button size="lg" asChild className="group shadow-2xl hover:shadow-2xl hover:shadow-purple-500/50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 font-bold text-base px-8 py-6 hover:scale-105 transition-all border-0">
              <Link href="/projects" className="inline-flex items-center gap-3">
                <span>View All Projects</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
            <p className="mt-4 text-sm text-gray-500 font-semibold flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              {projects.length} total projects • Updated regularly
            </p>
          </div>
        )}
      </div>
    </section>
  )
}