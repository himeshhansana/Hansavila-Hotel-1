import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryImages = [{
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Villas',
    title: 'Mountain View Villa Exterior'
  }, {
    src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Rooms',
    title: 'Luxury Suite Bedroom'
  }, {
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    category: 'Rooms',
    title: 'Premium King Bedroom'
  }, {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    category: 'Exteriors',
    title: 'Garden View'
  }, {
    src: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
    category: 'Dining',
    title: 'Restaurant Interior'
  }, {
    src: 'https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Amenities',
    title: 'Infinity Pool'
  }, {
    src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    category: 'Surroundings',
    title: 'Tea Plantations'
  }, {
    src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Rooms',
    title: 'Bathroom with View'
  }, {
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Dining',
    title: 'Breakfast Setup'
  }, {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Villas',
    title: 'Deluxe Villa at Sunset'
  }, {
    src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
    category: 'Amenities',
    title: 'Spa Treatment Room'
  }, {
    src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Surroundings',
    title: 'Sunset View from Property'
  }];
  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredImages = activeCategory === 'All' ? galleryImages : galleryImages.filter(img => img.category === activeCategory);
  return <div className="w-full pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-emerald-900">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
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
              Our Gallery
            </h1>
            <p className="text-xl">
              Explore the beauty of Hasnavila through our curated collection of
              images
            </p>
          </motion.div>
        </div>
      </section>
      {/* Gallery Filter */}
      <section className="py-12 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => <motion.button key={index} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-full transition-colors ${activeCategory === category ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-800 hover:bg-emerald-100'}`}>
                {category}
              </motion.button>)}
          </div>
        </div>
      </section>
      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => <motion.div key={index} initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: index * 0.05
          }} whileHover={{
            scale: 1.03
          }} className="cursor-pointer overflow-hidden rounded-lg shadow-md" onClick={() => setSelectedImage(image.src)}>
                <div className="relative aspect-[4/3]">
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <p className="text-white text-sm">{image.category}</p>
                    <h3 className="text-white font-medium">{image.title}</h3>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Lightbox */}
      {selectedImage && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors">
            <XIcon size={32} />
          </button>
          <motion.img src={selectedImage} alt="Enlarged view" initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 0.3
      }} className="max-w-full max-h-[90vh] object-contain" />
        </motion.div>}
    </div>;
};