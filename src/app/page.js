import HeroSection from '@/components/home/HeroSection'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import SkillsOverview from '@/components/home/SkillsOverview'
import CallToAction from '@/components/home/CallToAction'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <SkillsOverview />
      <CallToAction />
    </>
  )
}