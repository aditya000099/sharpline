'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  { name: 'Custom Boxes', image: '/images/custom-box.jpg' },
  { name: 'Notebook Covers', image: '/images/notebook-cover.jpg' },
  { name: 'Medicine Boxes', image: '/images/medicine-box.jpg' },
  { name: 'Ice Cream Boxes', image: '/images/ice-cream-box.jpg' },
  { name: 'Chocolate Boxes', image: '/images/chocolate-box.jpg' },
  { name: 'Flyers', image: '/images/flyer.jpg' },
]

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
