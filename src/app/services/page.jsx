import Button from '@/components/ui/Button'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { services } from '@/data/services'
import { personalInfo } from '@/data/personal-info'
import Link from 'next/link'

export const metadata = {
  title: `Services - ${personalInfo.name}`,
  description: 'Professional web development services offered',
}

function ServiceCard({ service }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-blue-600 text-2xl">🌐</span>
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-gray-600 mb-6">{service.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-blue-600">{service.price}</span>
              <span className="text-sm text-gray-500">{service.deliveryTime}</span>
            </div>
            <Button className="w-full" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive web development services to help bring your digital ideas to life. 
            From concept to deployment, I've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">My Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-sm text-gray-600">Understanding your needs, goals, and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-sm text-gray-600">Creating detailed project timeline and technical specifications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-sm text-gray-600">Building your project with modern technologies and best practices</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-sm text-gray-600">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how I can help you achieve your goals. 
            Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}