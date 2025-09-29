import Link from 'next/link'
import Button from '@/components/ui/Button'
import { skillCategories } from '@/data/skills'

export default function SkillsOverview() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
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
          {skillCategories.map((category, idx) => (
            <div 
              key={category.name} 
              className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Icon or decorative element */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-lg font-bold">
                  {category.name.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              
              <ul className="space-y-2">
                {category.skills.slice(0, 4).map((skill) => (
                  <li 
                    key={skill.name} 
                    className="text-gray-600 text-sm flex items-center group/item"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5 group-hover/item:scale-150 transition-transform"></span>
                    <span className="group-hover/item:text-gray-900 transition-colors">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
              
              {category.skills.length > 4 && (
                <p className="text-xs text-gray-400 mt-2.5 font-medium">
                  +{category.skills.length - 4} more
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            asChild
            className="group relative overflow-hidden"
          >
            <Link href="/skills" className="inline-flex items-center gap-2">
              View All Skills
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}