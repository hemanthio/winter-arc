'use client'

import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function AdvancedRollingTransitionBackgroundToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggleBackground = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`flex items-center justify-center min-h-screen transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-100'}`}>
      <button
        onClick={toggleBackground}
        className={`w-24 h-12 rounded-full p-1 shadow-md transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 relative ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}
        aria-label="Toggle background"
      >
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full shadow-sm transition-all duration-300 ease-in-out ${
            isDark 
              ? 'translate-x-12 rotate-180 bg-blue-500' 
              : 'translate-x-0 rotate-0 bg-blue-500'
          }`}
        >
          {isDark ? (
            <Moon className="h-6 w-6 text-white transition-all duration-300 rotate-180" />
          ) : (
            <Sun className="h-6 w-6 text-white transition-all duration-300" />
          )}
        </div>
        <div className="absolute inset-1 pointer-events-none">
          <Sun className={`absolute left-0 h-10 w-10 p-2 text-blue-500 transition-opacity duration-300 ${isDark ? 'opacity-30' : 'opacity-0'}`} />
          <Moon className={`absolute right-0 h-10 w-10 p-2 text-blue-500 transition-opacity duration-300  ${isDark ? 'opacity-0' : 'opacity-30'}`} />
        </div>
      </button>
    </div>
  )
}