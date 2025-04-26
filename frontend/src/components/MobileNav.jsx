"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"
import citiesData from "../assets/constants"

const MobileNav = ({ activeCity, setMobileMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // setMobileMenuOpen(!isOpen)
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  const containerVariants = {
    closed: {
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      height: "auto",
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  return (
    <div className="md:hidden">
      {/* Menu Toggle Button */}
      <button 
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-amber-600 text-white shadow-lg"
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="currentColor"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 5 L 22 5" },
              open: { d: "M 3 19 L 17 5" }
            }}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="currentColor"
            strokeLinecap="round"
            d="M 2 12 L 22 12"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.1 }}
          />
          <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="currentColor"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 19 L 22 19" },
              open: { d: "M 3 5 L 17 19" }
            }}
            animate={isOpen ? "open" : "closed"}
          />
        </svg>
      </button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={containerVariants}
            className="fixed inset-0 z-40 bg-white pt-20 pb-6 px-4 overflow-hidden"
          >
            <motion.div 
              className="flex flex-col space-y-4"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              <motion.div variants={itemVariants}>
                <Link
                  to="/"
                  className={`block py-3 px-4 rounded-lg font-medium ${
                    activeCity === 'home'
                      ? 'bg-amber-50 text-amber-600'
                      : 'text-gray-600 hover:bg-amber-50 hover:text-amber-600'
                  }`}
                  onClick={toggleMenu}
                >
                  Accueil
                </Link>
              </motion.div>
              
              {citiesData.map((city) => (
                <motion.div key={city.id} variants={itemVariants}>
                  <Link
                    to={`/city/${city.id}`}
                    className={`block py-3 px-4 rounded-lg font-medium ${
                      activeCity === city.id
                        ? 'bg-amber-50 text-amber-600'
                        : 'text-gray-600 hover:bg-amber-50 hover:text-amber-600'
                    }`}
                    onClick={() => {
                      toggleMenu();
                      window.scrollTo(0, 0);
                    }}
                  >
                    {city.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="mt-4">
                <Link
                  to="/contact"
                  className="block py-3 px-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-center"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav