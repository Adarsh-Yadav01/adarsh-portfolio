'use client'

import { useRef, useEffect } from 'react'
import { Download, Mail, Phone, MapPin, Linkedin, Github, Globe, Calendar, Building, GraduationCap, Code, Award, User } from 'lucide-react'

export default function ResumePage() {
  const resumeRef = useRef()

  const personalInfo = {
    name: "Adarsh Yadav",
    title: "Full Stack Developer",
    email: "adarsh.yadav.dev@gmail.com",
    phone: "+91 8840820604",
    location: "Kanpur, Uttar Pradesh, India",
    linkedin: "linkedin.com/in/adarsh-kumar",
    github: "github.com/adarsh-dev",
    website: "adarshyadav.dev",
    summary: "Passionate Full Stack Developer with 4+ years of experience building scalable web applications. Expertise in React.js, Node.js, and modern web technologies. Strong problem-solving skills and a track record of delivering high-quality solutions."
  }

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "Jan 2023 - Present",
      description: [
        "Led development of scalable web applications serving 100K+ users using React.js and Node.js",
        "Implemented microservices architecture reducing system latency by 40%",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with cross-functional teams to deliver projects 20% ahead of schedule"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovation Lab",
      location: "Noida, UP",
      duration: "Jun 2021 - Dec 2022",
      description: [
        "Developed responsive web applications using React.js, Next.js, and Express.js",
        "Integrated third-party APIs and payment gateways for e-commerce platforms",
        "Optimized database queries reducing load times by 60%",
        "Implemented automated testing increasing code coverage to 90%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Lucknow, UP",
      duration: "Aug 2020 - May 2021",
      description: [
        "Built modern user interfaces using React.js and Tailwind CSS",
        "Converted Figma designs to pixel-perfect responsive components",
        "Improved website performance achieving 95+ Google Lighthouse scores",
        "Collaborated with UX designers to enhance user experience"
      ]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology (IIT)",
      location: "Kanpur, UP",
      duration: "2016 - 2020",
      grade: "CGPA: 8.5/10",
      highlights: ["Dean's List", "Computer Science Society Member"]
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Central Board of Secondary Education",
      location: "Kanpur, UP",
      duration: "2014 - 2016",
      grade: "Percentage: 92%",
      highlights: ["Science Stream", "Mathematics Olympiad Participant"]
    }
  ]

  const skills = {
    "Frontend": ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"],
    "Backend": ["Node.js", "Express.js", "Python", "Django", "FastAPI", "REST APIs", "GraphQL"],
    "Database": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    "Tools & Technologies": ["Git", "Docker", "AWS", "Vercel", "Netlify", "Jenkins", "Jest", "Cypress"],
    "Soft Skills": ["Team Leadership", "Problem Solving", "Communication", "Project Management", "Agile/Scrum"]
  }

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe API"],
      achievements: ["Processed $100K+ in transactions", "99.9% uptime"]
    },
    {
      name: "Task Management App",
      description: "Collaborative project management tool for teams",
      technologies: ["React.js", "Express.js", "PostgreSQL", "Socket.io"],
      achievements: ["500+ active users", "Real-time collaboration"]
    },
    {
      name: "Learning Management System",
      description: "Online education platform with video streaming",
      technologies: ["Vue.js", "Django", "MySQL", "AWS S3"],
      achievements: ["1000+ enrolled students", "Mobile responsive"]
    }
  ]

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "Meta React Developer Certificate"
  ]

  // Static PDF download function (fallback)
  const downloadStaticPDF = () => {
    const link = document.createElement('a')
    link.href = '/resume-adarsh-kumar.pdf'  // Ensure this file exists in your public folder as a fallback
    link.download = 'Adarsh_Yadav_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Print function with adjustments for one-page fit
  const handlePrint = () => {
    window.print()
  }

  // Improved Generate PDF from HTML using html2pdf
  const generatePDF = async () => {
    if (typeof window !== 'undefined') {
      const html2pdf = (await import('html2pdf.js')).default
      const element = resumeRef.current
      element.classList.add('pdf-mode') // Apply condensed styles for PDF

      const opt = {
        margin: 0.2, // Reduced margin for better fit
        filename: 'Adarsh_Yadav_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false }, // Improved quality and performance
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css'], avoid: ['.resume-section'] } // Avoid page breaks in sections
      }
      
      try {
        await html2pdf().set(opt).from(element).save()
      } catch (error) {
        console.error('PDF generation failed:', error)
        // Fallback to static PDF if available, or print
        downloadStaticPDF()
      } finally {
        element.classList.remove('pdf-mode') // Remove condensed styles after generation
      }
    } else {
      // Fallback if html2pdf not available
      downloadStaticPDF()
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Action Buttons - Only visible on screen, hidden in print */}
      <div className="print:hidden pdf-mode:hidden bg-secondary py-3 sm:py-4 md:sticky top-0 z-10 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Static PDF Download (Fallback) */}
            <button 
              onClick={downloadStaticPDF}
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download Static PDF</span>
            </button>
            
            {/* Generate Dynamic PDF from HTML */}
            <button 
              onClick={generatePDF}
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Generate PDF</span>
            </button>
            
            {/* Print Button */}
            <button 
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 bg-secondary text-secondary-foreground px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-secondary/90 transition-colors border border-border text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print</span>
            </button>

            {/* Share Button */}
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Adarsh Yadav - Resume',
                    text: 'Check out my professional resume',
                    url: window.location.href
                  })
                } else {
                  navigator.clipboard.writeText(window.location.href)
                  alert('Resume URL copied to clipboard!')
                }
              }}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div ref={resumeRef} className="resume-content print:grid-cols-1 pdf-mode:grid-cols-1">
        {/* Header */}
        <div className="bg-primary text-primary-foreground print:bg-gray-800 print:text-white pdf-mode:bg-gray-800 pdf-mode:text-white">
          <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 print:py-2 pdf-mode:py-2 print:px-2 pdf-mode:px-2">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-4 sm:mb-6 lg:mb-0 print:mb-1 pdf-mode:mb-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 print:text-xl pdf-mode:text-xl">{personalInfo.name}</h1>
                <p className="text-lg sm:text-xl lg:text-2xl opacity-90 print:text-sm pdf-mode:text-sm">{personalInfo.title}</p>
              </div>
              <div className="flex flex-col space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base print:text-2xs pdf-mode:text-2xs print:space-y-0.5 pdf-mode:space-y-0.5">
                <div className="flex items-center space-x-2 print:space-x-1 pdf-mode:space-x-1">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 print:w-2 print:h-2 pdf-mode:w-2 pdf-mode:h-2" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2 print:space-x-1 pdf-mode:space-x-1">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 print:w-2 print:h-2 pdf-mode:w-2 pdf-mode:h-2" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2 print:space-x-1 pdf-mode:space-x-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 print:w-2 print:h-2 pdf-mode:w-2 pdf-mode:h-2" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 mt-2 sm:mt-4 print:mt-1 pdf-mode:mt-1 print:space-x-1 pdf-mode:space-x-1">
                  <a href={`https://${personalInfo.linkedin}`} className="flex items-center space-x-1 hover:opacity-80 print:space-x-0.5 pdf-mode:space-x-0.5">
                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 print:w-2 print:h-2 pdf-mode:w-2 pdf-mode:h-2" />
                    <span className="hidden sm:inline print:hidden pdf-mode:hidden">LinkedIn</span>
                  </a>
                  <a href={`https://${personalInfo.github}`} className="flex items-center space-x-1 hover:opacity-80 print:space-x-0.5 pdf-mode:space-x-0.5">
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 print:w-2 print:h-2 pdf-mode:w-2 pdf-mode:h-2" />
                    <span className="hidden sm:inline print:hidden pdf-mode:hidden">GitHub</span>
                  </a>
                  <a href={`https://${personalInfo.website}`} className="flex items-center space-x-1 hover:opacity-80 print:space-x-0.5 pdf-mode:space-x-0.5">
                    <Globe className="w-3 h-3 sm:w-4 sm:h-4 print:w-2 print:h-2 pdf-mode:w-2 pdf-mode:h-2" />
                    <span className="hidden sm:inline print:hidden pdf-mode:hidden">Website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 print:py-1 pdf-mode:py-1 print:px-2 pdf-mode:px-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 print:gap-1 pdf-mode:gap-1 print:grid-cols-1 pdf-mode:grid-cols-1">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8 print:space-y-0.5 pdf-mode:space-y-0.5 print:lg:col-span-2 pdf-mode:lg:col-span-1">
              {/* Professional Summary */}
              <section className="resume-section">
                <div className="flex items-center space-x-2 mb-2 sm:mb-4 print:mb-0.5 pdf-mode:mb-0.5">
                  <User className="w-4 h-4 sm:w-6 sm:h-6 print:w-2 print:h-2 pdf-mode:w-2 pdf-mode:h-2 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold print:text-xs pdf-mode:text-xs">Professional Summary</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base print:text-2xs pdf-mode:text-2xs print:text-black pdf-mode:text-black">{personalInfo.summary}</p>
              </section>

              {/* Experience */}
              <section className="resume-section">
                <div className="flex items-center space-x-2 mb-3 sm:mb-6 print:mb-0.5 pdf-mode:mb-0.5">
                  <Building className="w-4 h-4 sm:w-6 sm:h-6 print:w-2 print:h-2 pdf-mode:w-2 pdf-mode:h-2 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold print:text-xs pdf-mode:text-xs">Work Experience</h2>
                </div>
                <div className="space-y-3 sm:space-y-6 print:space-y-0.5 pdf-mode:space-y-0.5">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4 sm:pl-6 pb-3 sm:pb-6 print:border-l-2 print:pl-1 print:pb-0.5 pdf-mode:border-l-2 pdf-mode:pl-1 pdf-mode:pb-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 sm:mb-2 print:mb-0 pdf-mode:mb-0">
                        <h3 className="text-lg sm:text-xl font-semibold print:text-2xs pdf-mode:text-2xs">{exp.title}</h3>
                        <div className="flex items-center space-x-1 text-muted-foreground print:text-gray-600 print:text-3xs pdf-mode:text-3xs pdf-mode:text-gray-600">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 print:w-1.5 print:h-1.5 pdf-mode:w-1.5 pdf-mode:h-1.5" />
                          <span className="text-xs sm:text-sm print:text-3xs pdf-mode:text-3xs">{exp.duration}</span>
                        </div>
                      </div>
                      <p className="text-primary font-medium mb-1 print:text-black print:text-3xs pdf-mode:text-3xs pdf-mode:text-black print:mb-0 pdf-mode:mb-0">{exp.company} • {exp.location}</p>
                      <ul className="space-y-1 text-muted-foreground print:text-black print:text-3xs pdf-mode:text-3xs pdf-mode:text-black print:space-y-0 pdf-mode:space-y-0">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start space-x-1 sm:space-x-2 print:space-x-0.5 pdf-mode:space-x-0.5">
                            <span className="text-primary mt-0.5 print:text-black print:text-3xs pdf-mode:text-3xs print:mt-0 pdf-mode:mt-0">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Key Projects */}
              <section className="resume-section">
                <div className="flex items-center space-x-2 mb-3 sm:mb-6 print:mb-0.5 pdf-mode:mb-0.5">
                  <Code className="w-4 h-4 sm:w-6 sm:h-6 print:w-2 print:h-2 pdf-mode:w-2 pdf-mode:h-2 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold print:text-xs pdf-mode:text-xs">Key Projects</h2>
                </div>
                <div className="grid gap-3 sm:gap-6 print:gap-0.5 pdf-mode:gap-0.5">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-secondary p-4 sm:p-6 rounded-lg print:bg-gray-50 print:p-0.5 print:rounded-none pdf-mode:bg-gray-50 pdf-mode:p-0.5 pdf-mode:rounded-none">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 print:text-2xs pdf-mode:text-2xs print:mb-0 pdf-mode:mb-0">{project.name}</h3>
                      <p className="text-muted-foreground mb-1 sm:mb-3 print:text-black print:text-3xs pdf-mode:text-3xs print:mb-0 pdf-mode:mb-0">{project.description}</p>
                      <div className="mb-1 sm:mb-3 print:mb-0 pdf-mode:mb-0">
                        <div className="flex flex-wrap gap-1 sm:gap-2 print:gap-0.5 pdf-mode:gap-0.5">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="bg-primary text-primary-foreground px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm print:bg-gray-200 print:text-black print:text-3xs print:px-0.5 print:py-0 pdf-mode:bg-gray-200 pdf-mode:text-black pdf-mode:text-3xs pdf-mode:px-0.5 pdf-mode:py-0">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-0.5 sm:space-y-1 print:space-y-0 pdf-mode:space-y-0">
                        {project.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-muted-foreground print:text-black print:text-3xs pdf-mode:text-3xs pdf-mode:text-black print:space-x-0.5 pdf-mode:space-x-0.5">
                            <Award className="w-3 h-3 sm:w-3 sm:h-3 print:w-1.5 print:h-1.5 pdf-mode:w-1.5 pdf-mode:h-1.5 text-primary print:text-black pdf-mode:text-black" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 print:space-y-0.5 pdf-mode:space-y-0.5">
              {/* Skills */}
              <section className="resume-section">
                <div className="flex items-center space-x-2 mb-2 sm:mb-4 print:mb-0.5 pdf-mode:mb-0.5">
                  <Code className="w-4 h-4 sm:w-6 sm:h-6 print:w-2 print:h-2 pdf-mode:w-2 pdf-mode:h-2 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold print:text-xs pdf-mode:text-xs">Skills</h2>
                </div>
                <div className="space-y-2 sm:space-y-4 print:space-y-0.5 pdf-mode:space-y-0.5">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="font-semibold mb-1 sm:mb-2 text-primary print:text-black print:text-2xs pdf-mode:text-2xs print:mb-0 pdf-mode:mb-0">{category}</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2 print:gap-0.5 pdf-mode:gap-0.5">
                        {skillList.map((skill, i) => (
                          <span key={i} className="bg-muted text-muted-foreground px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm print:bg-gray-100 print:text-black print:text-3xs print:px-0.5 print:py-0 pdf-mode:bg-gray-100 pdf-mode:text-black pdf-mode:text-3xs pdf-mode:px-0.5 pdf-mode:py-0">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="resume-section">
                <div className="flex items-center space-x-2 mb-2 sm:mb-4 print:mb-0.5 pdf-mode:mb-0.5">
                  <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 print:w-2 print:h-2 pdf-mode:w-2 pdf-mode:h-2 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold print:text-xs pdf-mode:text-xs">Education</h2>
                </div>
                <div className="space-y-2 sm:space-y-4 print:space-y-0.5 pdf-mode:space-y-0.5">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-secondary p-2 sm:p-4 rounded-lg print:bg-gray-50 print:p-0.5 print:rounded-none pdf-mode:bg-gray-50 pdf-mode:p-0.5 pdf-mode:rounded-none">
                      <h3 className="font-semibold print:text-2xs pdf-mode:text-2xs">{edu.degree}</h3>
                      <p className="text-primary text-xs sm:text-sm print:text-black print:text-3xs pdf-mode:text-3xs">{edu.institution}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm print:text-black print:text-3xs pdf-mode:text-3xs">{edu.location} • {edu.duration}</p>
                      <p className="text-xs sm:text-sm font-medium mt-0.5 print:text-3xs print:mt-0 pdf-mode:text-3xs pdf-mode:mt-0">{edu.grade}</p>
                      {edu.highlights && (
                        <div className="mt-0.5 sm:mt-2 print:mt-0 pdf-mode:mt-0">
                          {edu.highlights.map((highlight, i) => (
                            <span key={i} className="inline-block bg-muted text-muted-foreground px-1 sm:px-2 py-0.5 sm:py-1 rounded text-2xs sm:text-xs mr-1 sm:mr-2 mb-0.5 sm:mb-1 print:bg-gray-100 print:text-black print:text-4xs print:px-0.5 print:py-0 print:mr-0.5 print:mb-0 pdf-mode:bg-gray-100 pdf-mode:text-black pdf-mode:text-4xs pdf-mode:px-0.5 pdf-mode:py-0 pdf-mode:mr-0.5 pdf-mode:mb-0">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications */}
              <section className="resume-section">
                <div className="flex items-center space-x-2 mb-2 sm:mb-4 print:mb-0.5 pdf-mode:mb-0.5">
                  <Award className="w-4 h-4 sm:w-6 sm:h-6 print:w-2 print:h-2 pdf-mode:w-2 pdf-mode:h-2 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold print:text-xs pdf-mode:text-xs">Certifications</h2>
                </div>
                <div className="space-y-0.5 sm:space-y-2 print:space-y-0 pdf-mode:space-y-0">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm print:text-3xs pdf-mode:text-3xs print:space-x-0.5 pdf-mode:space-x-0.5">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary print:w-1.5 print:h-1.5 pdf-mode:w-1.5 pdf-mode:h-1.5 print:text-black pdf-mode:text-black" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }
          
          .resume-content {
            margin: 0;
            padding: 0;
            font-size: 5pt !important; /* Even more aggressive font reduction for print */
          }
          
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          @page {
            margin: 0.2in !important; /* Reduced margins */
            size: letter portrait;
          }
          
          .resume-section {
            page-break-inside: avoid !important;
          }
          
          /* Reduce line heights and spacings globally for print */
          p, li, span, h1, h2, h3 {
            line-height: 1.0 !important;
          }
          
          .space-y-8 { space-y: 0.1rem !important; }
          .space-y-6 { space-y: 0.05rem !important; }
          .space-y-4 { space-y: 0.05rem !important; }
          .space-y-2 { space-y: 0.05rem !important; }
          .space-y-1 { space-y: 0.05rem !important; }
          .gap-8 { gap: 0.1rem !important; }
          .gap-6 { gap: 0.05rem !important; }
          .gap-4 { gap: 0.05rem !important; }
          .py-8 { padding-top: 0.1rem !important; padding-bottom: 0.1rem !important; }
          .py-4 { padding-top: 0.05rem !important; padding-bottom: 0.05rem !important; }
          .px-6 { padding-left: 0.2rem !important; padding-right: 0.2rem !important; }
          .mb-6 { margin-bottom: 0.1rem !important; }
          .mb-4 { margin-bottom: 0.05rem !important; }
          .mb-3 { margin-bottom: 0.05rem !important; }
          .mb-2 { margin-bottom: 0.05rem !important; }
          .mb-1 { margin-bottom: 0 !important; }
          .mt-4 { margin-top: 0.05rem !important; }
          .mt-2 { margin-top: 0.05rem !important; }
          .mt-1 { margin-top: 0 !important; }
          .text-xl { font-size: 7pt !important; }
          .text-lg { font-size: 6pt !important; }
          .text-base { font-size: 5pt !important; }
          .text-sm { font-size: 4pt !important; }
          .text-xs { font-size: 3pt !important; }
          .w-6 { width: 0.15rem !important; }
          .h-6 { height: 0.15rem !important; }
          .w-4 { width: 0.1rem !important; }
          .h-4 { height: 0.1rem !important; }
        }

        .pdf-mode {
          margin: 0;
          padding: 0;
          font-size: 5pt !important; /* Even more aggressive font reduction for PDF */
          color-adjust: exact;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          page-break-inside: avoid !important;
          /* Reduce line heights and spacings globally for PDF */
          p, li, span, h1, h2, h3 {
            line-height: 1.0 !important;
          }
          
          .space-y-8 { space-y: 0.1rem !important; }
          .space-y-6 { space-y: 0.05rem !important; }
          .space-y-4 { space-y: 0.05rem !important; }
          .space-y-2 { space-y: 0.05rem !important; }
          .space-y-1 { space-y: 0.05rem !important; }
          .gap-8 { gap: 0.1rem !important; }
          .gap-6 { gap: 0.05rem !important; }
          .gap-4 { gap: 0.05rem !important; }
          .py-8 { padding-top: 0.1rem !important; padding-bottom: 0.1rem !important; }
          .py-4 { padding-top: 0.05rem !important; padding-bottom: 0.05rem !important; }
          .px-6 { padding-left: 0.2rem !important; padding-right: 0.2rem !important; }
          .mb-6 { margin-bottom: 0.1rem !important; }
          .mb-4 { margin-bottom: 0.05rem !important; }
          .mb-3 { margin-bottom: 0.05rem !important; }
          .mb-2 { margin-bottom: 0.05rem !important; }
          .mb-1 { margin-bottom: 0 !important; }
          .mt-4 { margin-top: 0.05rem !important; }
          .mt-2 { margin-top: 0.05rem !important; }
          .mt-1 { margin-top: 0 !important; }
          .text-xl { font-size: 7pt !important; }
          .text-lg { font-size: 6pt !important; }
          .text-base { font-size: 5pt !important; }
          .text-sm { font-size: 4pt !important; }
          .text-xs { font-size: 3pt !important; }
          .w-6 { width: 0.15rem !important; }
          .h-6 { height: 0.15rem !important; }
          .w-4 { width: 0.1rem !important; }
          .h-4 { height: 0.1rem !important; }
          .pdf-mode\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}