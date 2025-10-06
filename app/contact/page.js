'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    studentAge: '',
    interestedProgram: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        studentAge: '',
        interestedProgram: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Get in touch with Smart Academy! We're here to answer your questions and help you 
            learn more about our educational programs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visit Our Campus</h3>
                    <p className="text-gray-600">
                      Samuel Kanyon Doe Boulevard<br />
                      Monrovia, Liberia<br />
                      <span className="text-sm text-gray-500">Located in the heart of Monrovia</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-600">
                      Main Office: +231 886 515 260<br />
                      Admissions: +231880655905<br />
                      Additional: +231 770 287 145, +231 775 506 222<br />
                      <span className="text-sm text-gray-500">Monday - Friday, 8:00 AM - 4:00 PM</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                    <p className="text-gray-600">
                      +231 886 515 260<br />
                      <span className="text-sm text-gray-500">Quick responses for inquiries</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-600">
                      General: smartkidsschool@gmail.com<br />
                      Principal: Dr. Numehn Owen Dunbar<br />
                      Phone: +231 886 515 260<br />
                      Website: smarteduacademy.edu.lr
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-8 bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+231 XXX XXX XXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="studentAge" className="block text-sm font-medium text-gray-700 mb-2">
                      Student Age (if applicable)
                    </label>
                    <select
                      id="studentAge"
                      name="studentAge"
                      value={formData.studentAge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select age range</option>
                      <option value="2-4">2-4 years (Nursery)</option>
                      <option value="4-6">4-6 years (Kindergarten)</option>
                      <option value="6-8">6-8 years (Primary 1-2)</option>
                      <option value="8-10">8-10 years (Primary 3-4)</option>
                      <option value="10-12">10-12 years (Primary 5-6)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="interestedProgram" className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Program
                  </label>
                  <select
                    id="interestedProgram"
                    name="interestedProgram"
                    value={formData.interestedProgram}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select program</option>
                    <option value="nursery">Nursery School</option>
                    <option value="kindergarten">Kindergarten</option>
                    <option value="primary">Primary School</option>
                    <option value="general">General Information</option>
                    <option value="admissions">Admissions Process</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <span className="text-green-600 text-xl mr-2">✓</span>
                      <p className="text-green-800 font-medium">
                        Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our campus in Gbarnga, Bong County. We're conveniently located near the Central Market.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl text-gray-400 mb-4 block">🗺️</span>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
                <p className="text-gray-500">
                  Map integration placeholder<br />
                  <span className="text-sm">Smart Academy, Gbarnga, Bong County, Liberia</span>
                </p>
                <div className="mt-4">
                  <button className="btn-primary">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are answers to some common questions about Smart Academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">What are your school hours?</h3>
                <p className="text-gray-600 text-sm">
                  Nursery: 8:00 AM - 12:00 PM, Kindergarten: 8:00 AM - 2:00 PM, 
                  Primary: 8:00 AM - 3:00 PM, Monday through Friday.
                </p>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Do you provide transportation?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we offer transportation services for an additional monthly fee. 
                  Routes cover most areas in Gbarnga and surrounding communities.
                </p>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">What is your class size?</h3>
                <p className="text-gray-600 text-sm">
                  We maintain small class sizes: Nursery (15-20 students), 
                  Kindergarten (20-25 students), Primary (25-30 students).
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Do you offer after-school programs?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we have various clubs and activities including sports, arts, 
                  music, and homework assistance programs.
                </p>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">What documents are required for admission?</h3>
                <p className="text-gray-600 text-sm">
                  Birth certificate, immunization records, previous school records (if applicable), 
                  passport photos, and medical clearance form.
                </p>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Do you offer financial assistance?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we have scholarship programs and financial aid options for families 
                  who demonstrate need. Contact our admissions office for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
