import React, { useEffect, useState, Children } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }, {
    name: 'Rooms',
    path: '/rooms'
  }, {
    name: 'Nearby Attractions',
    path: '/nearby'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return <motion.nav initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.6,
    ease: 'easeOut'
  }} className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            ease: 'easeOut'
          }} className={`text-2xl font-serif font-bold ${scrolled ? 'text-emerald-700' : 'text-white'} group-hover:text-emerald-400 transition-colors duration-300`}>
              Hasnavila
            </motion.div>
          </Link>
          <div className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link, index) => <motion.div key={link.path} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: index * 0.1
          }}>
                <Link to={link.path} className={`relative px-4 py-2 font-medium transition-colors ${location.pathname === link.path ? scrolled ? 'text-emerald-600' : 'text-emerald-300' : scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'}`}>
                  {link.name}
                  {location.pathname === link.path && <motion.div layoutId="navbar-underline" className={`absolute bottom-0 left-0 w-full h-0.5 ${scrolled ? 'bg-emerald-600' : 'bg-emerald-300'}`} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.3
              }} />}
                </Link>
              </motion.div>)}
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.6
          }} className="relative ml-4 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full opacity-70 blur-sm group-hover:opacity-100 group-hover:blur transition duration-300"></div>
              <Link to="#booking" className="relative flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-emerald-500/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out overflow-hidden group-hover:scale-[1.02]">
                <span className="relative z-10">Book Now</span>
                <motion.span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" initial={{
                opacity: 0
              }} whileHover={{
                opacity: 1
              }}></motion.span>
              </Link>
            </motion.div>
          </div>
          <div className="md:hidden">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-full ${scrolled ? 'text-emerald-700 hover:bg-emerald-50' : 'text-white hover:bg-white/10'} transition-colors`} aria-label="Toggle menu">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </motion.button>
          </div>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && <motion.div initial={{
          opacity: 0,
          height: 0,
          y: -10
        }} animate={{
          opacity: 1,
          height: 'auto',
          y: 0
        }} exit={{
          opacity: 0,
          height: 0,
          y: -10
        }} transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }} className="md:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
              <motion.div className="flex flex-col p-4" initial="hidden" animate="visible" variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.07
              }
            }
          }}>
                {navLinks.map(link => <motion.div key={link.path} variants={{
              hidden: {
                opacity: 0,
                x: -20
              },
              visible: {
                opacity: 1,
                x: 0
              }
            }}>
                    <Link to={link.path} className={`font-medium py-3 px-4 rounded-xl transition-colors block ${location.pathname === link.path ? 'bg-emerald-50 text-emerald-600 border-l-4 border-emerald-500' : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'}`}>
                      {link.name}
                    </Link>
                  </motion.div>)}
                <motion.div variants={{
              hidden: {
                opacity: 0,
                x: -20
              },
              visible: {
                opacity: 1,
                x: 0
              }
            }} className="mt-2 relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-xl opacity-70 blur-sm"></div>
                  <Link to="#booking" className="relative block text-center bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-3 px-4 rounded-xl font-medium shadow-md hover:shadow-emerald-500/30 hover:shadow-lg transition-all">
                    <span className="relative z-10">Book Now</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </motion.nav>;
};