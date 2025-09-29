import Image from 'next/image'
import { workExperience } from '@/data/experience'
import { personalInfo } from '@/data/personal-info'

export const metadata = {
  title: `Experience - ${personalInfo.name}`,
  description: 'Professional work experience and career history',
}

function ExperienceCard({ experience }) {
  const isCurrentJob = !experience.endDate
  
  return (
    <div className="bg-white rounded-lg border shadow-sm p-8 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          {experience.companyLogo && (
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src={experience.companyLogo}
                alt={`${experience.company} logo`}
                fill
                className="object-contain rounded"
              />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-900">{experience.position}</h3>
            <p className="text-blue-600 font-medium">{experience.company}</p>
            <p className="text-gray-500 text-sm">{experience.location}</p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-sm font-medium text-gray-900">
            {new Date(experience.startDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short' 
            })} - {isCurrentJob ? 'Present' : new Date(experience.endDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short' 
            })}
          </div>
          <div className="text-xs text-gray-500 mt-1">{experience.type}</div>
          {isCurrentJob && (
            <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              Current
            </span>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{experience.description}</p>
      
      {/* Achievements */}
      {experience.achievements && experience.achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {experience.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Technologies */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ExperiencePage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h1>
          <p className="text-xl text-gray-600">
            My professional journey as a {personalInfo.title}
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {workExperience.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Career Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {personalInfo.yearsOfExperience}+
              </div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {workExperience.length}+
              </div>
              <div className="text-gray-600">Companies Worked With</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}