import React from 'react';
import { motion } from 'framer-motion';
import { MapPin as MapPinIcon, Clock as ClockIcon, Car as CarIcon } from 'lucide-react';
export const Nearby = () => {
  const attractions = [{
    name: 'Gregory Lake',
    description: 'A picturesque artificial lake created during the British colonial era. Enjoy boating, jet skiing, or simply relax by the shore with stunning mountain views.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    distance: '1.5 km',
    timeToReach: '5 min drive',
    activities: ['Boating', 'Jet skiing', 'Horse riding', 'Picnicking']
  }, {
    name: 'Victoria Park',
    description: 'A beautifully maintained English-style garden with colorful flower beds, manicured lawns, and a variety of bird species. Perfect for a leisurely stroll.',
    image: 'https://images.unsplash.com/photo-1564604761388-83eafc96f668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    distance: '3 km',
    timeToReach: '10 min drive',
    activities: ['Bird watching', 'Photography', 'Walking', 'Flower viewing']
  }, {
    name: 'Horton Plains National Park',
    description: "A protected area of montane grassland and cloud forest, home to World's End, a sheer cliff with a drop of about 880m offering breathtaking views.",
    image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    distance: '32 km',
    timeToReach: '1 hour drive',
    activities: ['Hiking', 'Wildlife spotting', 'Photography', 'Bird watching']
  }, {
    name: 'Pedro Tea Estate',
    description: "One of Sri Lanka's famous tea factories where you can learn about the tea-making process from leaf to cup and sample some of the world's finest Ceylon tea.",
    image: 'https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    distance: '5 km',
    timeToReach: '15 min drive',
    activities: ['Factory tours', 'Tea tasting', 'Tea garden walks', 'Shopping']
  }, {
    name: 'Hakgala Botanical Garden',
    description: 'One of the oldest botanical gardens in Sri Lanka, featuring roses, orchids, and rare ferns. According to legend, it was once the pleasure garden of Ravana.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    distance: '10 km',
    timeToReach: '25 min drive',
    activities: ['Botanical tours', 'Photography', 'Picnicking', 'Nature walks']
  }, {
    name: 'Ramboda Falls',
    description: 'An impressive 109m high waterfall, one of the highest in Sri Lanka. The falls consist of two cascades, creating a spectacular sight especially during the rainy season.',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    distance: '25 km',
    timeToReach: '45 min drive',
    activities: ['Swimming', 'Photography', 'Hiking', 'Nature observation']
  }];
  return <div className="w-full pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-emerald-900">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
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
              Nearby Attractions
            </h1>
            <p className="text-xl">
              Explore the natural beauty and cultural richness of Nuwara Eliya
              during your stay
            </p>
          </motion.div>
        </div>
      </section>
      {/* Introduction */}
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
        }} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-emerald-800">
              Discover Nuwara Eliya
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Known as "Little England," Nuwara Eliya is a charming hill station
              nestled among the rolling hills of Sri Lanka's central highlands.
              With its cool climate, misty mountains, and lush tea plantations,
              it offers a refreshing retreat and numerous attractions to
              explore.
            </p>
            <p className="text-gray-700 text-lg">
              At Hasnavila, we're perfectly positioned to help you discover the
              best of this beautiful region. Our concierge can arrange
              transportation and guided tours to any of these attractions,
              ensuring you make the most of your stay.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Attractions */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {attractions.map((attraction, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-xl h-80">
                    <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4 text-emerald-800">
                    {attraction.name}
                  </h2>
                  <p className="text-gray-700 mb-6">{attraction.description}</p>
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center">
                      <MapPinIcon size={20} className="text-emerald-600 mr-2" />
                      <span>{attraction.distance} from Hasnavila</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon size={20} className="text-emerald-600 mr-2" />
                      <span>{attraction.timeToReach}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-emerald-800">
                    Popular Activities
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {attraction.activities.map((activity, i) => <span key={i} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                        {activity}
                      </span>)}
                  </div>
                  <button className="flex items-center text-emerald-600 hover:text-emerald-800 transition-colors font-medium">
                    <CarIcon size={18} className="mr-2" />
                    Ask us about arranging a visit
                  </button>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Local Experiences */}
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
              Curated Experiences
            </h2>
            <p className="text-gray-700 text-lg">
              At Hasnavila, we offer specially curated experiences to help you
              discover the beauty and culture of Nuwara Eliya.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            title: 'Tea Plantation Tour',
            description: "Visit a working tea estate, learn about the tea-making process, and enjoy a tasting session of Ceylon's finest teas.",
            image: 'https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          }, {
            title: 'Sunrise Hike',
            description: 'Experience the magic of dawn with a guided hike to a scenic viewpoint, followed by a picnic breakfast in nature.',
            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          }, {
            title: 'Cultural Cooking Class',
            description: 'Learn to prepare traditional Sri Lankan dishes using fresh, local ingredients under the guidance of our expert chef.',
            image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          }].map((experience, index) => <motion.div key={index} initial={{
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
          }} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img src={experience.image} alt={experience.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-emerald-800">
                    {experience.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  <button className="text-emerald-600 hover:text-emerald-800 transition-colors font-medium">
                    Learn more
                  </button>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Call to Action */}
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
              Plan Your Adventure
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Our concierge team is ready to help you plan the perfect itinerary
              for exploring Nuwara Eliya and its surroundings. Whether you're
              interested in nature, culture, or adventure, we can customize
              experiences to match your preferences.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded transition-colors text-lg">
              Contact Our Concierge
            </button>
          </motion.div>
        </div>
      </section>
    </div>;
};