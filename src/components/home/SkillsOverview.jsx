'use client';
import { useState, useEffect } from 'react'
import { 
  Code2, 
  Layers, 
  Database, 
  Cloud,
  ArrowUpRight,
  Zap
} from 'lucide-react'

const skillHighlights = [
  {
    category: 'Frontend Development',
    icon: Layers,
    color: 'from-blue-500 to-cyan-500',
    primarySkills: ['React', 'Next.js', 'TypeScript'],
    count: 8
  },
  {
    category: 'Backend Engineering',
    icon: Code2,
    color: 'from-purple-500 to-pink-500',
    primarySkills: ['Node.js', 'Python', 'REST APIs'],
    count: 6
  },
  {
    category: 'Database & Storage',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    primarySkills: ['MongoDB', 'PostgreSQL', 'Redis'],
    count: 7
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-green-500 to-emerald-500',
    primarySkills: ['Docker', 'AWS', 'CI/CD'],
    count: 5
  }
]

export default function SkillsOverview() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleExplore = () => {
    window.location.href = '/skills'
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-600 mb-4">
            <Zap size={14} />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Specialized in building scalable web applications with modern technologies. 
            Here's a glimpse of my core competencies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {skillHighlights.map((skill, idx) => {
            const IconComponent = skill.icon
            
            return (
              <div
                key={skill.category}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${idx * 100}ms`
                }}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color} rounded-t-2xl`}></div>
                
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <span className="text-sm font-semibold text-gray-400">
                    {skill.count}+ skills
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {skill.category}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.primarySkills.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={handleExplore}
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-1 group-hover:gap-2"
                >
                  View all
                  <ArrowUpRight size={14} className="transition-all" />
                </button>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Explore Full Tech Stack
              </h3>
              <p className="text-gray-400 text-lg">
                Deep dive into all technologies, tools, and frameworks I work with
              </p>
            </div>
            <button
              onClick={handleExplore}
              className="shrink-0 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>View All Skills</span>
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">26+</div>
            <div className="text-sm text-gray-500">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
            <div className="text-sm text-gray-500">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
            <div className="text-sm text-gray-500">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
            <div className="text-sm text-gray-500">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}