// 

import Image from 'next/image'
import { personalInfo } from '@/data/personal-info'
import { workExperience } from '@/data/experience'

export const metadata = {
  title: `About - ${personalInfo.name}`,
  description: `Learn more about ${personalInfo.name}, ${personalInfo.title}`,
}

export default function AboutPage() {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="relative w-48 h-48 mx-auto mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative w-full h-full rounded-full ring-4 ring-white shadow-2xl overflow-hidden">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.title}
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting exceptional digital experiences with {personalInfo.yearsOfExperience} years of expertise
          </p>
        </div>

        {/* Biography */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg">
                Hello! I'm <span className="font-semibold text-gray-900">{personalInfo.nickname || personalInfo.name}</span>, a passionate {personalInfo.title} 
                based in <span className="font-semibold text-gray-900">{personalInfo.location}</span>. I love creating digital experiences that make a difference.
              </p>
              <p className="text-lg">
                My journey in web development started {personalInfo.yearsOfExperience} years ago, and since then 
                I've had the privilege of working with amazing teams and clients to bring ideas to life. 
                I specialize in full-stack development with a focus on modern JavaScript technologies.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and mentoring.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {workExperience.length}+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
          
          <div className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 transform group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
          </div>
          
          <div className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 transform group-hover:scale-110 transition-transform duration-300">
                20+
              </div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}