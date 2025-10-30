
'use client';
import { useState, useEffect } from 'react'
import { 
  Code2, 
  Layers, 
  Database, 
  Cloud,
  ArrowUpRight,
  Zap,
  Sparkles
} from 'lucide-react'

const skillHighlights = [
  {
    category: 'Frontend Development',
    icon: Layers,
    color: 'from-blue-500 to-cyan-500',
    bgGlow: 'group-hover:shadow-blue-500/20',
    primarySkills: ['React', 'Next.js', 'TypeScript'],
    count: 8
  },
  {
    category: 'Backend Engineering',
    icon: Code2,
    color: 'from-purple-500 to-pink-500',
    bgGlow: 'group-hover:shadow-purple-500/20',
    primarySkills: ['Node.js', 'Python', 'REST APIs'],
    count: 6
  },
  {
    category: 'Database & Storage',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    bgGlow: 'group-hover:shadow-orange-500/20',
    primarySkills: ['MongoDB', 'PostgreSQL', 'Redis'],
    count: 7
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-green-500 to-emerald-500',
    bgGlow: 'group-hover:shadow-green-500/20',
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
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Enhanced Section Header */}
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200/50 rounded-full text-sm font-bold text-blue-700 mb-5 shadow-lg">
            <Zap size={16} className="text-blue-600" />
            <span>Technical Expertise</span>
            <Sparkles size={16} className="text-cyan-600" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
              Technology Stack
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Specialized in building scalable web applications with modern technologies
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Compact Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillHighlights.map((skill, idx) => {
            const IconComponent = skill.icon
            
            return (
              <div
                key={skill.category}
                className={`group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent transition-all duration-500 hover:shadow-2xl ${skill.bgGlow} hover:-translate-y-2`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${idx * 100}ms`
                }}
              >
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${skill.color} rounded-t-2xl`}></div>
                
                {/* Icon and Count */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <IconComponent className="text-white" size={26} strokeWidth={2.5} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-gray-900">{skill.count}+</div>
                    <div className="text-xs font-semibold text-gray-500">skills</div>
                  </div>
                </div>

                {/* Category */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {skill.category}
                </h3>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.primarySkills.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:from-gray-100 hover:to-gray-200 hover:scale-105 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View All Link */}
                <button
                  onClick={handleExplore}
                  className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-all inline-flex items-center gap-1 group-hover:gap-2"
                >
                  <span>View all</span>
                  <ArrowUpRight size={14} className="transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-8 md:p-12 overflow-hidden border-2 border-gray-800 shadow-2xl mb-12">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3 flex items-center justify-center md:justify-start gap-3">
                <span>Explore Full Tech Stack</span>
                <Sparkles className="text-yellow-400 animate-pulse" size={28} />
              </h3>
              <p className="text-gray-300 text-lg font-medium">
                Deep dive into all technologies, tools, and frameworks I work with
              </p>
            </div>
            <button
              onClick={handleExplore}
              className="group/btn shrink-0 px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 hover:from-blue-400 hover:via-cyan-400 hover:to-blue-400 text-white font-bold rounded-2xl transition-all duration-300 inline-flex items-center gap-3 shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/60 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 group-hover/btn:tracking-wide transition-all">View All Skills</span>
              <ArrowUpRight size={22} className="relative z-10 transition-all group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:scale-110" strokeWidth={2.5} />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
            </button>
          </div>
        </div>

        {/* Compact Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '20+', label: 'Technologies', gradient: 'from-blue-500 to-cyan-500' },
            { value: '2+', label: 'Years Experience', gradient: 'from-purple-500 to-pink-500' },
            { value: '10+', label: 'Projects Built', gradient: 'from-orange-500 to-red-500' },
            { value: '100%', label: 'Client Satisfaction', gradient: 'from-green-500 to-emerald-500' }
          ].map((stat, idx) => (
            <div 
              key={stat.label}
              className="relative bg-white rounded-2xl p-5 border-2 border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${(idx + 4) * 100}ms`
              }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-t-2xl`}></div>
              <div className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}