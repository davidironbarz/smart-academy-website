export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Smart Academy</h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Discover our rich history, mission, and vision that guide us in providing quality education 
            to the children of Monrovia, Liberia. Founded in 2013, serving 376 students with excellence.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Smart Academy was founded in 2013 by dedicated educators and community leaders 
                  who recognized the need for quality education in Monrovia, Liberia.
                </p>
                <p>
                  What started as a small initiative has grown into a thriving educational 
                  institution serving 376 students. Our journey has been 
                  marked by continuous growth, community support, and unwavering commitment to educational excellence.
                </p>
                <p>
                  Over the years, we have expanded our facilities, enhanced our curriculum, and built a team of 
                  passionate educators who share our vision of nurturing young minds for a brighter future.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2013</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Founded</h3>
                    <p className="text-sm text-gray-600">Started with vision for quality education</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2015</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Expansion</h3>
                    <p className="text-sm text-gray-600">Added new classrooms</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2020</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Digital Learning</h3>
                    <p className="text-sm text-gray-600">Introduced computer lab</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2024</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Today</h3>
                    <p className="text-sm text-gray-600">376 students enrolled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide quality education that develops critical thinking, creativity, and character in every student. 
                We are committed to creating a nurturing environment where children can grow academically, socially, 
                and emotionally while building a strong foundation for lifelong learning.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🌟</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading educational institution in Monrovia, producing well-rounded future leaders who 
                are academically excellent, morally upright, and committed to serving their communities. We envision 
                a school where every child reaches their full potential and contributes positively to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do at Smart Academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-primary-50">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in everything we do, from teaching to student support.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-primary-50">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We maintain honesty, transparency, and ethical behavior in all our interactions.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-primary-50">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🙏</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Respect</h3>
              <p className="text-gray-600">
                We value and honor the dignity of every individual in our school community.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-primary-50">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Service</h3>
              <p className="text-gray-600">
                We are committed to serving our community and making a positive impact in society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Statistics */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Academy by the Numbers</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our growth and impact in numbers that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-bold text-cream-200 mb-2">376</div>
              <h3 className="text-xl font-semibold mb-2">Students Enrolled</h3>
              <p className="text-primary-100">Growing community of learners</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-bold text-cream-200 mb-2">2013</div>
              <h3 className="text-xl font-semibold mb-2">Year Founded</h3>
              <p className="text-primary-100">Over a decade of excellence</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-bold text-cream-200 mb-2">8:00-4:00</div>
              <h3 className="text-xl font-semibold mb-2">School Hours</h3>
              <p className="text-primary-100">Monday through Friday</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Message from Our Principal</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">👨‍🏫</span>
              </div>
              <blockquote className="text-xl text-primary-100 leading-relaxed mb-6">
                "At Smart Academy, we believe that every child is unique and has the potential to achieve greatness. 
                Our dedicated team of educators works tirelessly to create an environment where students feel safe, 
                valued, and inspired to learn. We are not just teaching subjects; we are nurturing future leaders, 
                innovators, and responsible citizens of Liberia."
              </blockquote>
              <div className="border-t border-white/20 pt-6">
                <p className="font-semibold text-lg">Dr. Numehn Owen Dunbar</p>
                <p className="text-primary-100">Principal, Smart Academy</p>
                <p className="text-sm text-primary-200 mt-2">Doctorate of Christian Education (DCE)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Staff */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Dedicated Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate educators who make Smart Academy a place where children thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mrs. Grace M. Doe</h3>
              <p className="text-primary-600 font-medium mb-2">Head of Nursery Department</p>
              <p className="text-sm text-gray-600">15 years experience in early childhood education</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mr. James T. Kollie</h3>
              <p className="text-primary-600 font-medium mb-2">Head of Primary Department</p>
              <p className="text-sm text-gray-600">12 years experience in primary education</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ms. Sarah B. Freeman</h3>
              <p className="text-primary-600 font-medium mb-2">Student Affairs Coordinator</p>
              <p className="text-sm text-gray-600">8 years experience in student development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
