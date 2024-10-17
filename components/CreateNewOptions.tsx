'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Folder, ListTodo, StickyNote, Trophy, Flag, Calendar, X, Plus } from 'lucide-react'

export default function CreateNewOptions() {
  const [isOpen, setIsOpen] = useState(false)

  const options = [
    { icon: Folder, label: 'Project' },
    { icon: ListTodo, label: 'Task' },
    { icon: StickyNote, label: 'Note' },
    { icon: Trophy, label: 'Goal' },
    { icon: Flag, label: 'Milestone' },
    { icon: Calendar, label: 'Reminder' },
  ]

  const handleOptionClick = (option: string) => {
    console.log(`Creating new ${option}`)
    setIsOpen(false)
  }

  const popupVariants = {
    initial: { width: 'auto', height: 'auto', opacity: 0.8 },
    open: { 
      width: 'auto', 
      height: 'auto', 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.3
      }
    },
    closed: { 
      width: '160px', 
      height: '48px', 
      opacity: 0.8,
      // transition: { 
      //   type: " fade-in ", 
      //   stiffness: 200, 
      //   damping: 40,
      //   duration: 0.3
      // }
    }
  }

  return (
    <div className="relative h-screen flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key="popup"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          exit="closed"
          variants={popupVariants}
          className={`absolute bg-white border border-gray-200 shadow-lg overflow-hidden ${
            isOpen ? 'rounded-2xl' : 'rounded-full cursor-pointer'
          }`}
          onClick={() => !isOpen && setIsOpen(true)}
        >
          {isOpen ? (
            <div className='bg-[#F6F5EE] rounded-2xl'>
              <div className="flex flex-col">
                <div className="flex justify-between p-3 rounded-t-2xl bg-[#F6F5EE] items-center">
                  <h2 className="text-sm font-sfpro font-regular">Create New</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 p-2 hover:bg-gray-400 hover:text-gray-700 hover:bg-opacity-50 rounded-full"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="iconbox bg-white grid grid-cols-3 p-6 rounded-b-2xl gap-5">
                  {options.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleOptionClick(option.label)}
                      className="flex items-center flex-col justify-start p-3 text-sm text-gray-700 font-sfpro rounded-xl hover:bg-gray-100 transition-colors group"
                    >
                      <option.icon className="mr-2 h-6 w-6 text-gray-500 group-hover:text-gray-900 transition-colors" />
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-white p-4 rounded-full opacity-80 text-xl font-regular font-sfpro text-gray-700">
              <Plus size={20} className="mr-2" />
              <span className='text-sm'>Create New</span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}