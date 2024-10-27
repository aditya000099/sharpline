'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const portfolioItems = [
  { src: '/ice.png', alt: 'Custom Box Design' },
  { src: '/chocolate.png', alt: 'Notebook Cover' },
  { src: '/flyer.png', alt: 'Flyer Design' },
  { src: '/chocolate.png', alt: 'Medicine Box' },
  { src: '/ice.png', alt: 'Ice Cream Box' },
  { src: '/chocolate.png', alt: 'Chocolate Box' },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={2160}
                height={2160}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
