import React, { memo } from 'react';
import { motion } from 'framer-motion';
export const About = () => {
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <div className="w-full pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-emerald-900">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl">
              Discover the history, vision, and people behind Hasnavila
            </p>
          </motion.div>
        </div>
      </section>
      {/* Our History */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          }}>
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Historical photo of Nuwara Eliya" className="rounded-lg shadow-xl" />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl font-serif font-bold mb-6 text-emerald-800">
                Our History
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, Hasnavila began as a single colonial-style
                villa, lovingly restored by the Silva family. What started as a
                passion project soon grew into one of Nuwara Eliya's most
                sought-after luxury accommodations.
              </p>
              <p className="text-gray-700 mb-4">
                The name "Hasnavila" combines "Hasna," meaning "smile" in
                Arabic, with "vila," reflecting our desire to create a place
                where guests can find joy and relaxation in the natural beauty
                of Sri Lanka's hill country.
              </p>
              <p className="text-gray-700">
                Over the years, we've expanded our property to include
                additional villas and suites, each designed to honor the
                region's colonial heritage while providing modern comforts and
                amenities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Vision */}
      <section className="py-16 md:py-24 bg-emerald-50">
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
        }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-emerald-800">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg">
              At Hasnavila, we strive to create an experience that connects our
              guests with the natural beauty and rich culture of Sri Lanka's
              hill country.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            title: 'Sustainable Luxury',
            description: 'We believe luxury and environmental responsibility can go hand in hand. From our eco-friendly building materials to our farm-to-table dining philosophy, sustainability is at the heart of everything we do.'
          }, {
            title: 'Cultural Immersion',
            description: 'We aim to provide authentic experiences that connect our guests with local traditions, crafts, and cuisine, supporting local communities while enriching your stay.'
          }, {
            title: 'Personalized Experiences',
            description: 'Every guest is unique, which is why we tailor our services to meet your specific needs and preferences, ensuring a truly memorable stay.'
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
          }} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-emerald-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="py-16 md:py-24">
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
        }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-emerald-800">
              Meet Our Team
            </h2>
            <p className="text-gray-700 text-lg">
              The heart and soul of Hasnavila is our dedicated team, committed
              to making your stay exceptional.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            name: 'Amal Silva',
            role: 'Founder & Director',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          }, {
            name: 'Priya Jayawardena',
            role: 'General Manager',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
          }, {
            name: 'Rajiv Perera',
            role: 'Executive Chef',
            image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          }, {
            name: 'Maya Fernando',
            role: 'Guest Relations Manager',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80'
          }].map((member, index) => <motion.div key={index} initial={{
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
          }} className="text-center">
                <div className="relative mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-emerald-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-emerald-50">
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
        }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-emerald-800">
              Guest Experiences
            </h2>
            <p className="text-gray-700 text-lg">
              Don't just take our word for it. Here's what our guests have to
              say about their stay at Hasnavila.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            quote: 'Our stay at Hasnavila was nothing short of magical. The villa was beautiful, the views breathtaking, and the staff went above and beyond to make our anniversary special.',
            author: 'Sarah & Michael',
            location: 'United Kingdom'
          }, {
            quote: 'The perfect blend of luxury and authenticity. We loved the traditional Sri Lankan breakfast and the guided tea plantation tour arranged by the staff.',
            author: 'Akio Tanaka',
            location: 'Japan'
          }, {
            quote: "As a travel blogger, I've stayed in many luxury properties, but Hasnavila stands out for its attention to detail and commitment to sustainable tourism.",
            author: 'Elena Rodriguez',
            location: 'Spain'
          }].map((testimonial, index) => <motion.div key={index} initial={{
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
          }} className="bg-white p-8 rounded-lg shadow-lg">
                <svg className="h-8 w-8 text-emerald-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-emerald-800">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
    </div>;
};