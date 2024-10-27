'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-indigo-800 mb-6">
            Premium Printing Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            From custom boxes to flyers, we bring your ideas to life with precision and creativity
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero
