import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
export const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setFormStatus(Math.random() > 0.1 ? 'success' : 'error');
      if (formStatus === 'success') {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    }, 1000);
  };
  return <div className="w-full pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-emerald-900">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl">
              Get in touch with our team for inquiries, reservations, or special
              requests
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: <PhoneIcon size={32} className="text-emerald-600" />,
            title: 'Phone',
            details: ['+94 77 123 4567', '+94 11 234 5678'],
            action: {
              text: 'Call Us',
              link: 'tel:+94771234567'
            }
          }, {
            icon: <MailIcon size={32} className="text-emerald-600" />,
            title: 'Email',
            details: ['info@hasnavila.com', 'reservations@hasnavila.com'],
            action: {
              text: 'Send Email',
              link: 'mailto:info@hasnavila.com'
            }
          }, {
            icon: <MapPinIcon size={32} className="text-emerald-600" />,
            title: 'Address',
            details: ['Gregory Lake Road,', 'Nuwara Eliya, Sri Lanka'],
            action: {
              text: 'Get Directions',
              link: '#map'
            }
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-800">
                  {item.title}
                </h3>
                {item.details.map((detail, i) => <p key={i} className="text-gray-600">
                    {detail}
                  </p>)}
                <a href={item.action.link} className="inline-block mt-4 text-emerald-600 hover:text-emerald-800 font-medium transition-colors">
                  {item.action.text}
                </a>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Opening Hours */}
      <section className="py-12 bg-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <ClockIcon size={32} className="text-emerald-600" />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-emerald-800">
              Opening Hours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-emerald-800">Reception</p>
                <p className="text-gray-600">24 hours, 7 days a week</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-emerald-800">Restaurant</p>
                <p className="text-gray-600">6:30 AM - 10:30 PM</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-emerald-800">Spa Services</p>
                <p className="text-gray-600">9:00 AM - 8:00 PM</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-emerald-800">Guided Tours</p>
                <p className="text-gray-600">8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Form and Map */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-serif font-bold mb-6 text-emerald-800">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Have questions about our accommodations or services? Fill out
                the form below and our team will get back to you as soon as
                possible.
              </p>
              {formStatus === 'success' && <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 flex items-start">
                  <CheckCircleIcon size={20} className="mr-2 mt-0.5 flex-shrink-0" />
                  <p>
                    Your message has been sent successfully. We'll get back to
                    you soon!
                  </p>
                </div>}
              {formStatus === 'error' && <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6 flex items-start">
                  <AlertCircleIcon size={20} className="mr-2 mt-0.5 flex-shrink-0" />
                  <p>
                    There was an error sending your message. Please try again
                    later.
                  </p>
                </div>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="your.email@example.com" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" required>
                    <option value="">Select a subject</option>
                    <option value="Reservation Inquiry">
                      Reservation Inquiry
                    </option>
                    <option value="Special Request">Special Request</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="How can we help you?" required></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded transition-colors">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
            {/* Map */}
            <motion.div id="map" initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="h-full min-h-[400px]">
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h2 className="text-3xl font-serif font-bold mb-6 text-emerald-800">
                  Our Location
                </h2>
                <div className="h-[400px] rounded-lg overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.929328234246!2d80.76289005!3d6.9497337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae380434e1554c7%3A0x291cf6dd5e74f766!2sNuwara%20Eliya!5e0!3m2!1sen!2slk!4v1651234567890!5m2!1sen!2slk" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-emerald-800 mb-2">
                    Getting Here
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Hasnavila is located 2 km from Nuwara Eliya town center,
                    easily accessible by car or tuk-tuk.
                  </p>
                  <p className="text-gray-600">
                    We can arrange airport transfers from Colombo Bandaranaike
                    International Airport (approximately 5-6 hours drive).
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-emerald-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700">
              Find quick answers to common questions about our property and
              services.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[{
              question: 'What time is check-in and check-out?',
              answer: 'Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out can be arranged based on availability.'
            }, {
              question: 'Do you offer airport transfers?',
              answer: 'Yes, we offer airport transfers from Colombo Bandaranaike International Airport for an additional fee. Please contact us in advance to arrange this service.'
            }, {
              question: 'Is breakfast included in the room rate?',
              answer: 'Yes, all our room rates include a complimentary breakfast featuring both continental options and traditional Sri Lankan dishes.'
            }, {
              question: 'Do you have facilities for guests with disabilities?',
              answer: "We have select rooms with accessibility features. Please contact us directly to discuss your specific requirements and we'll do our best to accommodate your needs."
            }, {
              question: 'What activities are available at the property?',
              answer: 'We offer a range of activities including guided hikes, tea plantation tours, cooking classes, and yoga sessions. Our concierge can also arrange various excursions to nearby attractions.'
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2 text-emerald-800">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>)}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-emerald-800">
              Ready to Experience Hasnavila?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Contact us today to book your stay or inquire about our special
              packages and seasonal offers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+94771234567" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded transition-colors text-lg">
                Call Us Now
              </a>
              <a href="mailto:reservations@hasnavila.com" className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded transition-colors text-lg">
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};