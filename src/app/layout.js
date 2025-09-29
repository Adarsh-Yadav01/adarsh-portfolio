import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { personalInfo } from '@/data/personal-info'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.bio,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-WWBHNC24XR" />
        
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}