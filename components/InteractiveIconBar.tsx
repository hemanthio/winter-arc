'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, Inbox, Eye, Settings, Share2, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Component() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null)
  const [lastHoveredIcon, setLastHoveredIcon] = useState<number | null>(null);
  const toolbarRef = useRef<HTMLDivElement>(null)
  const iconRefs = useRef<(HTMLDivElement | null)[]>([])
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([])

  

  const icons = [
    { name: 'Comment', icon: MessageCircle },
    { name: 'Inbox', icon: Inbox },
    { name: 'Feature Flags', icon: Eye },
    { name: 'Draft Mode', icon: Settings },
    { name: 'Share', icon: Share2 },
    { name: 'Menu', icon: Menu },
  ]

  const handleMouseEnter = (index: number) => {
    setHoveredIcon(index);
    setLastHoveredIcon(index);  // Track the last hovered icon
  };
  
  const handleMouseLeave = () => {
    setHoveredIcon(null);  // Set hoveredIcon to null, but lastHoveredIcon stays
  };
  
  useEffect(() => {
    iconRefs.current = iconRefs.current.slice(0, icons.length)
    labelRefs.current = labelRefs.current.slice(0, icons.length)
  }, [icons])

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative">
      <motion.div
  className="absolute bottom-full left-0 mb-2 bg-black text-white text-sm font-sfpro rounded-md overflow-hidden"
  initial={false}
  animate={{
    width: hoveredIcon !== null ? labelRefs.current[hoveredIcon]?.offsetWidth : 0,
    height: hoveredIcon !== null ? labelRefs.current[hoveredIcon]?.offsetHeight : 0,
    x: lastHoveredIcon !== null && iconRefs.current[lastHoveredIcon]
      ? iconRefs.current[lastHoveredIcon]!.offsetLeft + 
        (iconRefs.current[lastHoveredIcon]!.offsetWidth / 3) - 
        (labelRefs.current[lastHoveredIcon]?.offsetWidth || 0) / 3
      : 0,
  }}
  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
>


          {icons.map((item, index) => (
            <span
              key={index}
              ref={el => labelRefs.current[index] = el}
              className="absolute top-0 text-base left-0 px-3 py-1.5 whitespace-nowrap" 
              style={{
                opacity: hoveredIcon === index ? 1 : 0,
                pointerEvents: 'none',
              }}
            >
              {item.name}
            </span>
          ))}
        </motion.div>
        <div
          ref={toolbarRef}
          className="flex bg-black rounded-full p-2 shadow-lg"
        >
          {icons.map((item, index) => (
            <div 
              key={index} 
              ref={el => iconRefs.current[index] = el}
              className="relative px-3 py-2"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <item.icon className="w-5 h-5 text-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { MessageCircle, Inbox, Eye, Settings, Share2, Menu } from 'lucide-react'
// import { motion } from 'framer-motion'

// export default function Component() {
//   const [hoveredIcon, setHoveredIcon] = useState<number | null>(null)
//   const toolbarRef = useRef<HTMLDivElement>(null)
//   const iconRefs = useRef<(HTMLDivElement | null)[]>([])
//   const labelRefs = useRef<(HTMLSpanElement | null)[]>([])

//   const icons = [
//     { name: 'Comment', icon: MessageCircle },
//     { name: 'Inbox', icon: Inbox },
//     { name: 'Feature Flags', icon: Eye },
//     { name: 'Draft Mode', icon: Settings },
//     { name: 'Share', icon: Share2 },
//     { name: 'Menu', icon: Menu },
//   ]

//   const handleMouseEnter = (index: number) => {
//     setHoveredIcon(index)
//   }

//   const handleMouseLeave = () => {
//     setHoveredIcon(null)
//   }

//   useEffect(() => {
//     iconRefs.current = iconRefs.current.slice(0, icons.length)
//     labelRefs.current = labelRefs.current.slice(0, icons.length)
//   }, [icons])

//   return (
//     <div className="flex items-center justify-center h-screen bg-white">
//       <div className="relative">
//         {/** Motion.div wrapping the tooltip */}
//         <motion.div
//           className="absolute bottom-full left-0 mb-2 bg-black text-white text-sm rounded-md overflow-hidden"
//           initial={false}
//           animate={{
//             opacity: hoveredIcon !== null ? 1 : 0, // Only change opacity on hover/leave
//             x: hoveredIcon !== null && iconRefs.current[hoveredIcon]
//               ? iconRefs.current[hoveredIcon]!.offsetLeft +
//                 iconRefs.current[hoveredIcon]!.offsetWidth / 2 -
//                 (labelRefs.current[hoveredIcon]?.offsetWidth || 0) / 2
//               : 0, // Position over the hovered icon
//             y: hoveredIcon !== null ? -10 : -20, // Slide from above when hovered
//           }}
//           transition={{ type: 'spring', stiffness: 500, damping: 30 }}
//         >
//           {icons.map((item, index) => (
//             <span
//               key={index}
//               ref={el => (labelRefs.current[index] = el)}
//               className="absolute top-0 left-0 px-3 py-1 whitespace-nowrap"
//               style={{
//                 opacity: hoveredIcon === index ? 1 : 0,
//                 pointerEvents: 'none',
//               }}
//             >
//               {item.name}
//             </span>
//           ))}
//         </motion.div>

//         {/** Toolbar with icons */}
//         <div ref={toolbarRef} className="flex bg-black rounded-full p-2 shadow-lg">
//           {icons.map((item, index) => (
//             <div
//               key={index}
//               ref={el => (iconRefs.current[index] = el)}
//               className="relative px-3 py-2"
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <item.icon className="w-5 h-5 text-white" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
