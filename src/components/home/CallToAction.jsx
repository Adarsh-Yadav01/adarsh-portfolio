import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-2 h-2 bg-white rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-20 left-32 w-2 h-2 bg-white rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-32 left-20 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-25" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-40 w-1 h-1 bg-blue-200 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-purple-200 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Decorative icon with glow effect */}
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl mb-5 border border-white/20 shadow-lg shadow-blue-500/20 hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's work together to bring your ideas to life. I'm always excited to take on new challenges and create something amazing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="secondary" 
            asChild
            className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              Get In Touch
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm bg-white/5 group transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" 
            asChild
          >
            <Link href="/resume" className="inline-flex items-center gap-2">
              <svg 
                className="w-5 h-5 group-hover:animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </Link>
          </Button>
        </div>

        {/* Trust indicators with enhanced styling */}
        <div className="mt-10 pt-6 border-t border-white/20">
          <p className="text-blue-100 text-sm mb-4 font-medium uppercase tracking-wider">Trusted by clients worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold">5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold">Fast Response</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}