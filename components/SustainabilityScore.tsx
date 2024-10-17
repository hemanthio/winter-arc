"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

const DigitRoller = ({ digit, direction }: { digit: number; direction: number }) => {
  return (
    <div className="relative h-[100px]  w-[69px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={digit}
          custom={direction}
          variants={{
            enter: (direction) => ({ 
              y: direction > 0 ? 100 : -100, 
              opacity: 0,
              filter: "blur(5px)",
            }),
            center: { 
              y: 0, 
              opacity: 1,
              filter: "blur(0px)",
            },
            exit: (direction) => ({ 
              y: direction > 0 ? -100 : 100, 
              opacity: 0,
              filter: "blur(5px)",
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.1 },
            filter: { duration: 0.1 },
          }}
          className="absolute inset-0 flex items-center justify-center text-[120px] p-4 font-sfpro font-bold text-[#55DC49]"
        >
          {digit}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function Component() {
  const [score, setScore] = useState(0)
  const [direction, setDirection] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(prevScore => {
        if (prevScore < 200) {
          setDirection(1)
          return prevScore + 1
        } else {
          clearInterval(interval)
          // Trigger confetti when score reaches 200
          confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0 }
          });
          return 200
        }
      })
    }, 15) // Faster transition

    return () => clearInterval(interval)
  }, [])

  const digits = String(score).padStart(3, '0').split('').map(Number)

  return (
    <div className="flex items-center justify-center h-screen">
      <div ref={containerRef} className="relative w-64 m-4 h-64 bg-[#122217] rounded-3xl overflow-hidden shadow-lg">
        <div className="absolute top-4 left-4 text-white text-lg font-normal font-sfpro opacity-70">FOLLOWERS</div>
        <div className="absolute top-4 right-4 text-green-500 text-xs bg-green-900 px-2 py-1 rounded-full">
          Last 23 days
        </div>
        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-1 h-3/4">
          {[...Array(11)].map((_, i) => (
            <div key={i} className="w-full h-0.5 bg-white opacity-20 mb-4" />
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative flex">
            {digits.map((digit, index) => (
              <DigitRoller key={`${index}-${digit}`} digit={digit} direction={direction} />
            ))}
          </div>
          <motion.div 
            className="absolute -top-[60px] left-0 right-0 flex justify-center"
            initial={{ opacity: 0.1, filter: "blur(0px)" }}
            animate={{ opacity: 0.1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(5px)" }}
          >
            <div className="text-[100px] font-bold text-green-400">
              {score + 1}
            </div>
          </motion.div>
          <motion.div 
            className="absolute -bottom-[60px] left-0 right-0 flex justify-center"
            initial={{ opacity: 0.1, filter: "blur(0px)" }}
            animate={{ opacity: 0.1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(5px)" }}
          >
            <div className="text-[100px] font-bold text-green-400">
              {score - 1}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
      </div>
    </div>
  )
}