'use client'

import { useState, useEffect, useRef } from 'react'
import { Star } from 'lucide-react'

export default function GoldFilledStarButton() {
  const [count, setCount] = useState(68)
  const [isStarActive, setIsStarActive] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleStarClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCount(69)
    setIsStarActive(true)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setCount(68)
      setIsStarActive(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <button
        ref={buttonRef}
        className="flex items-center bg-black rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        <div className="flex items-center px-4 py-2 border-r border-gray-700">
          <div className="relative w-5 h-5 mr-2">
            <Star 
              onClick={handleStarClick}
              className={`w-5 h-5 transition-all duration-300 ease-in-out cursor-pointer
                ${isStarActive ? 'text-yellow-400' : 'text-gray-400'}
                hover:text-yellow-400`}
              fill={isStarActive ? 'currentColor' : 'none'}
            />
            {isStarActive && (
              <div className="absolute inset-0 bg-yellow-400 animate-ping rounded-full opacity-75"></div>
            )}
          </div>
          <span className="text-white font-sfpro  font-medium">Star</span>
        </div>
        <div className="px-4 py-2">
          <span className="text-gray-300 font-sfpro  font-medium">{count}</span>
        </div>
      </button>
    </div>
  )
}