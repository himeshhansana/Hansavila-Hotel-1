import React, { useEffect, Children, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarIcon, UtensilsIcon, WifiIcon, MapIcon, StarIcon } from 'lucide-react';
export const Home = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1580286923998-09fb88152cc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
      }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div className="max-w-xl text-white" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Welcome to Hasnavila
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Luxury villas nestled in the misty mountains of Nuwara Eliya, Sri
              Lanka
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/rooms" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded text-center transition-colors text-lg">
                Explore Rooms
              </Link>
              <Link to="#booking" className="bg-white hover:bg-gray-100 text-emerald-800 px-8 py-3 rounded text-center transition-colors text-lg">
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.5,
        duration: 1
      }}>
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>
      </section>
      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={controls} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-emerald-800">
                Experience Serenity in the Hills
              </h2>
              <p className="text-gray-700 mb-6">
                Nestled in the picturesque landscapes of Nuwara Eliya, Hasnavila
                offers an unparalleled retreat experience. Our luxury villas
                combine traditional Sri Lankan architecture with modern
                amenities to create the perfect mountain getaway.
              </p>
              <p className="text-gray-700 mb-8">
                Surrounded by lush tea plantations and misty mountains, our
                property provides a serene escape from the hustle and bustle of
                everyday life. Wake up to breathtaking views and the gentle
                sounds of nature.
              </p>
              <Link to="/about" className="inline-block border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-2 rounded transition-colors">
                Discover Our Story
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Hasnavila villa exterior" className="rounded-lg h-64 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Luxury bedroom interior" className="rounded-lg h-64 w-full object-cover mt-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-emerald-800">
              Experience Luxury in Every Detail
            </h2>
            <p className="text-gray-700">
              At Hasnavila, we've crafted every aspect of your stay to ensure
              comfort, relaxation, and unforgettable memories.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: <CalendarIcon size={36} className="text-emerald-600" />,
            title: 'Personalized Service',
            description: 'Our attentive staff caters to your every need with warm Sri Lankan hospitality.'
          }, {
            icon: <UtensilsIcon size={36} className="text-emerald-600" />,
            title: 'Authentic Cuisine',
            description: 'Enjoy traditional Sri Lankan dishes prepared with fresh, locally-sourced ingredients.'
          }, {
            icon: <WifiIcon size={36} className="text-emerald-600" />,
            title: 'Modern Amenities',
            description: 'Stay connected with high-speed WiFi while enjoying our luxury accommodations.'
          }, {
            icon: <MapIcon size={36} className="text-emerald-600" />,
            title: 'Guided Excursions',
            description: 'Discover local attractions with our knowledgeable guides and curated experiences.'
          }].map((feature, index) => <motion.div key={index} initial={{
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
          }} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Room Preview Section */}
      <section className="py-16 md:py-24 bg-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-emerald-800">
              Our Luxury Accommodations
            </h2>
            <p className="text-gray-700">
              Choose from our selection of elegantly designed villas and suites,
              each offering unique views and experiences.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            name: 'Mountain View Villa',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: '$250',
            description: 'Spacious villa with panoramic views of the misty mountains and lush valleys.'
          }, {
            name: 'Tea Garden Suite',
            image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: '$200',
            description: 'Elegant suite overlooking verdant tea plantations with a private balcony.'
          }, {
            name: 'Luxury Family Villa',
            image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
            price: '$350',
            description: 'Spacious two-bedroom villa perfect for families, with a private garden and dining area.'
          }].map((room, index) => <motion.div key={index} initial={{
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
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={room.image} alt={room.name} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-emerald-800">
                      {room.name}
                    </h3>
                    <p className="font-semibold text-emerald-600">
                      {room.price}/night
                    </p>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className="text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <Link to="/rooms" className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition-colors">
                    View Details
                  </Link>
                </div>
              </motion.div>)}
          </div>
          <div className="text-center mt-12">
            <Link to="/rooms" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded transition-colors text-lg">
              View All Accommodations
            </Link>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-cover bg-center relative" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')"
    }}>
        <div className="absolute inset-0 bg-emerald-900 bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Experience the Magic of Nuwara Eliya
            </h2>
            <p className="text-xl mb-8">
              Book your stay at Hasnavila today and create memories that will
              last a lifetime.
            </p>
            <Link to="#booking" className="inline-block bg-white hover:bg-gray-100 text-emerald-800 px-8 py-3 rounded transition-colors text-lg">
              Reserve Your Villa
            </Link>
          </motion.div>
        </div>
      </section>
    </div>;
};