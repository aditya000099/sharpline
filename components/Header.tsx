'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Sharpline Offset Printers
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#services" className="text-gray-700 hover:text-indigo-600">Services</Link></li>
            <li><Link href="#products" className="text-gray-700 hover:text-indigo-600">Products</Link></li>
            <li><Link href="#portfolio" className="text-gray-700 hover:text-indigo-600">Portfolio</Link></li>
            <li><Link href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
