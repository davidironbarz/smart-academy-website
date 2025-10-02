export default function StudentLife() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Life</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Discover the vibrant life at Smart Academy! From sports and clubs to special events, 
            we create memorable experiences that enrich our students' educational journey.
          </p>
        </div>
      </section>

      {/* Sports & Athletics */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sports & Athletics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in the importance of physical activity and teamwork. Our sports programs 
              promote fitness, discipline, and healthy competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚽</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Football</h3>
              <p className="text-gray-600 text-sm">
                Boys and girls teams compete in local tournaments and friendly matches.
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Basketball</h3>
              <p className="text-gray-600 text-sm">
                Develop skills and teamwork through regular practice and games.
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏃</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track & Field</h3>
              <p className="text-gray-600 text-sm">
                Running, jumping, and throwing events for all age groups.
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Table Tennis</h3>
              <p className="text-gray-600 text-sm">
                Indoor sport perfect for developing hand-eye coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clubs & Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse range of clubs and activities allows students to explore their interests, 
              develop new skills, and make lasting friendships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Art Club</h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Express creativity through drawing, painting, and crafts.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Weekly art sessions</li>
                <li>• Annual art exhibition</li>
                <li>• Community art projects</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Reading Club</h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Foster a love for reading through book discussions and storytelling.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Weekly book discussions</li>
                <li>• Storytelling sessions</li>
                <li>• Library visits</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Environmental Club</h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Learn about nature and environmental conservation.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• School garden maintenance</li>
                <li>• Recycling programs</li>
                <li>• Nature walks</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Music Club</h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Discover musical talents through singing and instruments.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Choir practice</li>
                <li>• Instrument lessons</li>
                <li>• School concerts</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Drama Club</h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Build confidence through acting and performance.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Acting workshops</li>
                <li>• School plays</li>
                <li>• Public speaking</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Community Service</h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Give back to the community through volunteer work.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Local charity visits</li>
                <li>• Clean-up campaigns</li>
                <li>• Fundraising events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Special Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Throughout the year, we celebrate various events that bring our school community together 
              and create lasting memories for our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Annual Events</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Graduation Ceremony</h4>
                    <p className="text-sm text-gray-600">Celebrating our primary school graduates</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sports Day</h4>
                    <p className="text-sm text-gray-600">Annual athletic competition and fun activities</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🎨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Art Exhibition</h4>
                    <p className="text-sm text-gray-600">Showcasing student artwork and creativity</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📚</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Reading Week</h4>
                    <p className="text-sm text-gray-600">Promoting literacy and love for books</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Cultural Celebrations</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🇱🇷</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Independence Day</h4>
                    <p className="text-sm text-gray-600">Celebrating Liberian culture and heritage</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🎄</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Christmas Celebration</h4>
                    <p className="text-sm text-gray-600">Holiday festivities and gift exchange</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">International Day</h4>
                    <p className="text-sm text-gray-600">Learning about different cultures worldwide</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">👨‍👩‍👧‍👦</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Family Day</h4>
                    <p className="text-sm text-gray-600">Bringing families together for fun activities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a glimpse into the vibrant life at Smart Academy through our photo collection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder images */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <span className="text-4xl text-gray-400 mb-2 block">📸</span>
                    <p className="text-gray-500 text-sm">Photo Placeholder</p>
                    <p className="text-gray-400 text-xs">Student Activity {item}</p>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-700">
                  {item === 1 && "Sports Day Celebration"}
                  {item === 2 && "Art Club Exhibition"}
                  {item === 3 && "Reading Week Activities"}
                  {item === 4 && "Music Club Performance"}
                  {item === 5 && "Environmental Club Garden"}
                  {item === 6 && "Graduation Ceremony"}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary">
              View More Photos
            </button>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Hear from our students about their experiences at Smart Academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">👦</span>
                </div>
                <div>
                  <h4 className="font-semibold">James Kollie</h4>
                  <p className="text-sm text-primary-200">Grade 5 Student</p>
                </div>
              </div>
              <p className="text-primary-100 text-sm">
                "I love playing football with my friends and learning new things in science class. 
                The teachers are really nice and help us understand everything."
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">👧</span>
                </div>
                <div>
                  <h4 className="font-semibold">Mary Johnson</h4>
                  <p className="text-sm text-primary-200">Grade 3 Student</p>
                </div>
              </div>
              <p className="text-primary-100 text-sm">
                "The art club is my favorite! I get to paint and draw with my friends. 
                We also have fun during reading week when we get to dress up as our favorite characters."
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">👦</span>
                </div>
                <div>
                  <h4 className="font-semibold">David Freeman</h4>
                  <p className="text-sm text-primary-200">Grade 6 Student</p>
                </div>
              </div>
              <p className="text-primary-100 text-sm">
                "Smart Academy has helped me become more confident. I love participating in the drama club 
                and community service activities. The teachers really care about us."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
