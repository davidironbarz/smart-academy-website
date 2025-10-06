import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-800 text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Nurturing Young Minds for a 
                <span className="text-cream-200"> Brighter Future</span>
              </h1>
              <p className="text-xl text-cream-100 leading-relaxed">
                Smart Academy provides quality education for students in Monrovia, Liberia. Founded in 2013, we serve 376 students 
                with excellence in education and character development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/admissions" className="btn-primary text-center">
                  Apply Now
                </Link>
                <Link href="/about" className="btn-outline text-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cream-200/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-cream-200 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-7 h-7 text-primary-800" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Quality Education</h3>
                      <p className="text-sm text-cream-200">Nursery to Primary</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-cream-200 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-7 h-7 text-primary-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Character Building</h3>
                      <p className="text-sm text-cream-200">Values & Ethics</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-cream-200 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-7 h-7 text-primary-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Excellence</h3>
                      <p className="text-sm text-cream-200">Academic Achievement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
              About Smart Academy
            </h2>
            <p className="text-xl text-accent-700 max-w-3xl mx-auto leading-relaxed">
              Founded in 2013 with a vision to provide quality education in Monrovia, Smart Academy has been nurturing young minds 
              and building character for over a decade, serving 376 students with excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated p-8 text-center">
              <div className="w-20 h-20 bg-primary-700 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Our Mission</h3>
              <p className="text-accent-700 leading-relaxed">
                To provide quality education that develops critical thinking, creativity, and character in every student.
              </p>
            </div>
            
            <div className="card-elevated p-8 text-center">
              <div className="w-20 h-20 bg-primary-700 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Our Vision</h3>
              <p className="text-accent-700 leading-relaxed">
                To be the leading educational institution in Bong County, producing well-rounded future leaders.
              </p>
            </div>
            
            <div className="card-elevated p-8 text-center">
              <div className="w-20 h-20 bg-primary-700 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Our Values</h3>
              <p className="text-accent-700 leading-relaxed">
                Excellence, Integrity, Respect, and Service to community guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Highlight */}
      <section className="section-padding bg-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
              Our Academic Programs
            </h2>
            <p className="text-xl text-accent-700 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive educational programs designed to meet the developmental needs of each age group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated p-8 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-cream-200 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-10 h-10 text-primary-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-primary-800">Nursery School</h3>
              <p className="text-accent-700 text-center mb-6 leading-relaxed">
                Ages 2-4. Early childhood development through play-based learning and social interaction.
              </p>
              <ul className="space-y-2 text-sm text-accent-600 text-left">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>Sensory play activities</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>Basic motor skills development</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>Social interaction and sharing</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>Early literacy introduction</li>
              </ul>
            </div>
            
            <div className="card-elevated p-8 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-cream-200 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-10 h-10 text-primary-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-primary-800">Kindergarten</h3>
              <p className="text-accent-700 text-center mb-6 leading-relaxed">
                Ages 4-6. Foundation building for academic success through structured learning and exploration.
              </p>
              <ul className="space-y-2 text-sm text-accent-600 text-left">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>Pre-reading and pre-writing skills</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>Basic mathematics concepts</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>Science exploration</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>Creative arts and crafts</li>
              </ul>
            </div>
            
            <div className="card-elevated p-8 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-cream-200 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-10 h-10 text-primary-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-primary-800">Primary School</h3>
              <p className="text-accent-700 text-center mb-6 leading-relaxed">
                Ages 6-12. Comprehensive academic program preparing students for secondary education.
              </p>
              <ul className="space-y-2 text-sm text-accent-600 text-left">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>Core subjects (Math, English, Science)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>Social studies and history</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>Physical education</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>Computer literacy</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/academics" className="btn-primary">
              Learn More About Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Family?
            </h2>
            <p className="text-xl text-cream-100 max-w-3xl mx-auto leading-relaxed">
              Contact us today to learn more about enrollment and schedule a school tour.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cream-200 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-primary-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cream-100">Visit Us</h3>
              <p className="text-cream-200 leading-relaxed">
                Samuel Kanyon Doe Boulevard<br />
                Monrovia, Liberia
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cream-200 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-primary-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cream-100">Call Us</h3>
              <p className="text-cream-200 leading-relaxed">
                +231 886 515 260<br />
                +231880655905
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cream-200 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-primary-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cream-100">Email Us</h3>
              <p className="text-cream-200 leading-relaxed">
                smartkidsschool@gmail.com<br />
                Principal: +231 886 515 260
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
