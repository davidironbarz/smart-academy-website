'use client';

import { useState } from 'react';

export default function Admissions() {
  const [activeTab, setActiveTab] = useState('requirements');

  const tabs = [
    { id: 'requirements', label: 'Requirements' },
    { id: 'steps', label: 'Enrollment Steps' },
    { id: 'tuition', label: 'Tuition Information' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Join the Smart Academy family! Learn about our admission requirements, 
            enrollment process, and tuition information. Application deadline: September 30, 2025.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="flex flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  To ensure the best educational experience for all students, we have specific requirements for each grade level.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Nursery Requirements */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">👶</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-6">Nursery School</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Age Requirements</h4>
                      <p className="text-gray-600 text-sm">2-4 years old by September 1st</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Required Documents</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Birth certificate</li>
                        <li>• Sealed transcript</li>
                        <li>• 2 passport photos</li>
                        <li>• Medical clearance form</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Assessment</h4>
                      <p className="text-gray-600 text-sm">Basic developmental screening</p>
                    </div>
                  </div>
                </div>

                {/* Kindergarten Requirements */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🧒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-6">Kindergarten</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Age Requirements</h4>
                      <p className="text-gray-600 text-sm">4-6 years old by September 1st</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Required Documents</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Birth certificate</li>
                        <li>• Sealed transcript</li>
                        <li>• Previous school records (if any)</li>
                        <li>• 2 passport photos</li>
                        <li>• Medical clearance form</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Assessment</h4>
                      <p className="text-gray-600 text-sm">Readiness assessment for school</p>
                    </div>
                  </div>
                </div>

                {/* Primary Requirements */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🎒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-6">Primary School</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Age Requirements</h4>
                      <p className="text-gray-600 text-sm">6-12 years old (Grades 1-6)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Required Documents</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Birth certificate</li>
                        <li>• Sealed transcript</li>
                        <li>• Previous school transcripts</li>
                        <li>• 2 passport photos</li>
                        <li>• Medical clearance form</li>
                        <li>• Character reference letter</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Assessment</h4>
                      <p className="text-gray-600 text-sm">Academic placement test</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">General Requirements for All Students</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Health Requirements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sealed transcript from previous school</li>
                        <li>• Medical examination within 6 months</li>
                        <li>• No contagious diseases</li>
                        <li>• Physical fitness for school activities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Parent/Guardian Requirements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Valid identification documents</li>
                        <li>• Proof of residence in Monrovia</li>
                        <li>• Commitment to school policies</li>
                        <li>• Active participation in school activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enrollment Steps Tab */}
          {activeTab === 'steps' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enrollment Process</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Follow these simple steps to enroll your child at Smart Academy.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                      <h3 className="text-xl font-bold mb-2">Initial Inquiry</h3>
                      <p className="text-gray-600 mb-4">
                        Contact our admissions office to express interest and schedule a school tour. 
                        We'll provide you with detailed information about our programs and answer any questions.
                      </p>
                      <div className="bg-primary-50 rounded-lg p-4">
                        <p className="text-sm text-primary-800">
                          <strong>Contact:</strong> +231 886 515 260 | smartkidsschool@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                      <h3 className="text-xl font-bold mb-2">School Tour & Meeting</h3>
                      <p className="text-gray-600 mb-4">
                        Visit our campus to see our facilities, meet our teachers, and get a feel for our 
                        learning environment. This is also an opportunity to discuss your child's specific needs.
                      </p>
                      <div className="bg-primary-50 rounded-lg p-4">
                        <p className="text-sm text-primary-800">
                          <strong>Duration:</strong> 1-2 hours | <strong>Available:</strong> Monday-Friday, 9:00 AM - 3:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                      <h3 className="text-xl font-bold mb-2">Application Submission</h3>
                      <p className="text-gray-600 mb-4">
                        Complete and submit the application form along with all required documents. 
                        Ensure all information is accurate and complete.
                      </p>
                      <div className="bg-primary-50 rounded-lg p-4">
                        <p className="text-sm text-primary-800">
                          <strong>Deadline:</strong> September 30, 2025 | <strong>Processing:</strong> 5-7 business days
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                      <h3 className="text-xl font-bold mb-2">Assessment & Interview</h3>
                      <p className="text-gray-600 mb-4">
                        Your child will participate in an age-appropriate assessment to determine their 
                        current level and ensure proper placement. Parents will have an interview with the principal.
                      </p>
                      <div className="bg-primary-50 rounded-lg p-4">
                        <p className="text-sm text-primary-800">
                          <strong>Duration:</strong> 30-45 minutes | <strong>Format:</strong> Individual assessment
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                      <h3 className="text-xl font-bold mb-2">Admission Decision</h3>
                      <p className="text-gray-600 mb-4">
                        You will receive notification of the admission decision within one week of the assessment. 
                        If accepted, you'll receive an acceptance letter and enrollment package.
                      </p>
                      <div className="bg-primary-50 rounded-lg p-4">
                        <p className="text-sm text-primary-800">
                          <strong>Notification:</strong> Phone call + written letter | <strong>Response Time:</strong> 7 days
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 6 */}
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                      <h3 className="text-xl font-bold mb-2">Enrollment & Payment</h3>
                      <p className="text-gray-600 mb-4">
                        Complete the enrollment process by signing the enrollment agreement and making the 
                        initial payment. You'll receive your child's class schedule and school calendar.
                      </p>
                      <div className="bg-primary-50 rounded-lg p-4">
                        <p className="text-sm text-primary-800">
                          <strong>Payment Options:</strong> Cash, Mobile Money, Installment Plans Available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tuition Information Tab */}
          {activeTab === 'tuition' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tuition Information</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Quality education at an affordable price. We offer flexible payment options to make 
                  education accessible to all families in Bong County.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Nursery Tuition */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">👶</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">Nursery School</h3>
                  <p className="text-center text-gray-600 mb-6">Ages 2-4</p>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-primary-600">$150</span>
                    <span className="text-gray-600">/term</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 4 terms per academic year</li>
                    <li>• Includes all learning materials</li>
                    <li>• Snacks and refreshments</li>
                    <li>• Basic health monitoring</li>
                  </ul>
                </div>

                {/* Kindergarten Tuition */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-200">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🧒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">Kindergarten</h3>
                  <p className="text-center text-gray-600 mb-6">Ages 4-6</p>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-primary-600">$200</span>
                    <span className="text-gray-600">/term</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 4 terms per academic year</li>
                    <li>• Textbooks and workbooks</li>
                    <li>• Art and craft supplies</li>
                    <li>• Library access</li>
                    <li>• Basic computer lab access</li>
                  </ul>
                </div>

                {/* Primary Tuition */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🎒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">Primary School</h3>
                  <p className="text-center text-gray-600 mb-6">Grades 1-6</p>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-primary-600">$250</span>
                    <span className="text-gray-600">/term</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 4 terms per academic year</li>
                    <li>• Complete textbook set</li>
                    <li>• Computer lab access</li>
                    <li>• Sports equipment</li>
                    <li>• Science lab materials</li>
                    <li>• Library and study resources</li>
                  </ul>
                </div>
              </div>

              {/* Additional Fees */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Additional Fees</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">One-Time Fees</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Registration Fee</span>
                        <span className="font-semibold">$25</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Development Fee</span>
                        <span className="font-semibold">$50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Uniform (Complete Set)</span>
                        <span className="font-semibold">$35</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Optional Fees</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Transportation (Monthly)</span>
                        <span className="font-semibold">$30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">After-School Care</span>
                        <span className="font-semibold">$40/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lunch Program</span>
                        <span className="font-semibold">$20/month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Payment Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">💰</span>
                    </div>
                    <h4 className="font-semibold mb-2">Full Payment</h4>
                    <p className="text-sm text-gray-600">Pay entire year upfront and receive 5% discount</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">📅</span>
                    </div>
                    <h4 className="font-semibold mb-2">Termly Payment</h4>
                    <p className="text-sm text-gray-600">Pay at the beginning of each term (4 payments/year)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">📊</span>
                    </div>
                    <h4 className="font-semibold mb-2">Monthly Installments</h4>
                    <p className="text-sm text-gray-600">Spread payments over 10 months with small fee</p>
                  </div>
                </div>
              </div>

              {/* Financial Aid */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Financial Assistance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Scholarship Program</h4>
                    <p className="text-gray-600 mb-4">
                      We offer merit-based scholarships for outstanding students who demonstrate 
                      academic excellence and financial need.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sports Scholarship (for talented athletes)</li>
                      <li>• Less Fortunate Scholarship (for families in need)</li>
                      <li>• Academic Excellence Scholarship (up to 50% tuition)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Application Process</h4>
                    <p className="text-gray-600 mb-4">
                      To apply for financial assistance, please submit the following:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Financial aid application form</li>
                      <li>• Income verification documents</li>
                      <li>• Student's academic records</li>
                      <li>• Personal statement from parent/guardian</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
