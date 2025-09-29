'use client'

import { useState, useEffect } from 'react'
import { skillCategories } from '@/data/skills'
import { personalInfo } from '@/data/personal-info'

// Category icon mapping - customize based on your categories
const categoryIcons = {
  'Frontend Development': '🎨',
  'Backend Development': '⚙️',
  'Tools & DevOps': '🛠️',
  'Design & UI/UX': '🎭',
  'Mobile Development': '📱',
  'Database': '💾',
  'Cloud & Infrastructure': '☁️',
  'Testing': '🧪',
  'Programming Languages': '💻',
  'Frameworks & Libraries': '📚',
}

// Gradient colors for each category
const categoryGradients = {
  'Frontend Development': 'from-blue-500 to-cyan-500',
  'Backend Development': 'from-purple-500 to-pink-500',
  'Tools & DevOps': 'from-orange-500 to-red-500',
  'Design & UI/UX': 'from-pink-500 to-rose-500',
  'Mobile Development': 'from-green-500 to-emerald-500',
  'Database': 'from-indigo-500 to-blue-500',
  'Cloud & Infrastructure': 'from-sky-500 to-blue-500',
  'Testing': 'from-teal-500 to-cyan-500',
  'Programming Languages': 'from-violet-500 to-purple-500',
  'Frameworks & Libraries': 'from-amber-500 to-orange-500',
}

const getIcon = (categoryName) => categoryIcons[categoryName] || '⚡'
const getGradient = (categoryName) => categoryGradients[categoryName] || 'from-blue-500 to-purple-500'

function ProgressBar({ skill, isVisible }) {
  return (
    <div className="mb-5 group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-900">{skill.name}</span>
        <div className="flex items-center gap-2">
          {skill.experience && (
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
              {skill.experience}
            </span>
          )}
          <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {skill.level}%
          </span>
        </div>
      </div>
      <div className="relative w-full rounded-full h-2.5 overflow-hidden bg-gray-100">
        <div 
          className={`h-2.5 rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}

function SkillCard({ category, index, isVisible }) {
  const [isHovered, setIsHovered] = useState(false)
  const gradient = getGradient(category.name)
  
  return (
    <div 
      className={`relative rounded-2xl border border-gray-200 bg-white shadow-lg p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Decorative Corner Element */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:opacity-20 transition-opacity`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} shadow-lg transition-transform duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
            <span className="text-2xl">{getIcon(category.name)}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {category.name}
          </h2>
        </div>
        
        {/* Skills Count Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 text-gray-700">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {category.skills.length} Skills
          </span>
        </div>

        <div className="space-y-2">
          {category.skills.map((skill) => (
            <ProgressBar key={skill.name} skill={skill} isVisible={isVisible} />
          ))}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
    </div>
  )
}

export default function SkillsPage() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Calculate stats
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)
  const avgLevel = Math.round(
    skillCategories.reduce((acc, cat) => 
      acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0), 0
    ) / totalSkills
  )

  return (
    <div className="min-h-screen py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 animate-float">
              <span className="text-lg">🚀</span>
              Technical Expertise
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
            A comprehensive overview of the technologies and tools I use to create amazing digital experiences.
          </p>
          
          {/* Enhanced Stats Bar */}
          <div className="flex justify-center gap-6 mt-12 flex-wrap">
            {[
              { value: `${totalSkills}+`, label: 'Technologies', icon: '💻', gradient: 'from-blue-500 to-cyan-500' },
              { value: skillCategories.length, label: 'Categories', icon: '📊', gradient: 'from-purple-500 to-pink-500' },
              { value: `${avgLevel}%`, label: 'Avg Proficiency', icon: '⚡', gradient: 'from-orange-500 to-red-500' }
            ].map((stat, idx) => (
              <div 
                key={stat.label}
                className="relative group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-w-[140px]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                  <div className="relative">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid with Stagger Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.name} 
              category={category} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Enhanced Learning Section */}
        <div className="relative mt-20 rounded-3xl p-12 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-2xl">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-xl">
              <span className="text-5xl">📚</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">Always Learning</h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-8 text-blue-50">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends 
              and best practices in web development. I regularly explore new frameworks, tools, and methodologies.
            </p>
            
            {/* Learning Topics Tags */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['AI/ML', 'Web3', 'Cloud Native', 'Microservices', 'Performance Optimization'].map((topic) => (
                <span 
                  key={topic}
                  className="px-5 py-2.5 backdrop-blur-sm rounded-full text-sm font-semibold hover:bg-white/30 transition-all duration-300 cursor-default bg-white/20 text-white shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Certifications/Achievements Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-10 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Continuous Growth
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '🏆', label: 'Awards', gradient: 'from-yellow-400 to-orange-500' },
              { icon: '📜', label: 'Certifications', gradient: 'from-blue-400 to-cyan-500' },
              { icon: '💡', label: 'Projects', gradient: 'from-purple-400 to-pink-500' },
              { icon: '🌟', label: 'Contributions', gradient: 'from-green-400 to-emerald-500' }
            ].map((item) => (
              <div 
                key={item.label}
                className="relative group"
              >
                <div className="relative rounded-2xl p-8 border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                  <div className="relative">
                    <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div className="text-sm font-bold text-gray-900">{item.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}