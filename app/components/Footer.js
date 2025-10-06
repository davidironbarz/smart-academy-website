import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-cream-100 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-primary-800 font-bold text-lg">SA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cream-100">Smart Academy</h3>
                <p className="text-sm text-cream-200">Monrovia, Liberia</p>
              </div>
            </div>
            <p className="text-cream-200 text-sm leading-relaxed">
              Nurturing young minds for a brighter future through quality education and character development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-cream-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="text-cream-200 hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="text-cream-200 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/student-life" className="text-cream-200 hover:text-white transition-colors">Student Life</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream-100">Programs</h4>
            <ul className="space-y-2">
              <li><span className="text-cream-200">Nursery School</span></li>
              <li><span className="text-cream-200">Kindergarten</span></li>
              <li><span className="text-cream-200">Primary School</span></li>
              <li><span className="text-cream-200">After School Programs</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream-100">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4 text-cream-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-cream-200">
                  Samuel Kanyon Doe Boulevard<br />
                  Monrovia, Liberia
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex-shrink-0">
                  <svg className="w-4 h-4 text-cream-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p className="text-cream-200">+231 886 515 260</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex-shrink-0">
                  <svg className="w-4 h-4 text-cream-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p className="text-cream-200">smartkidsschool@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream-200 text-sm">
              © 2024 Smart Academy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-cream-200 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-cream-200 hover:text-white transition-colors text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
