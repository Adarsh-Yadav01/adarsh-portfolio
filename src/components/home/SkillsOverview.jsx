'use client';
import { useState, useEffect } from 'react'
import { 
  Code2, 
  Palette, 
  Database, 
  Wrench, 
  Smartphone,
  Layout,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Package,
  Cpu
} from 'lucide-react'

// Icon mapping for different categories
const categoryIcons = {
  'Frontend': Layout,
  'Backend': Server,
  'Database': Database,
  'DevOps': Cloud,
  'Mobile': Smartphone,
  'Design': Palette,
  'Tools': Wrench,
  'Languages': Code2,
  'Version Control': GitBranch,
  'Framework': Package,
  'Testing': Terminal,
  'Other': Cpu
}

// Sample skill data with proficiency
const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', proficiency: 95 },
      { name: 'Next.js', proficiency: 90 },
      { name: 'TypeScript', proficiency: 88 },
      { name: 'Tailwind CSS', proficiency: 92 },
      { name: 'Vue.js', proficiency: 75 },
      { name: 'HTML/CSS', proficiency: 98 }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', proficiency: 90 },
      { name: 'Express', proficiency: 88 },
      { name: 'Python', proficiency: 82 },
      { name: 'REST APIs', proficiency: 93 },
      { name: 'GraphQL', proficiency: 78 }
    ]
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', proficiency: 85 },
      { name: 'PostgreSQL', proficiency: 80 },
      { name: 'MySQL', proficiency: 83 },
      { name: 'Redis', proficiency: 72 },
      { name: 'Firebase', proficiency: 88 }
    ]
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Docker', proficiency: 80 },
      { name: 'AWS', proficiency: 75 },
      { name: 'CI/CD', proficiency: 82 },
      { name: 'Nginx', proficiency: 70 },
      { name: 'Vercel', proficiency: 90 }
    ]
  }
]

function ProficiencyBar({ proficiency, delay }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(proficiency)
    }, delay)
    return () => clearTimeout(timer)
  }, [proficiency, delay])

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export default function SkillsOverview() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, idx) => {
            const IconComponent = categoryIcons[category.name] || Code2
            
            return (
              <div 
                key={category.name} 
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
                style={{ 
                  animation: `fadeInUp 0.6s ease-out ${idx * 100}ms both`
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                  <IconComponent className="text-white" size={24} />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                
                <ul className="space-y-3">
                  {category.skills.slice(0, 4).map((skill, skillIdx) => (
                    <li 
                      key={skill.name} 
                      className="text-gray-600 text-sm"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium group-hover:text-gray-900 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-400 font-semibold">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <ProficiencyBar 
                        proficiency={skill.proficiency} 
                        delay={hoveredCard === idx ? skillIdx * 100 : idx * 200 + skillIdx * 100}
                      />
                    </li>
                  ))}
                </ul>
                
                {category.skills.length > 4 && (
                  <p className="text-xs text-gray-400 mt-3 font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    {category.skills.length - 4} more skills
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            View All Skills
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}