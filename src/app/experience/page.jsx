// import Image from 'next/image'
// import { workExperience } from '@/data/experience'
// import { personalInfo } from '@/data/personal-info'

// export const metadata = {
//   title: `Experience - ${personalInfo.name}`,
//   description: 'Professional work experience and career history',
// }

// function ExperienceCard({ experience }) {
//   const isCurrentJob = !experience.endDate
  
//   return (
//     <div className="bg-white rounded-lg border shadow-sm p-8 hover:shadow-md transition-shadow">
//       <div className="flex items-start justify-between mb-4">
//         <div className="flex items-center space-x-4">
//           {experience.companyLogo && (
//             <div className="w-12 h-12 relative flex-shrink-0">
//               <Image
//                 src={experience.companyLogo}
//                 alt={`${experience.company} logo`}
//                 fill
//                 className="object-contain rounded"
//               />
//             </div>
//           )}
//           <div>
//             <h3 className="text-xl font-bold text-gray-900">{experience.position}</h3>
//             <p className="text-blue-600 font-medium">{experience.company}</p>
//             <p className="text-gray-500 text-sm">{experience.location}</p>
//           </div>
//         </div>
//         <div className="text-right flex-shrink-0">
//           <div className="text-sm font-medium text-gray-900">
//             {new Date(experience.startDate).toLocaleDateString('en-US', { 
//               year: 'numeric', 
//               month: 'short' 
//             })} - {isCurrentJob ? 'Present' : new Date(experience.endDate).toLocaleDateString('en-US', { 
//               year: 'numeric', 
//               month: 'short' 
//             })}
//           </div>
//           <div className="text-xs text-gray-500 mt-1">{experience.type}</div>
//           {isCurrentJob && (
//             <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
//               Current
//             </span>
//           )}
//         </div>
//       </div>
      
//       <p className="text-gray-600 mb-4">{experience.description}</p>
      
//       {/* Achievements */}
//       {experience.achievements && experience.achievements.length > 0 && (
//         <div className="mb-4">
//           <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
//           <ul className="list-disc list-inside space-y-1 text-gray-600">
//             {experience.achievements.map((achievement, index) => (
//               <li key={index}>{achievement}</li>
//             ))}
//           </ul>
//         </div>
//       )}
      
//       {/* Technologies */}
//       <div>
//         <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
//         <div className="flex flex-wrap gap-2">
//           {experience.technologies.map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function ExperiencePage() {
//   return (
//     <div className="py-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Work Experience
//           </h1>
//           <p className="text-xl text-gray-600">
//             My professional journey as a {personalInfo.title}
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="space-y-8">
//           {workExperience.map((experience) => (
//             <ExperienceCard key={experience.id} experience={experience} />
//           ))}
//         </div>

//         {/* Summary Stats */}
//         <div className="mt-16 bg-gray-50 rounded-lg p-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Career Highlights</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-blue-600 mb-2">
//                 {personalInfo.yearsOfExperience}+
//               </div>
//               <div className="text-gray-600">Years of Experience</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-blue-600 mb-2">
//                 {workExperience.length}+
//               </div>
//               <div className="text-gray-600">Companies Worked With</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
//               <div className="text-gray-600">Projects Delivered</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import React from 'react';

const ExperienceCards = () => {
  const personalInfo = {
    name: "Adarsh Yadav",
    title: "Full Stack Developer",
    yearsOfExperience: 2
  };

  const workExperience = [
    {
      id: 1,
      company: "Marcadeo Media Private Limited",
      position: "Full Stack Developer",
      location: "Kanpur, India",
      type: "Full-time",
      startDate: "2024-06-01",
      endDate: null,
      description: "Developing and maintaining full-stack web applications using modern technologies. Building scalable solutions with MERN stack and Next.js, focusing on performance optimization and user experience.",
      achievements: [
        "Architected and deployed multiple client projects using Next.js and PostgreSQL, improving load times by 45%",
        "Implemented RESTful APIs and integrated third-party services, enhancing application functionality",
        "Collaborated with cross-functional teams to deliver projects on time, maintaining 98% client satisfaction",
        "Optimized database queries and application performance, reducing server response time by 35%"
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Git"
      ]
    }
  ];

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years > 0 && remainingMonths > 0) {
      return `${years} yr ${remainingMonths} mo`;
    } else if (years > 0) {
      return `${years} yr`;
    } else {
      return `${remainingMonths} mo`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Professional Journey
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {personalInfo.yearsOfExperience}+ years of building exceptional web applications
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid gap-8 mb-16">
          {workExperience.map((experience) => {
            const isCurrentJob = !experience.endDate;
            const duration = calculateDuration(experience.startDate, experience.endDate);

            return (
              <div 
                key={experience.id} 
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-200"
              >
                {/* Card Header with Gradient */}
                <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-8 pb-12">
                  {/* Current Badge */}
                  {isCurrentJob && (
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold shadow-lg">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        Currently Working
                      </span>
                    </div>
                  )}

                  {/* Position & Company */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-3">
                      {experience.position}
                    </h2>
                    <div className="flex items-center gap-2 text-blue-200 text-lg font-medium mb-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                      {experience.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {experience.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {experience.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {duration}
                      </span>
                    </div>
                  </div>

                  {/* Date Range */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm px-8 py-3 border-t border-white/20">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-medium">
                        {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </span>
                      <span className="text-sm">→</span>
                      <span className="text-sm font-medium">
                        {isCurrentJob ? 'Present' : new Date(experience.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 space-y-6">
                  {/* Description */}
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200"></div>

                  {/* Achievements Section */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        Key Achievements
                      </h3>
                      <div className="space-y-3">
                        {experience.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                            <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                              {idx + 1}
                            </span>
                            <p className="flex-1 text-gray-700 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies Section */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="group px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-blue-50 hover:to-purple-50 text-gray-800 text-sm font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Professional Snapshot</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-5xl font-bold text-white mb-2">
                {personalInfo.yearsOfExperience}+
              </div>
              <div className="text-blue-200 font-medium">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-5xl font-bold text-white mb-2">
                {workExperience.length}
              </div>
              <div className="text-blue-200 font-medium">Companies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-5xl font-bold text-white mb-2">
                10+
              </div>
              <div className="text-blue-200 font-medium">Technologies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-5xl font-bold text-white mb-2">
                5+
              </div>
              <div className="text-blue-200 font-medium">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCards;
