


"use client";

import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { useState } from 'react'

export default function ProjectDetailPage({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative py-10 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 sm:mb-8 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-semibold flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                  {project.title}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.liveUrl && (
                <Button size="lg" className="group shadow-lg hover:shadow-xl" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Site
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="lg" className="group hover:bg-gray-900 hover:text-white hover:border-gray-900" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Hero Media */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem] mb-12 sm:mb-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                poster={project.gallery?.[0] || project.image}
                controls
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                aria-label={`${project.title} demo video`}
              />
            ) : (
              <Image
                src={project.gallery?.[0] || project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 1152px"
              />
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Gallery Carousel */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Gallery</h2>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {currentIndex + 1} / {project.gallery.length}
                </span>
              </div>
              
              <div className="relative group">
                {/* Carousel Container */}
                <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100">
                  {project.gallery.map((media, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {media.endsWith('.mp4') || media.endsWith('.webm') ? (
                        <video
                          src={media}
                          poster={project.image}
                          controls
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          aria-label={`${project.title} gallery video ${index + 1}`}
                        />
                      ) : (
                        <Image
                          src={media}
                          alt={`${project.title} gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 1152px"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
                  aria-label="Previous media"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
                  aria-label="Next media"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Thumbnail Navigation */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {project.gallery.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentIndex 
                          ? 'border-blue-600 scale-105 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      aria-label={`Go to media ${index + 1}`}
                    >
                      {media.endsWith('.mp4') || media.endsWith('.webm') ? (
                        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      ) : (
                        <Image
                          src={media}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8 sm:space-y-12">
              {/* Overview */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Overview</h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Challenges</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3 text-base sm:text-lg text-gray-600">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-semibold mt-0.5">
                          {index + 1}
                        </span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Results */}
              {project.results && project.results.length > 0 && (
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-green-200/50">
                  <div className="flex items-center gap-3 mb-6">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Results & Impact</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                        <svg className="flex-shrink-0 w-6 h-6 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm sticky top-6">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900">Project Info</h3>
                </div>
                <dl className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <dt className="text-sm font-medium text-gray-500 mb-1">Completed</dt>
                      <dd className="text-sm font-semibold text-gray-900">{new Date(project.completedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <dt className="text-sm font-medium text-gray-500 mb-1">Category</dt>
                      <dd className="text-sm font-semibold text-gray-900">{project.category}</dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Technologies Card */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200/50">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}