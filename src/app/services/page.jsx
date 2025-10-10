import React from 'react';
import { Check, Clock, Shield, Smartphone, TrendingUp, Headphones, Zap, DollarSign, Code, Server, Monitor } from 'lucide-react';

// Domain-focused services - Web Dev, API, App Dev
const services = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Custom responsive websites built with modern technologies',
    priceStart: '₹12,999',
    priceRange: '₹12,999 - ₹24,999',
    deliveryTime: '10-14 days',
    icon: <Monitor className="w-7 h-7" />,
    popular: true,
    badge: 'Most Popular',
    details: 'Perfect for businesses, portfolios, and landing pages. Built with React/Next.js for blazing fast performance.',
    includes: '5-8 Pages • Hosting Setup • SSL Certificate',
    features: [
      'React/Next.js development with modern UI',
      'Fully responsive (mobile, tablet, desktop)',
      'SEO optimized with meta tags & sitemap',
      'Contact forms with email notifications',
      'Google Analytics & Search Console setup',
      '3 rounds of revisions included',
      'Performance optimization (90+ PageSpeed)',
      'Free domain connection & SSL setup'
    ]
  },
    {
    id: 2,
    title: 'Web Application',
    description: 'Complex web apps with custom functionality and dashboards',
    priceStart: '₹34,999',
    priceRange: '₹34,999 - ₹74,999',
    deliveryTime: '25-35 days',
     popular: true,
    badge: 'Most Popular',
    icon: <Code className="w-7 h-7" />,
    details: 'Full-stack web applications with custom features. CRM, ERP, SaaS platforms. Partner developer for large projects.',
    includes: 'Frontend + Backend • Database • Admin Panel',
    features: [
      'Custom business logic & workflows',
      'User authentication & authorization',
      'Admin dashboard with analytics',
      'Real-time updates (WebSockets)',
      'Database design & API development',
      'File upload & management system',
      'Email notifications & alerts',
      'Multi-user roles & permissions'
    ]
  },
  {
    id: 3,
    title: 'API Development',
    description: 'RESTful APIs and backend services for your applications',
    priceStart: '₹18,999',
    priceRange: '₹18,999 - ₹39,999',
    deliveryTime: '12-16 days',
    icon: <Server className="w-7 h-7" />,
    details: 'Scalable backend APIs built with Node.js. Perfect for mobile apps and web applications.',
    includes: 'API Endpoints • Database • Documentation',
    features: [
      'RESTful API with proper versioning',
      'Node.js/Express.js backend development',
      'Database design (MongoDB/PostgreSQL)',
      'JWT authentication & role-based access',
      'Comprehensive API documentation (Postman)',
      'Error handling & validation',
      'Rate limiting & security implementation',
      'Deployment on cloud (AWS/DigitalOcean)'
    ]
  },
  {
    id: 4,
    title: 'E-Commerce Development',
    description: 'Full-featured online stores with payment integration',
    priceStart: '₹24,999',
    priceRange: '₹24,999 - ₹49,999',
    deliveryTime: '18-25 days',
    icon: <Code className="w-7 h-7" />,
    badge: 'Best Value',
    details: 'Complete online store solution with Indian payment gateways. Partner developer for complex features.',
    includes: 'Unlimited Products • Payment Gateway • Admin Panel',
    features: [
      'Custom shopping cart & checkout flow',
      'Razorpay/PayU/Instamojo integration',
      'Product catalog with categories & filters',
      'Order management & invoice generation',
      'Customer accounts & order history',
      'Inventory tracking & stock alerts',
      'Discount codes & coupon system',
      'Mobile-optimized checkout experience'
    ]
  },
  {
    id: 5,
    title: 'Landing Page',
    description: 'High-converting single page for campaigns and products',
    priceStart: '₹6,999',
    priceRange: '₹6,999 - ₹14,999',
    deliveryTime: '5-7 days',
    icon: <Monitor className="w-7 h-7" />,
    badge: 'Quick Launch',
    details: 'Fast, beautiful landing pages for marketing campaigns. Solo developed, quick turnaround.',
    includes: '1 Page • Forms • WhatsApp Integration',
    features: [
      'Modern, conversion-focused design',
      'Lead capture forms with validation',
      'WhatsApp & social media integration',
      'Google Analytics & Facebook Pixel setup',
      'Fast loading (under 2 seconds)',
      'Mobile-first responsive design',
      'SEO optimized for campaigns',
      'Call-to-action button optimization'
    ]
  },
  {
    id: 6,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps for iOS and Android',
    priceStart: '₹39,999',
    priceRange: '₹39,999 - ₹99,999',
    deliveryTime: '30-45 days',
    icon: <Smartphone className="w-7 h-7" />,
    details: 'Native-quality apps using React Native. Partner developer for complex features and faster delivery.',
    includes: 'iOS + Android • API Integration • App Store Support',
    features: [
      'React Native cross-platform development',
      'Native iOS & Android app builds',
      'API integration & backend connectivity',
      'Push notifications & deep linking',
      'User authentication (OTP, social login)',
      'Offline mode & local storage',
      'App store deployment assistance',
      'In-app purchases (if required)'
    ]
  },
  {
    id: 7,
    title: 'CMS Development',
    description: 'Content management systems for easy website updates',
    priceStart: '₹19,999',
    priceRange: '₹19,999 - ₹34,999',
    deliveryTime: '14-20 days',
    icon: <Code className="w-7 h-7" />,
    details: 'Custom CMS or WordPress development. Manage your content without technical knowledge.',
    includes: 'CMS Setup • Training • Content Migration',
    features: [
      'Custom CMS or WordPress/Strapi',
      'Easy drag-and-drop content editing',
      'Media library & image optimization',
      'User & role management',
      'Blog with categories & tags',
      'SEO plugins & sitemap generation',
      'Custom post types & fields',
      'Training & video tutorials included'
    ]
  },
  {
    id: 8,
    title: 'Database Design & Setup',
    description: 'Efficient database architecture and implementation',
    priceStart: '₹9,999',
    priceRange: '₹9,999 - ₹24,999',
    deliveryTime: '7-10 days',
    icon: <Server className="w-7 h-7" />,
    details: 'Professional database architecture. Optimized for performance and scalability.',
    includes: 'Schema Design • Migration • Backup Setup',
    features: [
      'Database schema design & ERD',
      'MySQL/PostgreSQL/MongoDB setup',
      'Index optimization & query tuning',
      'Automated backup solutions',
      'Data migration from existing systems',
      'Security & access control',
      'Performance monitoring setup',
      'Documentation & data dictionary'
    ]
  },
  {
    id: 9,
    title: 'API Integration',
    description: 'Connect third-party services to your application',
    priceStart: '₹8,999',
    priceRange: '₹8,999 - ₹19,999',
    deliveryTime: '6-10 days',
    icon: <Server className="w-7 h-7" />,
    details: 'Seamlessly integrate payment gateways, SMS, email, and other third-party services.',
    includes: 'Multiple Integrations • Testing • Documentation',
    features: [
      'Payment gateway (Razorpay/PayU/PhonePe)',
      'SMS API (MSG91/Twilio/Fast2SMS)',
      'Email services (SendGrid/AWS SES)',
      'Social media login (Google/Facebook)',
      'Google Maps & location services',
      'WhatsApp Business API integration',
      'Webhook implementation & testing',
      'Error handling & retry logic'
    ]
  }
];

const whyChoose = [
  { icon: <DollarSign className="w-5 h-5" />, title: 'Fixed Pricing', desc: 'No hidden costs, GST bills' },
  { icon: <Clock className="w-5 h-5" />, title: 'Fast Delivery', desc: '3-25 days turnaround' },
  { icon: <Shield className="w-5 h-5" />, title: 'Secure & Reliable', desc: 'SSL, backups included' },
  { icon: <Code className="w-5 h-5" />, title: 'Modern Stack', desc: 'Latest technologies' },
  { icon: <Headphones className="w-5 h-5" />, title: '30-Day Support', desc: 'WhatsApp assistance' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Scalable Code', desc: 'Clean & maintainable' }
];

function ServiceCard({ service }) {
  return (
    <div className={`relative bg-white rounded-xl border ${service.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'} hover:shadow-xl transition-all p-6`}>
      {service.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
            {service.badge.toUpperCase()}
          </span>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-xs text-gray-600 mb-2">{service.description}</p>
          <p className="text-xs text-gray-700 font-medium leading-relaxed">{service.details}</p>
        </div>
        <div className="text-blue-600 ml-3">{service.icon}</div>
      </div>
      
      <div className="border-t border-gray-100 pt-3 pb-3">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-xs text-gray-600">Starting from</span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold text-gray-900">{service.priceStart}</span>
          <span className="text-xs text-gray-500">+ GST</span>
        </div>
        <div className="text-xs text-gray-600 mb-3">
          Range: <span className="font-semibold text-gray-700">{service.priceRange}</span>
        </div>
        
        <div className="flex items-center gap-2 text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg mb-2">
          <Clock className="w-3.5 h-3.5" />
          <span className="font-semibold">{service.deliveryTime} delivery</span>
        </div>
        
        <div className="text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
          📦 <span className="font-medium">{service.includes}</span>
        </div>
      </div>
      
      <div className="border-t border-gray-100 pt-4">
        <p className="text-xs font-bold text-gray-900 mb-2">What's included:</p>
        <ul className="space-y-2 mb-5">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
              <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <a href="/contact" className="block w-full">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-sm font-semibold transition-colors shadow-md hover:shadow-lg">
          Get Quote →
        </button>
      </a>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Compact Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Development Services
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Web Development, API Development & Mobile Apps. Fixed pricing, fast delivery.
          </p>
          
                      <div className="flex flex-wrap justify-center gap-6 text-sm text-white">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="font-medium">Solo + Partner Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="font-medium">100+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="font-medium">30 Days Free Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-gray-600">Choose the perfect solution for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-10 text-center bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-sm text-gray-700 mb-3">
              <span className="font-bold text-blue-700">⏱️ About Delivery Times & Pricing</span>
            </p>
            <div className="text-left max-w-3xl mx-auto space-y-2 mb-3">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">* Delivery time varies</span> based on project complexity, features, and customization requirements. The range shown is an estimate from simple to advanced implementations.
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Work Model:</span> I handle smaller projects solo (Landing Pages, API Integration, Database Setup). For complex projects (E-Commerce, Web Apps, Mobile Apps), I collaborate with a trusted partner developer for faster delivery and specialized expertise.
              </p>
            </div>
            <p className="text-xs text-gray-500">
              📞 Contact me for a detailed timeline and quote based on your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Compact Why Choose */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="text-blue-600 flex justify-center mb-2">{item.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Technologies We Use
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'React Native', icon: '📱' },
              { name: 'PostgreSQL', icon: '🐘' }
            ].map((tech, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:border-blue-500 transition-colors">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="text-xs font-semibold text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white text-center">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-sm md:text-base mb-3 leading-relaxed">
              "Built a complex web application with custom API. Clean code, excellent communication, delivered on time. Highly professional!"
            </p>
            <p className="font-semibold text-sm">Priya Sharma</p>
            <p className="text-blue-200 text-xs">CTO, FinTech Startup</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            How It Works
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Discuss', desc: 'Share requirements' },
              { step: '2', title: 'Quote', desc: 'Get pricing' },
              { step: '3', title: 'Build', desc: 'We develop' },
              { step: '4', title: 'Launch', desc: 'Go live' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-2 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 md:p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to Start Your Project?
            </h2>
            <p className="text-sm text-gray-300 mb-5">
              Get a free consultation and quote in 24 hours.
            </p>
            
<div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <a href="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Get Free Quote
                </button>
              </a>
              <a href="/projects">
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                  View Portfolio
                </button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400 pt-4 border-t border-gray-700">
              <span>✓ No commitment</span>
              <span>✓ 24hr response</span>
              <span>✓ Free consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Common Questions
          </h2>
          
          <div className="space-y-3">
            {[
              {
                q: 'What technologies do you specialize in?',
                a: 'React, Next.js, Node.js, MongoDB, PostgreSQL, React Native, and modern web technologies.'
              },
              {
                q: 'Do you accept installment payments?',
                a: 'Yes, 50% advance and 50% on delivery. GST invoices provided.'
              },
              {
                q: 'Can you integrate with existing systems?',
                a: 'Yes, we handle API integrations, database migrations, and system connections.'
              },
              {
                q: 'Do you provide source code?',
                a: 'Yes, complete source code with documentation is provided upon project completion.'
              }
            ].map((item, idx) => (
              <details key={idx} className="bg-gray-50 rounded-lg">
                <summary className="font-semibold text-gray-900 text-sm p-3 cursor-pointer hover:bg-gray-100">
                  {item.q}
                </summary>
                <p className="text-gray-600 text-sm px-3 pb-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}