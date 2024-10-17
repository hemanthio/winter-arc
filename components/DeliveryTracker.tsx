'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Package, Truck, Home } from 'lucide-react'

export default function Component() {
  const [progress, setProgress] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const animateProgress = async () => {
      await controls.start({ width: "50%", transition: { duration: 2, ease: "easeInOut" } })
      setProgress(50)

      await controls.start({ width: "100%", transition: { duration: 2, ease: "easeInOut" } })
      setProgress(100)

      await new Promise(resolve => setTimeout(resolve, 1000))

      await controls.start({ width: "0%", transition: { duration: 0 } })
      setProgress(0)

      await new Promise(resolve => setTimeout(resolve, 500))
    }

    animateProgress()
    const interval = setInterval(animateProgress, 5500)
    return () => clearInterval(interval)
  }, [controls])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-80">
        <h2 className="text-2xl font-sfpro font-bold mb-1">On the way</h2>
        <p className="text-gray-600 font-sfpro mb-6">Your cargo is on delivery.</p>
        
        <div className="relative mb-6">
          <div className="bg-black rounded-full p-4">
            <div className="relative flex justify-between items-center">
              <div className="absolute inset-0 flex items-center px-5"> 
                <div className="h-4 w-full bg-gray-600 rounded">
                  <motion.div 
                    className="h-full bg-[#E1FF02] rounded"
                    initial={{ width: "0%" }}
                    animate={controls}
                  />
                </div>
              </div>
              <motion.div 
                className="w-10 h-10 bg-[#E1FF02] rounded-full flex items-center justify-center z-10"
                animate={{ scale: progress === 0 ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.3, times: [0, 0.5, 1] }}
              >
                <Package className="w-5 h-5 text-gray-800" />
              </motion.div>
              <motion.div 
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${progress >= 50 ? 'bg-[#E1FF02]' : 'bg-gray-600'}`}
                animate={{ scale: progress === 50 ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.3, times: [0, 0.5, 1] }}
              >
                <Truck className={`w-5 h-5 ${progress >= 50 ? 'text-gray-800' : 'text-gray-400'}`} />
              </motion.div>
              <motion.div 
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${progress === 100 ? 'bg-[#E1FF02]' : 'bg-gray-600'}`}
                animate={{ scale: progress === 100 ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.3, times: [0, 0.5, 1] }}
              >
                <Home className={`w-5 h-5 ${progress === 100 ? 'text-gray-800' : 'text-gray-400'}`} />
              </motion.div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 font-sfpro  mb-2">Estimated delivery time</p>
        <p className="text-4xl font-bold font-sfpro">09:20</p>
      </div>
    </div>
  )
}