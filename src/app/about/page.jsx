// // 

// import Image from 'next/image'
// import { personalInfo } from '@/data/personal-info'
// import { workExperience } from '@/data/experience'

// export const metadata = {
//   title: `About - ${personalInfo.name}`,
//   description: `Learn more about ${personalInfo.name}, ${personalInfo.title}`,
// }

// export default function AboutPage() {
//   return (
//     <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Hero Section */}
//         <div className="text-center mb-20">
//           <div className="relative w-48 h-48 mx-auto mb-8 group">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
//             <div className="relative w-full h-full rounded-full ring-4 ring-white shadow-2xl overflow-hidden">
//               <Image
//                 src={personalInfo.avatar}
//                 alt={personalInfo.name}
//                 fill
//                 className="object-cover transform group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>
//           </div>
//           <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
//             <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               {personalInfo.title}
//             </span>
//           </div>
//           <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text">
//             About Me
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Crafting exceptional digital experiences with {personalInfo.yearsOfExperience} years of expertise
//           </p>
//         </div>

//         {/* Biography */}
//         <div className="mb-20">
//           <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
//             <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
//               <p className="text-lg">
//                 Hello! I'm <span className="font-semibold text-gray-900">{personalInfo.nickname || personalInfo.name}</span>, a passionate {personalInfo.title} 
//                 based in <span className="font-semibold text-gray-900">{personalInfo.location}</span>. I love creating digital experiences that make a difference.
//               </p>
//               <p className="text-lg">
//                 My journey in web development started {personalInfo.yearsOfExperience} years ago, and since then 
//                 I've had the privilege of working with amazing teams and clients to bring ideas to life. 
//                 I specialize in full-stack development with a focus on modern JavaScript technologies.
//               </p>
//               <p className="text-lg">
//                 When I'm not coding, you can find me exploring new technologies, contributing to open-source 
//                 projects, or sharing my knowledge through blog posts and mentoring.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//           <div className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <div className="relative">
//               <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 transform group-hover:scale-110 transition-transform duration-300">
//                 {workExperience.length}+
//               </div>
//               <div className="text-gray-600 font-medium">Years Experience</div>
//             </div>
//           </div>
          
//           <div className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <div className="relative">
//               <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 transform group-hover:scale-110 transition-transform duration-300">
//                 50+
//               </div>
//               <div className="text-gray-600 font-medium">Projects Completed</div>
//             </div>
//           </div>
          
//           <div className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <div className="relative">
//               <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 transform group-hover:scale-110 transition-transform duration-300">
//                 20+
//               </div>
//               <div className="text-gray-600 font-medium">Happy Clients</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react';
import { MapPin, Code, Award, Users, TrendingUp } from 'lucide-react';

const personalInfo = {
  name: "Adarsh Yadav",
  nickname: "Sunny",
  title: "Full Stack Developer",
  location: "Kanpur, Uttar Pradesh, India",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating scalable applications and solving complex problems.",
  avatar: "/images/profile/avatar.jpg",
  yearsOfExperience: 2
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative w-full h-full rounded-full ring-4 ring-white shadow-2xl overflow-hidden">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.title}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            aka <span className="text-blue-600 font-semibold">"{personalInfo.nickname}"</span>
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="font-medium">{personalInfo.location}</span>
          </div>

          {/* Bio */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{personalInfo.yearsOfExperience}+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">Projects Done</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">30+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Hello! I'm <span className="font-semibold text-gray-900">Sunny (Adarsh Yadav)</span>, a passionate 
                Full Stack Developer based in <span className="font-semibold text-gray-900">{personalInfo.location}</span>. 
                I specialize in building modern, scalable web applications that solve real-world problems.
              </p>

              <p className="text-lg">
                My journey in web development started <span className="font-semibold text-gray-900">{personalInfo.yearsOfExperience} years ago</span> with 
                freelance projects. Since then, I've delivered <span className="font-semibold text-gray-900">50+ projects</span> ranging 
                from simple landing pages to complex full-stack applications for businesses across India.
              </p>

              <p className="text-lg">
                I'm proficient in the <span className="font-semibold text-gray-900">MERN stack</span> (MongoDB, Express.js, React, Node.js) 
                and specialize in building responsive, performant applications. Whether it's an e-commerce platform, business website, 
                or custom web application, I focus on clean code, user experience, and scalability.
              </p>

              <p className="text-lg">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and helping 
                local businesses establish their digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs', 'AWS'].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                Tools & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'VS Code', 'Postman', 'CI/CD', 'Linux'].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                Other
              </h3>
              <div className="flex flex-wrap gap-2">
                {['WordPress', 'Shopify', 'SEO', 'UI/UX', 'API Integration', 'Payment Gateways'].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-3">Let's Work Together!</h2>
            <p className="text-blue-100 mb-6">
              Have a project in mind? Let's discuss how I can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-colors shadow-lg">
                  Get In Touch
                </button>
              </a>
              <a href="/projects">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl font-semibold transition-colors">
                  View My Work
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}