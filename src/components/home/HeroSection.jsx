
// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import Button from '@/components/ui/Button'
// import { personalInfo } from '@/data/personal-info'

// export default function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top
//     })
//   }

//   return (
//     <section 
//       className="relative py-20 lg:py-32 overflow-hidden"
//       style={{ backgroundColor: 'hsl(var(--background))' }}
//       onMouseMove={handleMouseMove}
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Gradient Orbs */}
//         <div 
//           className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 transition-transform duration-1000"
//           style={{ 
//             backgroundColor: 'hsl(var(--primary))',
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//           }}
//         ></div>
//         <div 
//           className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 transition-transform duration-1000"
//           style={{ 
//             backgroundColor: 'hsl(var(--accent))',
//             transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
//           }}
//         ></div>
        
//         {/* Grid Pattern */}
//         <div 
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }}
//         ></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Text Content */}
//           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-sm" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'hsl(var(--primary))' }}></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'hsl(var(--primary))' }}></span>
//               </span>
//               <span className="text-sm font-medium" style={{ color: 'hsl(var(--foreground))' }}>
//                 Available for new opportunities
//               </span>
//             </div>

//             {/* Main Heading with Gradient */}
//             <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
//               <span style={{ color: 'hsl(var(--foreground))' }}>Hi, I'm </span>
//               <span 
//                 className="inline-block bg-clip-text text-transparent bg-gradient-to-r"
//                 style={{ 
//                   backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
//                 }}
//               >
//                 {personalInfo.name}
//               </span>
//               <span style={{ color: 'hsl(var(--primary))' }}>.</span>
//             </h1>

//             {/* Subtitle with Typing Effect */}
//             <h2 className="text-xl lg:text-3xl font-semibold mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
//               <span style={{ color: 'hsl(var(--foreground))' }}>{personalInfo.title}</span> passionate about creating amazing web experiences
//             </h2>

//             {/* Bio */}
//             <p className="text-lg leading-relaxed mb-8" style={{ color: 'hsl(var(--muted-foreground))' }}>
//               {personalInfo.bio}
//             </p>

//             {/* Stats Row */}
//             <div className="flex gap-6 mb-8">
//               {[
//                 { number: '50+', label: 'Projects' },
//                 { number: '5+', label: 'Years Exp' },
//                 { number: '30+', label: 'Happy Clients' }
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-2xl lg:text-3xl font-bold" style={{ color: 'hsl(var(--primary))' }}>
//                     {stat.number}
//                   </div>
//                   <div className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" asChild>
//                 <Link href="/contact" className="group">
//                   Get In Touch
//                   <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
//                 </Link>
//               </Button>
//               <Button variant="outline" size="lg" asChild>
//                 <Link href="/projects" className="group">
//                   View My Work
//                   <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">↗</span>
//                 </Link>
//               </Button>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-4 mt-8">
//               {personalInfo.social?.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
//                   style={{ 
//                     backgroundColor: 'hsl(var(--secondary))',
//                     color: 'hsl(var(--foreground))'
//                   }}
//                   aria-label={link.name}
//                 >
//                   {link.icon || link.name.charAt(0).toUpperCase()}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Profile Image with Enhanced Design */}
//           <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="relative w-full max-w-lg mx-auto">
//               {/* Decorative Elements */}
//               <div className="absolute -top-4 -left-4 w-72 h-72 rounded-full opacity-30 blur-2xl" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
//               <div className="absolute -bottom-4 -right-4 w-72 h-72 rounded-full opacity-30 blur-2xl" style={{ backgroundColor: 'hsl(var(--accent))' }}></div>
              
//               {/* Main Image Container */}
//               <div className="relative z-10">
//                 <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
//                   {/* Rotating Border */}
//                   <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`, padding: '4px' }}>
//                     <div className="w-full h-full rounded-full" style={{ backgroundColor: 'hsl(var(--background))' }}></div>
//                   </div>
                  
//                   {/* Image */}
//                   <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
//                     <Image
//                       src={personalInfo.avatar}
//                       alt={personalInfo.name}
//                       fill
//                       className="object-cover"
//                       priority
//                     />
//                   </div>
//                 </div>

//                 {/* Floating Badges */}
//                 <div className="absolute -top-8 -right-8 px-4 py-2 rounded-full backdrop-blur-md shadow-lg animate-float" style={{ backgroundColor: 'hsl(var(--background) / 0.9)', border: '1px solid hsl(var(--border))' }}>
//                   <span className="text-2xl">🚀</span>
//                 </div>
                
//                 <div className="absolute -bottom-8 -left-8 px-4 py-2 rounded-full backdrop-blur-md shadow-lg animate-float-delayed" style={{ backgroundColor: 'hsl(var(--background) / 0.9)', border: '1px solid hsl(var(--border))' }}>
//                   <span className="text-2xl">💻</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 3s ease-in-out infinite 1.5s;
//         }
//       `}</style>
//     </section>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { personalInfo } from '@/data/personal-info'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section 
      className="relative py-12 lg:py-20 overflow-hidden"
      style={{ backgroundColor: 'hsl(var(--background))' }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20 transition-transform duration-1000"
          style={{ 
            backgroundColor: 'hsl(var(--primary))',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 transition-transform duration-1000"
          style={{ 
            backgroundColor: 'hsl(var(--accent))',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        ></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'hsl(var(--primary))' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'hsl(var(--primary))' }}></span>
              </span>
              <span className="text-sm font-medium" style={{ color: 'hsl(var(--foreground))' }}>
                Available for new opportunities
              </span>
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              <span style={{ color: 'hsl(var(--foreground))' }}>Hi, I'm </span>
              <span 
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
                }}
              >
                {personalInfo.name}
              </span>
              <span style={{ color: 'hsl(var(--primary))' }}>.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg lg:text-2xl font-semibold mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <span style={{ color: 'hsl(var(--foreground))' }}>{personalInfo.title}</span> passionate about creating amazing web experiences
            </h2>

            {/* Bio */}
            <p className="text-base leading-relaxed mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
              {personalInfo.bio}
            </p>

            {/* Stats Row */}
            <div className="flex gap-6 mb-6">
              {[
                { number: '50+', label: 'Projects' },
                { number: '5+', label: 'Years Exp' },
                { number: '30+', label: 'Happy Clients' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl lg:text-2xl font-bold" style={{ color: 'hsl(var(--primary))' }}>
                    {stat.number}
                  </div>
                  <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link href="/contact" className="group">
                  Get In Touch
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects" className="group">
                  View My Work
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">↗</span>
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {personalInfo.social?.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                  style={{ 
                    backgroundColor: 'hsl(var(--secondary))',
                    color: 'hsl(var(--foreground))'
                  }}
                  aria-label={link.name}
                >
                  {link.icon || link.name.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image with Enhanced Design */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-56 h-56 rounded-full opacity-30 blur-2xl" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
              <div className="absolute -bottom-4 -right-4 w-56 h-56 rounded-full opacity-30 blur-2xl" style={{ backgroundColor: 'hsl(var(--accent))' }}></div>
              
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="relative w-72 h-72 lg:w-80 lg:h-80 mx-auto">
                  {/* Rotating Border */}
                  <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`, padding: '4px' }}>
                    <div className="w-full h-full rounded-full" style={{ backgroundColor: 'hsl(var(--background))' }}></div>
                  </div>
                  
                  {/* Image */}
                  <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-6 -right-6 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg animate-float" style={{ backgroundColor: 'hsl(var(--background) / 0.9)', border: '1px solid hsl(var(--border))' }}>
                  <span className="text-xl">🚀</span>
                </div>
                
                <div className="absolute -bottom-6 -left-6 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg animate-float-delayed" style={{ backgroundColor: 'hsl(var(--background) / 0.9)', border: '1px solid hsl(var(--border))' }}>
                  <span className="text-xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  )
}