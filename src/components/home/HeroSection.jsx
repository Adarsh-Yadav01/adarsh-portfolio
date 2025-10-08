
// // 'use client'

// // import { useState, useEffect } from 'react'
// // import Image from 'next/image'
// // import Link from 'next/link'
// // import Button from '@/components/ui/Button'
// // import { personalInfo } from '@/data/personal-info'

// // export default function HeroSection() {
// //   const [isVisible, setIsVisible] = useState(false)
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
// //   const [textIndex, setTextIndex] = useState(0)
// //   const [typedText, setTypedText] = useState('')
// //   const [isDeleting, setIsDeleting] = useState(false)
  
// //   const rotatingTexts = [
// //     'Full Stack Developer',
// //     'UI/UX Enthusiast',
// //     'Problem Solver',
// //     'Tech Innovator'
// //   ]

// //   useEffect(() => {
// //     setIsVisible(true)
// //   }, [])

// //   // Typing effect
// //   useEffect(() => {
// //     const currentText = rotatingTexts[textIndex]
// //     const typingSpeed = isDeleting ? 50 : 100
// //     const pauseTime = isDeleting ? 500 : 2000

// //     const timer = setTimeout(() => {
// //       if (!isDeleting && typedText === currentText) {
// //         setTimeout(() => setIsDeleting(true), pauseTime)
// //       } else if (isDeleting && typedText === '') {
// //         setIsDeleting(false)
// //         setTextIndex((prev) => (prev + 1) % rotatingTexts.length)
// //       } else {
// //         setTypedText(
// //           isDeleting
// //             ? currentText.substring(0, typedText.length - 1)
// //             : currentText.substring(0, typedText.length + 1)
// //         )
// //       }
// //     }, typingSpeed)

// //     return () => clearTimeout(timer)
// //   }, [typedText, isDeleting, textIndex])

// //   const handleMouseMove = (e) => {
// //     const rect = e.currentTarget.getBoundingClientRect()
// //     setMousePosition({
// //       x: e.clientX - rect.left,
// //       y: e.clientY - rect.top
// //     })
// //   }

// //   return (
// //     <section 
// //       className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
// //       style={{ backgroundColor: 'hsl(var(--background))' }}
// //       onMouseMove={handleMouseMove}
// //     >
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         {/* Gradient Orbs */}
// //         <div 
// //           className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl opacity-20 transition-transform duration-1000"
// //           style={{ 
// //             backgroundColor: 'hsl(var(--primary))',
// //             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
// //           }}
// //         ></div>
// //         <div 
// //           className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-56 h-56 md:w-80 md:h-80 rounded-full blur-3xl opacity-20 transition-transform duration-1000"
// //           style={{ 
// //             backgroundColor: 'hsl(var(--accent))',
// //             transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
// //           }}
// //         ></div>
        
// //         {/* Grid Pattern */}
// //         <div 
// //           className="absolute inset-0 opacity-5"
// //           style={{
// //             backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
// //             backgroundSize: '50px 50px'
// //           }}
// //         ></div>
// //       </div>

// //       <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-0">
// //         <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
// //           {/* Mobile: Profile Image First */}
// //           <div className="lg:hidden relative w-full order-1">
// //             <div className="relative w-full max-w-[280px] mx-auto">
// //               {/* Decorative Elements */}
// //               <div className="absolute -top-3 -left-3 w-40 h-40 rounded-full opacity-30 blur-2xl animate-pulse-slow" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
// //               <div className="absolute -bottom-3 -right-3 w-40 h-40 rounded-full opacity-30 blur-2xl animate-pulse-slow-delayed" style={{ backgroundColor: 'hsl(var(--accent))' }}></div>
              
// //               {/* Main Image Container */}
// //               <div className="relative z-10">
// //                 <div className="relative w-64 h-64 mx-auto">
// //                   {/* Rotating Border */}
// //                   <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`, padding: '3px' }}>
// //                     <div className="w-full h-full rounded-full" style={{ backgroundColor: 'hsl(var(--background))' }}></div>
// //                   </div>
                  
// //                   {/* Image */}
// //                   <div className="absolute inset-1.5 rounded-full overflow-hidden shadow-2xl">
// //                     <Image
// //                       src={personalInfo.avatar}
// //                       alt={personalInfo.name}
// //                       fill
// //                       className="object-cover"
// //                       priority
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Floating Badges */}
// //                 <div className="absolute -top-4 -right-4 px-2.5 py-1 rounded-full backdrop-blur-md shadow-lg animate-float" style={{ backgroundColor: 'hsl(var(--background) / 0.9)', border: '1px solid hsl(var(--border))' }}>
// //                   <span className="text-lg">🚀</span>
// //                 </div>
                
// //                 <div className="absolute -bottom-4 -left-4 px-2.5 py-1 rounded-full backdrop-blur-md shadow-lg animate-float-delayed" style={{ backgroundColor: 'hsl(var(--background) / 0.9)', border: '1px solid hsl(var(--border))' }}>
// //                   <span className="text-lg">💻</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Text Content */}
// //           <div className={`order-2 lg:order-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //             {/* Badge */}
// //             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 md:mb-6 backdrop-blur-sm animate-fade-in" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
// //               <span className="relative flex h-2 w-2">
// //                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'hsl(var(--primary))' }}></span>
// //                 <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'hsl(var(--primary))' }}></span>
// //               </span>
// //               <span className="text-xs md:text-sm font-medium" style={{ color: 'hsl(var(--foreground))' }}>
// //                 Available for new opportunities
// //               </span>
// //             </div>

// //             {/* Main Heading with Gradient and Animation */}
// //             <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
// //               <span 
// //                 className="inline-block animate-slide-up"
// //                 style={{ color: 'hsl(var(--foreground))' }}
// //               >
// //                 Hi, I'm{' '}
// //               </span>
// //               <br className="sm:hidden" />
// //               <span 
// //                 className="inline-block bg-clip-text text-transparent bg-gradient-to-r animate-slide-up-delayed"
// //                 style={{ 
// //                   backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
// //                   animationDelay: '0.1s'
// //                 }}
// //               >
// //                 {personalInfo.name}
// //               </span>
// //               <span 
// //                 className="inline-block animate-bounce-in"
// //                 style={{ color: 'hsl(var(--primary))' }}
// //               >
// //                 .
// //               </span>
// //             </h1>

// //             {/* Animated Subtitle with Typing Effect */}
// //             <div className="h-20 sm:h-24 lg:h-20 mb-3 md:mb-4">
// //               <h2 className="text-base sm:text-lg lg:text-2xl font-semibold">
// //                 <span 
// //                   className="inline-block animate-fade-in"
// //                   style={{ color: 'hsl(var(--foreground))' }}
// //                 >
// //                   {personalInfo.title}
// //                 </span>
// //                 <br />
// //                 <span className="text-sm sm:text-base lg:text-xl" style={{ color: 'hsl(var(--muted-foreground))' }}>
// //                   A{' '}
// //                 </span>
// //                 <span 
// //                   className="inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r text-sm sm:text-base lg:text-xl min-h-[1.5em]"
// //                   style={{ 
// //                     backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
// //                   }}
// //                 >
// //                   {typedText}
// //                   <span className="animate-blink ml-0.5">|</span>
// //                 </span>
// //               </h2>
// //             </div>

// //             {/* Bio with Staggered Animation */}
// //             <p 
// //               className="text-sm sm:text-base leading-relaxed mb-4 md:mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-in-up px-4 lg:px-0"
// //               style={{ 
// //                 color: 'hsl(var(--muted-foreground))',
// //                 animationDelay: '0.3s'
// //               }}
// //             >
// //               {personalInfo.bio}
// //             </p>

// //             {/* Stats Row with Counter Animation */}
// //             <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-4 md:mb-6">
// //               {[
// //                 { number: '50+', label: 'Projects' },
// //                 { number: '5+', label: 'Years' },
// //                 { number: '30+', label: 'Clients' }
// //               ].map((stat, index) => (
// //                 <div 
// //                   key={index} 
// //                   className="text-center animate-scale-in group cursor-default"
// //                   style={{ animationDelay: `${0.4 + index * 0.1}s` }}
// //                 >
// //                   <div 
// //                     className="text-lg sm:text-xl lg:text-2xl font-bold transition-transform group-hover:scale-110" 
// //                     style={{ color: 'hsl(var(--primary))' }}
// //                   >
// //                     {stat.number}
// //                   </div>
// //                   <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
// //                     {stat.label}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* CTA Buttons */}
// //             <div 
// //               className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-4 md:mb-6 animate-fade-in-up px-4 lg:px-0"
// //               style={{ animationDelay: '0.5s' }}
// //             >
// //               <Button size="lg" asChild className="w-full sm:w-auto">
// //                 <Link href="/contact" className="group">
// //                   Get In Touch
// //                   <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
// //                 </Link>
// //               </Button>
// //               <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
// //                 <Link href="/projects" className="group">
// //                   View My Work
// //                   <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">↗</span>
// //                 </Link>
// //               </Button>
// //             </div>

// //             {/* Social Links */}
// //             <div 
// //               className="flex justify-center lg:justify-start gap-3 animate-fade-in-up"
// //               style={{ animationDelay: '0.6s' }}
// //             >
// //               {personalInfo.social?.map((link, index) => (
// //                 <a
// //                   key={index}
// //                   href={link.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg active:scale-95"
// //                   style={{ 
// //                     backgroundColor: 'hsl(var(--secondary))',
// //                     color: 'hsl(var(--foreground))'
// //                   }}
// //                   aria-label={link.name}
// //                 >
// //                   {link.icon || link.name.charAt(0).toUpperCase()}
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Desktop: Profile Image */}
// //           <div className="hidden lg:block relative order-3 lg:order-2">
// //             <div className="relative w-full max-w-md mx-auto">
// //               {/* Decorative Elements */}
// //               <div className="absolute -top-4 -left-4 w-56 h-56 rounded-full opacity-30 blur-2xl animate-pulse-slow" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
// //               <div className="absolute -bottom-4 -right-4 w-56 h-56 rounded-full opacity-30 blur-2xl animate-pulse-slow-delayed" style={{ backgroundColor: 'hsl(var(--accent))' }}></div>
              
// //               {/* Main Image Container */}
// //               <div className="relative z-10">
// //                 <div className="relative w-80 h-80 mx-auto">
// //                   {/* Rotating Border */}
// //                   <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`, padding: '4px' }}>
// //                     <div className="w-full h-full rounded-full" style={{ backgroundColor: 'hsl(var(--background))' }}></div>
// //                   </div>
                  
// //                   {/* Image */}
// //                   <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
// //                     <Image
// //                       src={personalInfo.avatar}
// //                       alt={personalInfo.name}
// //                       fill
// //                       className="object-cover"
// //                       priority
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Floating Badges */}
// //                 <div className="absolute -top-6 -right-6 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg animate-float" style={{ backgroundColor: 'hsl(var(--background) / 0.9)', border: '1px solid hsl(var(--border))' }}>
// //                   <span className="text-xl">🚀</span>
// //                 </div>
                
// //                 <div className="absolute -bottom-6 -left-6 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg animate-float-delayed" style={{ backgroundColor: 'hsl(var(--background) / 0.9)', border: '1px solid hsl(var(--border))' }}>
// //                   <span className="text-xl">💻</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Custom Animations */}
// //       <style jsx>{`
// //         @keyframes spin-slow {
// //           from { transform: rotate(0deg); }
// //           to { transform: rotate(360deg); }
// //         }
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-20px); }
// //         }
// //         @keyframes float-delayed {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-15px); }
// //         }
// //         @keyframes slide-up {
// //           from {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //         @keyframes bounce-in {
// //           0% {
// //             opacity: 0;
// //             transform: scale(0);
// //           }
// //           50% {
// //             transform: scale(1.2);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //         }
// //         @keyframes fade-in {
// //           from {
// //             opacity: 0;
// //           }
// //           to {
// //             opacity: 1;
// //           }
// //         }
// //         @keyframes fade-in-up {
// //           from {
// //             opacity: 0;
// //             transform: translateY(20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //         @keyframes scale-in {
// //           from {
// //             opacity: 0;
// //             transform: scale(0.8);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //         }
// //         @keyframes pulse-slow {
// //           0%, 100% { 
// //             opacity: 0.3;
// //             transform: scale(1);
// //           }
// //           50% { 
// //             opacity: 0.4;
// //             transform: scale(1.05);
// //           }
// //         }
// //         @keyframes pulse-slow-delayed {
// //           0%, 100% { 
// //             opacity: 0.3;
// //             transform: scale(1);
// //           }
// //           50% { 
// //             opacity: 0.4;
// //             transform: scale(1.05);
// //           }
// //         }
// //         @keyframes blink {
// //           0%, 100% { opacity: 1; }
// //           50% { opacity: 0; }
// //         }
        
// //         .animate-spin-slow {
// //           animation: spin-slow 20s linear infinite;
// //         }
// //         .animate-float {
// //           animation: float 3s ease-in-out infinite;
// //         }
// //         .animate-float-delayed {
// //           animation: float-delayed 3s ease-in-out infinite 1.5s;
// //         }
// //         .animate-slide-up {
// //           animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// //           opacity: 0;
// //         }
// //         .animate-slide-up-delayed {
// //           animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// //           opacity: 0;
// //           animation-delay: 0.2s;
// //         }
// //         .animate-bounce-in {
// //           animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
// //           animation-delay: 0.5s;
// //           opacity: 0;
// //         }
// //         .animate-fade-in {
// //           animation: fade-in 1s ease-out forwards;
// //           animation-delay: 0.3s;
// //           opacity: 0;
// //         }
// //         .animate-fade-in-up {
// //           animation: fade-in-up 0.8s ease-out forwards;
// //           opacity: 0;
// //         }
// //         .animate-scale-in {
// //           animation: scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// //           opacity: 0;
// //         }
// //         .animate-pulse-slow {
// //           animation: pulse-slow 4s ease-in-out infinite;
// //         }
// //         .animate-pulse-slow-delayed {
// //           animation: pulse-slow-delayed 4s ease-in-out infinite 2s;
// //         }
// //         .animate-blink {
// //           animation: blink 1s step-end infinite;
// //         }

// //         /* Mobile optimizations */
// //         @media (max-width: 640px) {
// //           @keyframes float {
// //             0%, 100% { transform: translateY(0px); }
// //             50% { transform: translateY(-10px); }
// //           }
// //           @keyframes float-delayed {
// //             0%, 100% { transform: translateY(0px); }
// //             50% { transform: translateY(-10px); }
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   )
// // }


// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import Button from '@/components/ui/Button'
// import { personalInfo } from '@/data/personal-info'

// export default function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [textIndex, setTextIndex] = useState(0)
//   const [typedText, setTypedText] = useState('')
//   const [isDeleting, setIsDeleting] = useState(false)
  
//   const rotatingTexts = [
//     'Full Stack Developer',
//     'UI/UX Enthusiast',
//     'Problem Solver',
//     'Tech Innovator'
//   ]

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   // Typing effect
//   useEffect(() => {
//     const currentText = rotatingTexts[textIndex]
//     const typingSpeed = isDeleting ? 50 : 100
//     const pauseTime = isDeleting ? 500 : 2000

//     const timer = setTimeout(() => {
//       if (!isDeleting && typedText === currentText) {
//         setTimeout(() => setIsDeleting(true), pauseTime)
//       } else if (isDeleting && typedText === '') {
//         setIsDeleting(false)
//         setTextIndex((prev) => (prev + 1) % rotatingTexts.length)
//       } else {
//         setTypedText(
//           isDeleting
//             ? currentText.substring(0, typedText.length - 1)
//             : currentText.substring(0, typedText.length + 1)
//         )
//       }
//     }, typingSpeed)

//     return () => clearTimeout(timer)
//   }, [typedText, isDeleting, textIndex])

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top
//     })
//   }

//   return (
//     <section 
//       className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
//       style={{ backgroundColor: 'hsl(var(--background))' }}
//       onMouseMove={handleMouseMove}
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Modern Gradient Orbs - Purple to Cyan */}
//         <div 
//           className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl opacity-30 transition-transform duration-1000"
//           style={{ 
//             background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//           }}
//         ></div>
//         <div 
//           className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-56 h-56 md:w-80 md:h-80 rounded-full blur-3xl opacity-30 transition-transform duration-1000"
//           style={{ 
//             background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
//             transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
//           }}
//         ></div>
//         <div 
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20"
//           style={{ 
//             background: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
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

//       <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-0">
//         <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
//           {/* Mobile: Profile Image First - SMALLER */}
//           <div className="lg:hidden relative w-full order-1">
//             <div className="relative w-full max-w-[220px] mx-auto">
//               {/* Decorative Elements */}
//               <div className="absolute -top-3 -left-3 w-32 h-32 rounded-full opacity-40 blur-2xl animate-pulse-slow" style={{ background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' }}></div>
//               <div className="absolute -bottom-3 -right-3 w-32 h-32 rounded-full opacity-40 blur-2xl animate-pulse-slow-delayed" style={{ background: 'linear-gradient(135deg, #06B6D4, #3B82F6)' }}></div>
              
//               {/* Main Image Container */}
//               <div className="relative z-10">
//                 <div className="relative w-52 h-52 mx-auto">
//                   {/* Rotating Border with Modern Gradient */}
//                   <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4, #EC4899, #F59E0B)', padding: '3px' }}>
//                     <div className="w-full h-full rounded-full" style={{ backgroundColor: 'hsl(var(--background))' }}></div>
//                   </div>
                  
//                   {/* Image */}
//                   <div className="absolute inset-1.5 rounded-full overflow-hidden shadow-2xl">
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
//                 <div className="absolute -top-3 -right-3 px-2.5 py-1 rounded-full backdrop-blur-md shadow-lg animate-float" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(124, 58, 237, 0.9))', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
//                   <span className="text-lg">🚀</span>
//                 </div>
                
//                 <div className="absolute -bottom-3 -left-3 px-2.5 py-1 rounded-full backdrop-blur-md shadow-lg animate-float-delayed" style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9), rgba(59, 130, 246, 0.9))', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
//                   <span className="text-lg">💻</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Text Content */}
//           <div className={`order-2 lg:order-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             {/* Badge with Modern Gradient */}
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 md:mb-6 backdrop-blur-sm animate-fade-in" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15))', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' }}></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' }}></span>
//               </span>
//               <span className="text-xs md:text-sm font-medium" style={{ color: 'hsl(var(--foreground))' }}>
//                 Available for new opportunities
//               </span>
//             </div>

//             {/* Main Heading with Vibrant Gradient */}
//             <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
//               <span 
//                 className="inline-block animate-slide-up"
//                 style={{ color: 'hsl(var(--foreground))' }}
//               >
//                 Hi, I'm{' '}
//               </span>
//               <br className="sm:hidden" />
//               <span 
//                 className="inline-block bg-clip-text text-transparent animate-slide-up-delayed"
//                 style={{ 
//                   backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #EC4899 100%)',
//                   animationDelay: '0.1s'
//                 }}
//               >
//                 {personalInfo.name}
//               </span>
//               <span 
//                 className="inline-block animate-bounce-in"
//                 style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
//               >
//                 .
//               </span>
//             </h1>

//             {/* Animated Subtitle with Typing Effect */}
//             <div className="h-20 sm:h-24 lg:h-20 mb-3 md:mb-4">
//               <h2 className="text-base sm:text-lg lg:text-2xl font-semibold">
//                 <span 
//                   className="inline-block animate-fade-in"
//                   style={{ color: 'hsl(var(--foreground))' }}
//                 >
//                   {personalInfo.title}
//                 </span>
//                 <br />
//                 <span className="text-sm sm:text-base lg:text-xl" style={{ color: 'hsl(var(--muted-foreground))' }}>
//                   A{' '}
//                 </span>
//                 <span 
//                   className="inline-block font-bold bg-clip-text text-transparent text-sm sm:text-base lg:text-xl min-h-[1.5em]"
//                   style={{ 
//                     backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #F59E0B 100%)',
//                   }}
//                 >
//                   {typedText}
//                   <span className="animate-blink ml-0.5">|</span>
//                 </span>
//               </h2>
//             </div>

//             {/* Bio with Staggered Animation */}
//             <p 
//               className="text-sm sm:text-base leading-relaxed mb-4 md:mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-in-up px-4 lg:px-0"
//               style={{ 
//                 color: 'hsl(var(--muted-foreground))',
//                 animationDelay: '0.3s'
//               }}
//             >
//               {personalInfo.bio}
//             </p>

//             {/* Stats Row with Modern Gradient */}
//             <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-4 md:mb-6">
//               {[
//                 { number: '50+', label: 'Projects', gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' },
//                 { number: '5+', label: 'Years', gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)' },
//                 { number: '30+', label: 'Clients', gradient: 'linear-gradient(135deg, #EC4899, #F59E0B)' }
//               ].map((stat, index) => (
//                 <div 
//                   key={index} 
//                   className="text-center animate-scale-in group cursor-default"
//                   style={{ animationDelay: `${0.4 + index * 0.1}s` }}
//                 >
//                   <div 
//                     className="text-lg sm:text-xl lg:text-2xl font-bold transition-transform group-hover:scale-110 bg-clip-text text-transparent" 
//                     style={{ backgroundImage: stat.gradient }}
//                   >
//                     {stat.number}
//                   </div>
//                   <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div 
//               className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-4 md:mb-6 animate-fade-in-up px-4 lg:px-0"
//               style={{ animationDelay: '0.5s' }}
//             >
//               <Button size="lg" asChild className="w-full sm:w-auto">
//                 <Link href="/contact" className="group">
//                   Get In Touch
//                   <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
//                 </Link>
//               </Button>
//               <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
//                 <Link href="/projects" className="group">
//                   View My Work
//                   <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">↗</span>
//                 </Link>
//               </Button>
//             </div>

//             {/* Social Links with Gradient Hover */}
//             <div 
//               className="flex justify-center lg:justify-start gap-3 animate-fade-in-up"
//               style={{ animationDelay: '0.6s' }}
//             >
//               {personalInfo.social?.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg active:scale-95 social-link"
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

//           {/* Desktop: Profile Image */}
//           <div className="hidden lg:block relative order-3 lg:order-2">
//             <div className="relative w-full max-w-md mx-auto">
//               {/* Decorative Elements with Modern Gradients */}
//               <div className="absolute -top-4 -left-4 w-56 h-56 rounded-full opacity-40 blur-2xl animate-pulse-slow" style={{ background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' }}></div>
//               <div className="absolute -bottom-4 -right-4 w-56 h-56 rounded-full opacity-40 blur-2xl animate-pulse-slow-delayed" style={{ background: 'linear-gradient(135deg, #06B6D4, #3B82F6)' }}></div>
              
//               {/* Main Image Container */}
//               <div className="relative z-10">
//                 <div className="relative w-80 h-80 mx-auto">
//                   {/* Rotating Border with Vibrant Multi-Gradient */}
//                   <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4, #EC4899, #F59E0B)', padding: '4px' }}>
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

//                 {/* Floating Badges with Gradient Backgrounds */}
//                 <div className="absolute -top-6 -right-6 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg animate-float" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(124, 58, 237, 0.9))', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
//                   <span className="text-xl">🚀</span>
//                 </div>
                
//                 <div className="absolute -bottom-6 -left-6 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg animate-float-delayed" style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9), rgba(59, 130, 246, 0.9))', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
//                   <span className="text-xl">💻</span>
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
//         @keyframes slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes bounce-in {
//           0% {
//             opacity: 0;
//             transform: scale(0);
//           }
//           50% {
//             transform: scale(1.2);
//           }
//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes scale-in {
//           from {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         @keyframes pulse-slow {
//           0%, 100% { 
//             opacity: 0.4;
//             transform: scale(1);
//           }
//           50% { 
//             opacity: 0.5;
//             transform: scale(1.05);
//           }
//         }
//         @keyframes pulse-slow-delayed {
//           0%, 100% { 
//             opacity: 0.4;
//             transform: scale(1);
//           }
//           50% { 
//             opacity: 0.5;
//             transform: scale(1.05);
//           }
//         }
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
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
//         .animate-slide-up {
//           animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//           opacity: 0;
//         }
//         .animate-slide-up-delayed {
//           animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//           opacity: 0;
//           animation-delay: 0.2s;
//         }
//         .animate-bounce-in {
//           animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
//           animation-delay: 0.5s;
//           opacity: 0;
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out forwards;
//           animation-delay: 0.3s;
//           opacity: 0;
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//           opacity: 0;
//         }
//         .animate-scale-in {
//           animation: scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//           opacity: 0;
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }
//         .animate-pulse-slow-delayed {
//           animation: pulse-slow-delayed 4s ease-in-out infinite 2s;
//         }
//         .animate-blink {
//           animation: blink 1s step-end infinite;
//         }

//         .social-link:hover {
//           background: linear-gradient(135deg, #8B5CF6, #06B6D4) !important;
//           color: white !important;
//         }

//         /* Mobile optimizations */
//         @media (max-width: 640px) {
//           @keyframes float {
//             0%, 100% { transform: translateY(0px); }
//             50% { transform: translateY(-10px); }
//           }
//           @keyframes float-delayed {
//             0%, 100% { transform: translateY(0px); }
//             50% { transform: translateY(-10px); }
//           }
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
  const [textIndex, setTextIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const rotatingTexts = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Typing effect
  useEffect(() => {
    const currentText = rotatingTexts[textIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentText) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % rotatingTexts.length)
      } else {
        setTypedText(
          isDeleting
            ? currentText.substring(0, typedText.length - 1)
            : currentText.substring(0, typedText.length + 1)
        )
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, textIndex])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24"
      style={{ backgroundColor: 'hsl(var(--background))' }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Modern Gradient Orbs - Purple to Cyan */}
        <div 
          className="absolute top-20 md:top-32 left-5 md:left-10 w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl opacity-30 transition-transform duration-1000"
          style={{ 
            background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-56 h-56 md:w-80 md:h-80 rounded-full blur-3xl opacity-30 transition-transform duration-1000"
          style={{ 
            background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20"
          style={{ 
            background: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
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

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Mobile: Profile Image First - SMALLER */}
          <div className="lg:hidden relative w-full order-1">
            <div className="relative w-full max-w-[220px] mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-3 -left-3 w-32 h-32 rounded-full opacity-40 blur-2xl animate-pulse-slow" style={{ background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' }}></div>
              <div className="absolute -bottom-3 -right-3 w-32 h-32 rounded-full opacity-40 blur-2xl animate-pulse-slow-delayed" style={{ background: 'linear-gradient(135deg, #06B6D4, #3B82F6)' }}></div>
              
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="relative w-52 h-52 mx-auto">
                  {/* Rotating Border with Modern Gradient */}
                  <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4, #EC4899, #F59E0B)', padding: '3px' }}>
                    <div className="w-full h-full rounded-full" style={{ backgroundColor: 'hsl(var(--background))' }}></div>
                  </div>
                  
                  {/* Image */}
                  <div className="absolute inset-1.5 rounded-full overflow-hidden shadow-2xl">
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
                <div className="absolute -top-3 -right-3 px-2.5 py-1 rounded-full backdrop-blur-md shadow-lg animate-float" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(124, 58, 237, 0.9))', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                  <span className="text-lg">🚀</span>
                </div>
                
                <div className="absolute -bottom-3 -left-3 px-2.5 py-1 rounded-full backdrop-blur-md shadow-lg animate-float-delayed" style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9), rgba(59, 130, 246, 0.9))', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
                  <span className="text-lg">💻</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`order-2 lg:order-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge with Modern Gradient */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 md:mb-6 backdrop-blur-sm animate-fade-in" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15))', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' }}></span>
              </span>
              <span className="text-xs md:text-sm font-medium" style={{ color: 'hsl(var(--foreground))' }}>
                Available for new opportunities
              </span>
            </div>

            {/* Main Heading with Vibrant Gradient */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
              <span 
                className="inline-block animate-slide-up"
                style={{ color: 'hsl(var(--foreground))' }}
              >
                Hi, I&apos;m{' '}
              </span>
              <br className="sm:hidden" />
              <span 
                className="inline-block bg-clip-text text-transparent animate-slide-up-delayed"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #EC4899 100%)',
                  animationDelay: '0.1s'
                }}
              >
                {personalInfo.name}
              </span>
              <span 
                className="inline-block animate-bounce-in"
                style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                .
              </span>
            </h1>

            {/* Animated Subtitle with Typing Effect */}
            <div className="h-20 sm:h-24 lg:h-20 mb-3 md:mb-4">
              <h2 className="text-base sm:text-lg lg:text-2xl font-semibold">
                <span 
                  className="inline-block animate-fade-in"
                  style={{ color: 'hsl(var(--foreground))' }}
                >
                  {personalInfo.title}
                </span>
                <br />
                <span className="text-sm sm:text-base lg:text-xl" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  A{' '}
                </span>
                <span 
                  className="inline-block font-bold bg-clip-text text-transparent text-sm sm:text-base lg:text-xl min-h-[1.5em]"
                  style={{ 
                    backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #F59E0B 100%)',
                  }}
                >
                  {typedText}
                  <span className="animate-blink ml-0.5">|</span>
                </span>
              </h2>
            </div>

            {/* Bio with Staggered Animation */}
            <p 
              className="text-sm sm:text-base leading-relaxed mb-4 md:mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-in-up px-4 lg:px-0"
              style={{ 
                color: 'hsl(var(--muted-foreground))',
                animationDelay: '0.3s'
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Stats Row with Modern Gradient */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-4 md:mb-6">
              {[
                { number: '50+', label: 'Projects', gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' },
                { number: '5+', label: 'Years', gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)' },
                { number: '30+', label: 'Clients', gradient: 'linear-gradient(135deg, #EC4899, #F59E0B)' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-scale-in group cursor-default"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div 
                    className="text-lg sm:text-xl lg:text-2xl font-bold transition-transform group-hover:scale-110 bg-clip-text text-transparent" 
                    style={{ backgroundImage: stat.gradient }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-4 md:mb-6 animate-fade-in-up px-4 lg:px-0"
              style={{ animationDelay: '0.5s' }}
            >
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/contact" className="group">
                  Get In Touch
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/projects" className="group">
                  View My Work
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">↗</span>
                </Link>
              </Button>
            </div>

            {/* Social Links with Gradient Hover */}
            <div 
              className="flex justify-center lg:justify-start gap-3 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              {personalInfo.social?.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg active:scale-95 social-link"
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

          {/* Desktop: Profile Image */}
          <div className="hidden lg:block relative order-3 lg:order-2">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements with Modern Gradients */}
              <div className="absolute -top-4 -left-4 w-56 h-56 rounded-full opacity-40 blur-2xl animate-pulse-slow" style={{ background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' }}></div>
              <div className="absolute -bottom-4 -right-4 w-56 h-56 rounded-full opacity-40 blur-2xl animate-pulse-slow-delayed" style={{ background: 'linear-gradient(135deg, #06B6D4, #3B82F6)' }}></div>
              
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="relative w-80 h-80 mx-auto">
                  {/* Rotating Border with Vibrant Multi-Gradient */}
                  <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4, #EC4899, #F59E0B)', padding: '4px' }}>
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

                {/* Floating Badges with Gradient Backgrounds */}
                <div className="absolute -top-6 -right-6 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg animate-float" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(124, 58, 237, 0.9))', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                  <span className="text-xl">🚀</span>
                </div>
                
                <div className="absolute -bottom-6 -left-6 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg animate-float-delayed" style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9), rgba(59, 130, 246, 0.9))', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
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
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(1);
          }
          50% { 
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        @keyframes pulse-slow-delayed {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(1);
          }
          50% { 
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
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
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-slide-up-delayed {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          animation-delay: 0.2s;
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slow-delayed {
          animation: pulse-slow-delayed 4s ease-in-out infinite 2s;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #8B5CF6, #06B6D4) !important;
          color: white !important;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        }
      `}</style>
    </section>
  )
}