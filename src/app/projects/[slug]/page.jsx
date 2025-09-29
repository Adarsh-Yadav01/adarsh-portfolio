
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { personalInfo } from '@/data/personal-info'
import ProjectDetailPage from './ProjectDetailPage'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - ${personalInfo.name}`,
    description: project.shortDescription,
  }
}

export default function Page({ params }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailPage project={project} />
}
