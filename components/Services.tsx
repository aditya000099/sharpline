'use client'

import { motion } from 'framer-motion'
import { FaPrint, FaPalette, FaBox, FaIceCream, FaPrescriptionBottle, FaBook } from 'react-icons/fa'

const services = [
  {
    icon: <FaPrint className="text-4xl text-indigo-600" />,
    title: 'Offset Printing',
    description: 'High-quality printing for all your business needs.',
  },
  {
    icon: <FaPalette className="text-4xl text-indigo-600" />,
    title: 'Graphic Design',
    description: 'Creative designs that make your brand stand out.',
  },
  {
    icon: <FaBox className="text-4xl text-indigo-600" />,
    title: 'Custom Packaging',
    description: 'Tailored packaging solutions for your products.',
  },
  {
    icon: <FaIceCream className="text-4xl text-indigo-600" />,
    title: 'Ice Cream Boxes',
    description: 'Eye-catching boxes for your frozen treats.',
  },
  {
    icon: <FaPrescriptionBottle className="text-4xl text-indigo-600" />,
    title: 'Medicine Boxes',
    description: 'Secure and informative packaging for pharmaceuticals.',
  },
  {
    icon: <FaBook className="text-4xl text-indigo-600" />,
    title: 'Notebook Covers',
    description: 'Durable and attractive covers for notebooks and journals.',
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
