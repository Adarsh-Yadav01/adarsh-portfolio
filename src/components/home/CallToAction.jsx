
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function CallToAction() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.15),transparent_50%)]"></div>
      
      {/* Minimal animated orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Minimal grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Professional status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-400/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-medium text-blue-200 tracking-wide">Accepting New Clients</span>
          </div>

          {/* Compact, professional headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-white">
            Ready to Elevate Your Digital Presence?
          </h2>

          {/* Professional, results-oriented copy */}
          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with an experienced professional dedicated to delivering high-quality solutions that drive measurable results. Let's discuss how I can help achieve your business objectives.
          </p>
          
          {/* Eye-catching CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button 
              size="lg" 
              variant="secondary" 
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto min-w-[200px] border-2 border-blue-400/50"
            >
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-bold text-base py-3">
                Schedule Consultation
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity"></span>
              </Link>
            </Button>
            
            {/* <Button 
              size="lg" 
              variant="outline" 
              className="group relative border-2 border-white/60 text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl w-full sm:w-auto min-w-[200px]" 
              asChild
            >
              <Link href="/resume" className="inline-flex items-center justify-center gap-2 font-bold text-base py-3">
                <svg 
                  className="w-5 h-5 group-hover:scale-110 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Credentials
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all rounded-lg"></span>
              </Link>
            </Button> */}
          </div>

          {/* Compact, professional trust indicators */}
          <div className="pt-6 border-t border-slate-700/50">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 text-slate-300">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-white ml-1">5.0</span>
                <span className="text-xs text-slate-400">Client Rating</span>
              </div>
              
              <div className="h-4 w-px bg-slate-700 hidden sm:block"></div>
              
              <div className="flex items-center gap-2 text-slate-300">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-white">100%</span>
                <span className="text-xs text-slate-400">On-Time Delivery</span>
              </div>
              
              <div className="h-4 w-px bg-slate-700 hidden sm:block"></div>
              
              <div className="flex items-center gap-2 text-slate-300">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-white">24h</span>
                <span className="text-xs text-slate-400">Response Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
    </section>
  )
}