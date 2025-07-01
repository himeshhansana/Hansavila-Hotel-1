import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Wifi as WifiIcon, Coffee as CoffeeIcon, Tv as TvIcon, Users as UsersIcon, Bath as BathIcon, Mountain as MountainIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Rooms = () => {
  const roomData = [{
    id: 1,
    name: 'Mountain View Villa',
    description: 'Our signature villa offers breathtaking panoramic views of the misty mountains and lush valleys of Nuwara Eliya. This spacious accommodation features a private balcony, perfect for enjoying morning tea as the sun rises over the hills.',
    price: 250,
    capacity: '2-3 guests',
    size: '75 sq m',
    bedType: 'King',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'],
    amenities: ['King-size bed', 'Private balcony', 'Rain shower', 'Complimentary breakfast', 'WiFi', 'Smart TV']
  }, {
    id: 2,
    name: 'Tea Garden Suite',
    description: 'Overlooking our verdant tea plantations, this elegant suite offers a serene escape with traditional Sri Lankan décor and modern comforts. Wake up to the gentle sounds of nature and the sight of tea pickers at work in the distance.',
    price: 200,
    capacity: '2 guests',
    size: '60 sq m',
    bedType: 'Queen',
    images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'],
    amenities: ['Queen-size bed', 'Tea garden view', 'Luxury bathroom', 'Complimentary breakfast', 'WiFi', 'Work desk']
  }, {
    id: 3,
    name: 'Luxury Family Villa',
    description: "Perfect for families, this spacious two-bedroom villa offers ample space for relaxation and play. With a private garden and outdoor dining area, it's ideal for creating lasting memories with your loved ones in the beautiful highlands.",
    price: 350,
    capacity: '4-5 guests',
    size: '120 sq m',
    bedType: '1 King & 2 Twin',
    images: ['https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'],
    amenities: ['Two bedrooms', 'Private garden', 'Dining area', 'Family bathroom', 'WiFi', 'Smart TV', 'Mini kitchen']
  }, {
    id: 4,
    name: 'Honeymoon Cottage',
    description: 'Designed with romance in mind, our secluded honeymoon cottage offers the perfect setting for couples. Featuring a private hot tub with mountain views and special touches to make your stay unforgettable.',
    price: 300,
    capacity: '2 guests',
    size: '65 sq m',
    bedType: 'King',
    images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'],
    amenities: ['King-size bed', 'Private hot tub', 'Champagne on arrival', 'Breakfast in bed option', 'WiFi', 'Romantic lighting']
  }];
  const AmenityIcon = ({
    name
  }: {
    name: string;
  }) => {
    switch (true) {
      case name.toLowerCase().includes('wifi'):
        return <WifiIcon size={18} className="text-emerald-600" />;
      case name.toLowerCase().includes('breakfast'):
        return <CoffeeIcon size={18} className="text-emerald-600" />;
      case name.toLowerCase().includes('tv'):
        return <TvIcon size={18} className="text-emerald-600" />;
      case name.toLowerCase().includes('bed'):
        return <UsersIcon size={18} className="text-emerald-600" />;
      case name.toLowerCase().includes('bath'):
        return <BathIcon size={18} className="text-emerald-600" />;
      default:
        return <MountainIcon size={18} className="text-emerald-600" />;
    }
  };
  return <div className="w-full pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-emerald-900">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
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
              Our Accommodations
            </h1>
            <p className="text-xl">
              Discover our range of luxurious rooms and villas, each designed to
              provide comfort and tranquility
            </p>
          </motion.div>
        </div>
      </section>
      {/* Room Listings */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {roomData.map((room, index) => <motion.div key={room.id} initial={{
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
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img src={room.images[0]} alt={room.name} className="w-full h-80 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <p className="text-white font-semibold text-lg">
                        Starting from ${room.price}/night
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {room.images.slice(1).map((image, i) => <img key={i} src={image} alt={`${room.name} view ${i + 1}`} className="h-24 w-full object-cover rounded" />)}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4 text-emerald-800">
                    {room.name}
                  </h2>
                  <p className="text-gray-700 mb-6">{room.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Capacity</p>
                      <p className="font-medium">{room.capacity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Size</p>
                      <p className="font-medium">{room.size}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Bed Type</p>
                      <p className="font-medium">{room.bedType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-medium">${room.price} / night</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-emerald-800">
                    Amenities
                  </h3>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {room.amenities.map((amenity, i) => <div key={i} className="flex items-center">
                        <AmenityIcon name={amenity} />
                        <span className="ml-2 text-gray-700">{amenity}</span>
                      </div>)}
                  </div>
                  <Link to="#booking" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded transition-colors">
                    Book This Room
                  </Link>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Booking Information */}
      <section id="booking" className="py-16 md:py-24 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
          }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-emerald-800">
                Book Your Stay
              </h2>
              <p className="text-gray-700 text-lg">
                Ready to experience the magic of Hasnavila? Fill out the form
                below to check availability and make a reservation.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="checkin" className="block text-gray-700 mb-2">
                      Check-in Date
                    </label>
                    <input type="date" id="checkin" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                  <div>
                    <label htmlFor="checkout" className="block text-gray-700 mb-2">
                      Check-out Date
                    </label>
                    <input type="date" id="checkout" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <select id="guests" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="room" className="block text-gray-700 mb-2">
                    Preferred Accommodation
                  </label>
                  <select id="room" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option value="">Select a room type</option>
                    {roomData.map(room => <option key={room.id} value={room.id}>
                        {room.name} - ${room.price}/night
                      </option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Any special requirements or requests..."></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded transition-colors text-lg">
                    Check Availability
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};