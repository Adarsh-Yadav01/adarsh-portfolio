// 'use client'

// import Link from 'next/link'
// import { useState } from 'react'
// import { navigationItems } from '@/data/navigation'
// import { personalInfo } from '@/data/personal-info'

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold text-gray-900">
//             {personalInfo.name}
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navigationItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden p-2"
//           >
//             <div className="w-6 h-6 flex flex-col justify-center items-center">
//               <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
//               <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
//               <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
//             </div>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <nav className="md:hidden py-4 space-y-4">
//             {navigationItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }


'use client'

import Link from 'next/link'
import { useState } from 'react'
import { navigationItems } from '@/data/navigation'
import { personalInfo } from '@/data/personal-info'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="group relative text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300">
            {personalInfo.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg group"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gradient-to-r from-blue-600 to-purple-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gradient-to-r from-blue-600 to-purple-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gradient-to-r from-blue-600 to-purple-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 font-medium transition-all duration-300 rounded-lg hover:translate-x-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}