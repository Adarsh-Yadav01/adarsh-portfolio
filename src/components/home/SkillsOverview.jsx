
// 'use client';
// import { useState, useEffect } from 'react'
// import { 
//   Code2, 
//   Layers, 
//   Database, 
//   Cloud,
//   ArrowUpRight,
//   Zap,
//   Sparkles
// } from 'lucide-react'

// const skillHighlights = [
//   {
//     category: 'Frontend Development',
//     icon: Layers,
//     color: 'from-blue-500 to-cyan-500',
//     bgGlow: 'group-hover:shadow-blue-500/20',
//     primarySkills: ['React', 'Next.js', 'TypeScript'],
//     count: 8
//   },
//   {
//     category: 'Backend Engineering',
//     icon: Code2,
//     color: 'from-purple-500 to-pink-500',
//     bgGlow: 'group-hover:shadow-purple-500/20',
//     primarySkills: ['Node.js', 'Python', 'REST APIs'],
//     count: 6
//   },
//   {
//     category: 'Database & Storage',
//     icon: Database,
//     color: 'from-orange-500 to-red-500',
//     bgGlow: 'group-hover:shadow-orange-500/20',
//     primarySkills: ['MongoDB', 'PostgreSQL', 'Redis'],
//     count: 7
//   },
//   {
//     category: 'Cloud & DevOps',
//     icon: Cloud,
//     color: 'from-green-500 to-emerald-500',
//     bgGlow: 'group-hover:shadow-green-500/20',
//     primarySkills: ['Docker', 'AWS', 'CI/CD'],
//     count: 5
//   }
// ]

// export default function SkillsOverview() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100)
//     return () => clearTimeout(timer)
//   }, [])

//   const handleExplore = () => {
//     window.location.href = '/skills'
//   }

//   return (
//     <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
//       {/* Enhanced Background Effects */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
//         {/* Enhanced Section Header */}
//         <div className="max-w-3xl mb-12 text-center mx-auto">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200/50 rounded-full text-sm font-bold text-blue-700 mb-5 shadow-lg">
//             <Zap size={16} className="text-blue-600" />
//             <span>Technical Expertise</span>
//             <Sparkles size={16} className="text-cyan-600" />
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
//               Technology Stack
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
//             Specialized in building scalable web applications with modern technologies
//           </p>
          
//           {/* Decorative Line */}
//           <div className="flex items-center justify-center gap-2 mt-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
//             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full"></div>
//             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//             <div className="w-12 h-1 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
//           </div>
//         </div>

//         {/* Compact Skills Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {skillHighlights.map((skill, idx) => {
//             const IconComponent = skill.icon
            
//             return (
//               <div
//                 key={skill.category}
//                 className={`group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent transition-all duration-500 hover:shadow-2xl ${skill.bgGlow} hover:-translate-y-2`}
//                 style={{
//                   opacity: isVisible ? 1 : 0,
//                   transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                   transition: `all 0.6s ease-out ${idx * 100}ms`
//                 }}
//               >
//                 {/* Gradient Top Border */}
//                 <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${skill.color} rounded-t-2xl`}></div>
                
//                 {/* Icon and Count */}
//                 <div className="flex items-center justify-between mb-4">
//                   <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
//                     <IconComponent className="text-white" size={26} strokeWidth={2.5} />
//                   </div>
//                   <div className="text-right">
//                     <div className="text-2xl font-black text-gray-900">{skill.count}+</div>
//                     <div className="text-xs font-semibold text-gray-500">skills</div>
//                   </div>
//                 </div>

//                 {/* Category */}
//                 <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
//                   {skill.category}
//                 </h3>

//                 {/* Skills Pills */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {skill.primarySkills.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-2.5 py-1 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:from-gray-100 hover:to-gray-200 hover:scale-105 transition-all cursor-default"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* View All Link */}
//                 <button
//                   onClick={handleExplore}
//                   className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-all inline-flex items-center gap-1 group-hover:gap-2"
//                 >
//                   <span>View all</span>
//                   <ArrowUpRight size={14} className="transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                 </button>
//               </div>
//             )
//           })}
//         </div>

//         {/* Enhanced CTA Section */}
//         <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-8 md:p-12 overflow-hidden border-2 border-gray-800 shadow-2xl mb-12">
//           {/* Animated Background Elements */}
//           <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
//           <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
//           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="text-center md:text-left">
//               <h3 className="text-3xl md:text-4xl font-black text-white mb-3 flex items-center justify-center md:justify-start gap-3">
//                 <span>Explore Full Tech Stack</span>
//                 <Sparkles className="text-yellow-400 animate-pulse" size={28} />
//               </h3>
//               <p className="text-gray-300 text-lg font-medium">
//                 Deep dive into all technologies, tools, and frameworks I work with
//               </p>
//             </div>
//             <button
//               onClick={handleExplore}
//               className="group/btn shrink-0 px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 hover:from-blue-400 hover:via-cyan-400 hover:to-blue-400 text-white font-bold rounded-2xl transition-all duration-300 inline-flex items-center gap-3 shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/60 hover:scale-105 relative overflow-hidden"
//             >
//               <span className="relative z-10 group-hover/btn:tracking-wide transition-all">View All Skills</span>
//               <ArrowUpRight size={22} className="relative z-10 transition-all group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:scale-110" strokeWidth={2.5} />
//               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
//             </button>
//           </div>
//         </div>

//         {/* Compact Stats Bar */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {[
//             { value: '20+', label: 'Technologies', gradient: 'from-blue-500 to-cyan-500' },
//             { value: '2+', label: 'Years Experience', gradient: 'from-purple-500 to-pink-500' },
//             { value: '10+', label: 'Projects Built', gradient: 'from-orange-500 to-red-500' },
//             { value: '100%', label: 'Client Satisfaction', gradient: 'from-green-500 to-emerald-500' }
//           ].map((stat, idx) => (
//             <div 
//               key={stat.label}
//               className="relative bg-white rounded-2xl p-5 border-2 border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
//               style={{
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: `all 0.6s ease-out ${(idx + 4) * 100}ms`
//               }}
//             >
//               <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-t-2xl`}></div>
//               <div className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
//                 {stat.value}
//               </div>
//               <div className="text-sm font-bold text-gray-600">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client';
import { useState, useEffect, useRef } from 'react'
import { 
  Code2, 
  Layers, 
  Wrench, 
  Rocket,
  ArrowUpRight,
  Zap,
  Sparkles,
  TrendingUp,
  CheckCircle2
} from 'lucide-react'

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layers,
    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    glowColor: 'rgba(59, 130, 246, 0.5)',
    skills: [
      { name: 'React.js', level: 85, status: 'expert' },
      { name: 'Next.js', level: 80, status: 'proficient' },
      { name: 'JavaScript/TypeScript', level: 85, status: 'expert' },
      { name: 'Tailwind CSS', level: 90, status: 'expert' },
      { name: 'HTML5 & CSS3', level: 90, status: 'expert' }
    ],
    description: 'Crafting pixel-perfect, responsive interfaces',
    totalCount: 5
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Code2,
    gradient: 'from-purple-500 via-pink-500 to-purple-600',
    glowColor: 'rgba(168, 85, 247, 0.5)',
    skills: [
      { name: 'Node.js', level: 75, status: 'proficient' },
      { name: 'Express.js', level: 75, status: 'proficient' },
      { name: 'REST APIs', level: 80, status: 'proficient' },
      { name: 'PostgreSQL', level: 70, status: 'intermediate' },
      { name: 'MongoDB', level: 70, status: 'intermediate' }
    ],
    description: 'Building scalable server-side solutions',
    totalCount: 5
  },
  {
    id: 'tools',
    title: 'Tools & Practices',
    icon: Wrench,
    gradient: 'from-orange-500 via-red-500 to-orange-600',
    glowColor: 'rgba(249, 115, 22, 0.5)',
    skills: [
      { name: 'Git & GitHub', level: 85, status: 'expert' },
      { name: 'VS Code', level: 90, status: 'expert' },
      { name: 'Responsive Design', level: 85, status: 'expert' },
      { name: 'Agile/Scrum', level: 70, status: 'intermediate' }
    ],
    description: 'Modern workflows and best practices',
    totalCount: 4
  },
  {
    id: 'learning',
    title: 'Currently Learning',
    icon: Rocket,
    gradient: 'from-green-500 via-emerald-500 to-green-600',
    glowColor: 'rgba(16, 185, 129, 0.5)',
    skills: [
      { name: 'Docker & Kubernetes', level: 50, status: 'learning' },
      { name: 'AWS Cloud', level: 45, status: 'learning' },
      { name: 'TypeScript Advanced', level: 60, status: 'growing' },
      { name: 'GraphQL', level: 40, status: 'learning' }
    ],
    description: 'Expanding horizons, embracing new tech',
    totalCount: 4
  }
]

const SkillCard = ({ category, index, onHover }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const IconComponent = category.icon

  return (
    <div
      className="group relative"
      onMouseEnter={() => {
        setIsHovered(true)
        onHover(category.id)
      }}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Glow Effect */}
      <div 
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${category.glowColor}, transparent)`
        }}
      />
      
      {/* Card */}
      <div className="relative bg-white rounded-2xl border-2 border-gray-200 hover:border-transparent overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
        {/* Top Gradient Bar */}
        <div className={`h-2 bg-gradient-to-r ${category.gradient}`} />
        
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                <IconComponent className="text-white" size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-600 transition-all">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium">{category.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-gray-900">{category.totalCount}</div>
              <div className="text-xs font-semibold text-gray-500">skills</div>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="space-y-2 mb-4">
            {category.skills.slice(0, 3).map((skill, idx) => (
              <div key={skill.name} className="flex items-center justify-between group/skill">
                <span className="text-sm font-semibold text-gray-700 group-hover/skill:text-gray-900 transition-colors">
                  {skill.name}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${category.gradient} transition-all duration-1000`}
                      style={{ width: isHovered ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-400">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border border-gray-200 text-sm font-bold text-gray-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
          >
            <span>{showDetails ? 'Show Less' : 'View All Skills'}</span>
            <ArrowUpRight size={14} className={`transition-transform ${showDetails ? 'rotate-180' : ''}`} />
          </button>

          {/* Expanded Details */}
          {showDetails && (
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 animate-fadeIn">
              {category.skills.slice(3).map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                    {skill.status === 'learning' && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-bold">
                        Learning
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.gradient}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-gray-400">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ModernSkillsOverview() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleExplore = () => {
    window.location.href = '/skills'
  }

  return (
    <section ref={containerRef} className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Interactive Gradient Orb */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transition-all duration-300 pointer-events-none"
        style={{
          background: activeCategory === 'frontend' ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' :
                     activeCategory === 'backend' ? 'linear-gradient(135deg, #a855f7, #ec4899)' :
                     activeCategory === 'tools' ? 'linear-gradient(135deg, #f97316, #ef4444)' :
                     activeCategory === 'learning' ? 'linear-gradient(135deg, #10b981, #34d399)' :
                     'linear-gradient(135deg, #3b82f6, #a855f7)',
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold text-white mb-6 shadow-lg hover:shadow-xl transition-shadow animate-pulse">
            <Sparkles size={18} />
            <span>Technical Expertise</span>
            <Zap size={18} />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600">
              Technology Stack
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Building modern web applications with <span className="text-blue-600 font-bold">cutting-edge technologies</span> and industry best practices
          </p>

          {/* Animated Stats */}
          <div className="flex items-center justify-center gap-8 mt-10 flex-wrap">
            {[
              { icon: CheckCircle2, value: '18+', label: 'Technologies', gradient: 'from-blue-500 to-cyan-500' },
              { icon: TrendingUp, value: '2 Years', label: 'Experience', gradient: 'from-purple-500 to-pink-500' },
              { icon: Rocket, value: '4', label: 'Core Areas', gradient: 'from-orange-500 to-red-500' }
            ].map((stat, idx) => (
              <div key={stat.label} className="flex items-center gap-3 group cursor-default">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <stat.icon className="text-white" size={24} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
              onHover={setActiveCategory}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-2xl" />
          
          <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-10 md:p-16 overflow-hidden border-2 border-gray-800">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            {/* Floating Orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-2xl">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center gap-3 justify-center md:justify-start">
                  <span>Explore Full Stack</span>
                  <Sparkles className="text-yellow-400 animate-pulse" size={36} />
                </h3>
                <p className="text-xl text-gray-300 font-medium leading-relaxed">
                  Dive deep into my complete technology arsenal. View detailed proficiency levels, years of experience, and ongoing learning journey.
                </p>
                
                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                  {['Detailed Metrics', 'Interactive Charts', 'Live Projects', 'Certificates'].map((feature) => (
                    <span key={feature} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-bold text-white border border-white/20 hover:bg-white/20 transition-all">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                onClick={handleExplore}
                className="group/btn shrink-0 relative px-10 py-5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 hover:from-blue-400 hover:via-cyan-300 hover:to-blue-400 text-gray-900 font-black text-lg rounded-2xl transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/60 hover:scale-110 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="group-hover/btn:tracking-wider transition-all">View All Skills</span>
                  <ArrowUpRight size={24} className="transition-all group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:scale-125" strokeWidth={3} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Frontend', value: '5', color: 'from-blue-500 to-cyan-500' },
            { label: 'Backend', value: '5', color: 'from-purple-500 to-pink-500' },
            { label: 'Tools', value: '4', color: 'from-orange-500 to-red-500' },
            { label: 'Learning', value: '4', color: 'from-green-500 to-emerald-500' }
          ].map((item, idx) => (
            <div 
              key={item.label}
              className="relative group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-500 text-center hover:-translate-y-2 cursor-default"
              style={{
                animation: `fadeInUp 0.6s ease-out ${(idx + 4) * 0.1}s both`
              }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color} rounded-t-2xl`} />
              <div className={`text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2 group-hover:scale-125 transition-transform`}>
                {item.value}
              </div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}