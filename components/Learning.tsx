'use client'

import { AnimatePresence,motion } from 'framer-motion'

import { User } from 'lucide-react'
import React, { useState } from 'react'

const Learning = () => {

    const [isHovered,setIsHovered] = useState(false)
  return (
    <div className=''
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}>
        <div className='w-6 h-6 mr-2 flex items-center justify-center'>
            <AnimatePresence>
                {isHovered &&(
                    <motion.div 
                    initial={{opacity:0,scale:0.5}}
                    animate={{opacity:1,scale:1}}
                    exit={{opacity:0,scale:0.5}}
                    transition={{duration:0.2}}

                    className='text-pink-500'>
                        <User size={24}/>
                    </motion.div>
                )}
            </AnimatePresence>

            <h1 className='text-2xl font-semibold text-gray-800 mr-2'>araywebly</h1>
            <div className='flex justify-between pt-1 items-center' style={{width:'200px'}}>
                <AnimatePresence>
                <motion.span
                key={isHovered ? "designer":"creative developer"}
                initial={{opacity:0,y:-15}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:15}}
                transition={{duration:0.15}}
                className='text-xl text-gray-600'
                
                >
                    {isHovered ? "Designer": "Creative Developer"}
                </motion.span>
                </AnimatePresence>
            </div>
        </div>
    </div>
  )
}

export default Learning