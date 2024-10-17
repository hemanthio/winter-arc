'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Component() {
  const [count, setCount] = useState(95)
  const [previousCount, setPreviousCount] = useState(95)
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setPreviousCount(count)
  }, [count])

  const changeCount = useCallback((dir: 'up' | 'down') => {
    setDirection(dir)
    setCount(prev => dir === 'up' ? prev + 1 : Math.max(0, prev - 1))
  }, [])

  const startContinuousChange = useCallback((dir: 'up' | 'down') => {
    if (intervalId) clearInterval(intervalId)
    changeCount(dir)
    const id = setInterval(() => changeCount(dir), 100)
    setIntervalId(id)
  }, [changeCount, intervalId])

  const stopContinuousChange = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }, [intervalId])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center space-x-1 bg-white rounded-full shadow-md p-1">
        <button
          onMouseDown={() => startContinuousChange('down')}
          onMouseUp={stopContinuousChange}
          onMouseLeave={stopContinuousChange}
          onTouchStart={() => startContinuousChange('down')}
          onTouchEnd={stopContinuousChange}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 focus:outline-none focus:ring-gray-400"
          aria-label="Decrement"
        >
          -
        </button>
        <div className="w-12 h-8 relative overflow-hidden">
          <AnimatedDigits number={count} previousNumber={previousCount} direction={direction} />
        </div>
        <button
          onMouseDown={() => startContinuousChange('up')}
          onMouseUp={stopContinuousChange}
          onMouseLeave={stopContinuousChange}
          onTouchStart={() => startContinuousChange('up')}
          onTouchEnd={stopContinuousChange}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 focus:outline-none focus:ring-gray-400"
          aria-label="Increment"
        >
          +
        </button>
      </div>
    </div>
  )
}

function AnimatedDigits({ number, previousNumber, direction }: { number: number; previousNumber: number; direction: 'up' | 'down' }) {
  const digits = String(number).padStart(2, '0').split('')
  const previousDigits = String(previousNumber).padStart(2, '0').split('')

  return (
    <div className="flex justify-center items-center h-full">
      {digits.map((digit, index) => (
        <AnimatedDigit 
          key={index} 
          digit={digit} 
          previousDigit={previousDigits[index]}
          direction={direction}
        />
      ))}
    </div>
  )
}

function AnimatedDigit({ digit, previousDigit, direction }: { digit: string; previousDigit: string; direction: 'up' | 'down' }) {
  const variants = {
    enter: (direction: string) => ({
      y: direction === 'up' ? '100%' : '-100%',
      opacity: 0,
      filter: 'blur(8px)',
    }),
    center: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: string) => ({
      y: direction === 'up' ? '-100%' : '100%',
      opacity: 0,
      filter: 'blur(8px)',
    }),
  }

  return (
    <div className="relative w-2.5 h-full">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.span
          key={digit}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            y: { type: 'spring', stiffness: 700, damping: 30 },
            opacity: { duration: 0.18 },
            filter: { duration: 0.18 },
          }}
          className="absolute inset-0 flex items-center justify-center text-lg font-semibold"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}