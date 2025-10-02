export default function Academics() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academics</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Discover our comprehensive educational programs designed to nurture young minds 
            and prepare students for success in their academic journey.
          </p>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Teaching Philosophy</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Smart Academy, we believe that every child is a unique individual with their own learning style, 
                  interests, and potential. Our teaching philosophy is centered on creating an environment that 
                  nurtures curiosity, creativity, and critical thinking.
                </p>
                <p>
                  We employ a student-centered approach that combines traditional teaching methods with modern 
                  educational techniques. Our teachers act as facilitators, guiding students to discover knowledge 
                  rather than simply imparting information.
                </p>
                <p>
                  We emphasize hands-on learning, collaborative projects, and real-world applications to make 
                  education meaningful and engaging for our students.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Key Principles</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Individual Attention</h4>
                    <p className="text-sm text-gray-600">Small class sizes ensure personalized learning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Active Learning</h4>
                    <p className="text-sm text-gray-600">Students engage through hands-on activities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Character Building</h4>
                    <p className="text-sm text-gray-600">Values and ethics integrated into daily learning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Community Connection</h4>
                    <p className="text-sm text-gray-600">Learning extends beyond classroom walls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum is designed to provide a solid foundation for lifelong learning.
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Nursery School */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">👶</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">Nursery School</h3>
                  <p className="text-center text-gray-600 mb-6">Ages 2-4</p>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Class Schedule</h4>
                    <p className="text-sm text-gray-600">Monday - Friday</p>
                    <p className="text-sm text-gray-600">8:00 AM - 12:00 PM</p>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-xl font-semibold mb-4">Program Overview</h4>
                  <p className="text-gray-600 mb-6">
                    Our nursery program focuses on early childhood development through play-based learning. 
                    We create a safe, nurturing environment where children can explore, discover, and develop 
                    essential skills for future learning.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">Learning Areas</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Sensory play and exploration</li>
                        <li>• Basic motor skills development</li>
                        <li>• Social interaction and sharing</li>
                        <li>• Early literacy introduction</li>
                        <li>• Creative arts and music</li>
                        <li>• Basic counting and shapes</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Development Focus</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Language and communication</li>
                        <li>• Emotional regulation</li>
                        <li>• Independence and self-help skills</li>
                        <li>• Problem-solving abilities</li>
                        <li>• Creativity and imagination</li>
                        <li>• Physical coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kindergarten */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🧒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">Kindergarten</h3>
                  <p className="text-center text-gray-600 mb-6">Ages 4-6</p>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Class Schedule</h4>
                    <p className="text-sm text-gray-600">Monday - Friday</p>
                    <p className="text-sm text-gray-600">8:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-xl font-semibold mb-4">Program Overview</h4>
                  <p className="text-gray-600 mb-6">
                    Our kindergarten program builds upon the foundation laid in nursery school, introducing 
                    more structured learning while maintaining the joy of discovery. Students develop 
                    pre-reading, pre-writing, and basic mathematical skills.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">Core Subjects</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Pre-reading and phonics</li>
                        <li>• Pre-writing and fine motor skills</li>
                        <li>• Basic mathematics concepts</li>
                        <li>• Science exploration</li>
                        <li>• Social studies introduction</li>
                        <li>• Creative arts and crafts</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Skills Development</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Letter recognition and sounds</li>
                        <li>• Number recognition and counting</li>
                        <li>• Following instructions</li>
                        <li>• Working in groups</li>
                        <li>• Basic problem-solving</li>
                        <li>• Self-expression and communication</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary School */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🎒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">Primary School</h3>
                  <p className="text-center text-gray-600 mb-6">Ages 6-12 (Grades 1-6)</p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Class Schedule</h4>
                    <p className="text-sm text-gray-600">Monday - Friday</p>
                    <p className="text-sm text-gray-600">8:00 AM - 3:00 PM</p>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-xl font-semibold mb-4">Program Overview</h4>
                  <p className="text-gray-600 mb-6">
                    Our primary school program provides a comprehensive academic foundation preparing students 
                    for secondary education. We emphasize critical thinking, creativity, and character development 
                    alongside academic excellence.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">Core Subjects</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• English Language Arts</li>
                        <li>• Mathematics</li>
                        <li>• Science</li>
                        <li>• Social Studies</li>
                        <li>• Physical Education</li>
                        <li>• Computer Literacy</li>
                        <li>• Art and Music</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Special Programs</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Reading enhancement program</li>
                        <li>• Math enrichment activities</li>
                        <li>• Science fair participation</li>
                        <li>• Cultural celebrations</li>
                        <li>• Community service projects</li>
                        <li>• Leadership development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Assessment & Evaluation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use a comprehensive assessment system to track student progress and ensure academic success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-primary-50">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Assessment</h3>
              <p className="text-gray-600">
                Regular evaluation through quizzes, assignments, class work, and homework to monitor ongoing progress.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-primary-50">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Periodic Examinations</h3>
              <p className="text-gray-600">
                Formal assessments through tests and exams to evaluate comprehensive understanding of subjects.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-primary-50">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Reports</h3>
              <p className="text-gray-600">
                Detailed reports sent to parents quarterly, highlighting achievements and areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond the Classroom</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We believe in holistic education that extends beyond academic subjects to include 
              extracurricular activities that develop well-rounded individuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚽</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sports</h3>
              <p className="text-primary-100 text-sm">
                Football, basketball, athletics, and recreational games to promote physical fitness and teamwork.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Arts & Crafts</h3>
              <p className="text-primary-100 text-sm">
                Creative expression through drawing, painting, sculpture, and various craft activities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Music & Drama</h3>
              <p className="text-primary-100 text-sm">
                Choir, instrumental music, and drama performances to develop artistic talents and confidence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reading Club</h3>
              <p className="text-primary-100 text-sm">
                Encouraging a love for reading through book discussions, storytelling, and library activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
