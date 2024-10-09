"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User } from 'lucide-react'

export default function Component() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="flex items-center justify-center p-4 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon - fixed position */}
      <div className="w-6 h-6 mr-2 flex items-center justify-center">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="text-pink-500"
            >
              <User size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Name - fixed position */}
      <h1 className="text-2xl font-semibold text-gray-800 mr-2">
        Aryawebly &#x2022; 
      </h1>

      {/* Role - fixed width to prevent shifting */}
      <div className="flex justify-between pt-1 items-center" style={{ width: '200px' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={isHovered ? "Designer" : "Creative Developer"}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.15 }}
            className="text-xl text-gray-600"
          >
            {isHovered ? "Designer" : "Creative Developer"}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
