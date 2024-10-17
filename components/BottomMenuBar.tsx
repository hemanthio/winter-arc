'use client';

import React, { useState, FC, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Link, Code, Laptop, FileText, Image, Clock, LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon?: LucideIcon | (() => JSX.Element);
  text: string;
  subtext?: string;
  date?: string;
  type?: string;
  onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ icon: Icon, text, subtext, date, type, onClick }) => (
  <motion.div
    className="flex items-center justify-between py-2 px-2 cursor-pointer" 
    onClick={onClick}
    whileHover={{
      scale: 0.95,
      transition: { type: 'spring', damping: 20, stiffness: 300 },
    }}
  >
    <div className="flex items-center">
      {Icon && (typeof Icon === 'function' ? <Icon /> : <Icon className="mr-2" size={18} />)}
      <div>
        <div className="text-sm text-black">{text}</div>
        {subtext && <div className="text-sm opacity-90 font-medium text-[#634935]">{subtext}</div>}
      </div>
    </div>
    <div className="flex items-center">
      {type && <span className="text-xs bg-gray-200 bg-opacity-20 rounded px-2 py-1 mr-2">{type}</span>}
      {date && <div className="text-xs font-helvetica text-[#634935]">{date}</div>}
    </div>
  </motion.div>
);

const MenuBar: FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems: Record<string, MenuItemProps[]> = {
    Apps: [
      {
        icon: () => <div className="w-6 h-6 bg-gray-800 text-white flex items-center font-[SFProDisplayMedium] justify-center rounded mr-2">K</div>,
        text: "Klack",
        subtext: "Satisfying key sounds"
      },
      {
        icon: () => (
          <div className="w-6 h-6 bg-gray-100 flex items-center justify-center rounded mr-2">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 5.611 12 2l-8 3.611v12.778L12 22l8-3.611V5.611z" />
              <path d="M12 22v-6" />
              <path d="M20 5.611 12 9.222 4 5.611" />
              <path d="M12 16 4 12.389" />
              <path d="M20 12.389 12 16" />
            </svg>
          </div>
        ),
        text: "Quill",
        subtext: "Craft pages, and docs"
      }
    ],
    Components: [
      { icon: Calendar, text: "Action Bar", type: "Dynamic", date: "06 · 24" },
      { icon: Image, text: "Image Expand", type: "Overlay", date: "05 · 24" },
      { icon: Clock, text: "Read Time", type: "Scroll", date: "04 · 24" }
    ],
    Notes: [
      { icon: Link, text: "Changelog using GitHub", date: "Jun, 2024" },
      { icon: Link, text: "Feedback in Slack", date: "May, 2024" }
    ]
  };

  const handleItemClick = (item: MenuItemProps) => {
    console.log(`Clicked on ${item.text}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveTab(null);
        setIsHovered(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-24 left-0 right-0 p-2 
    ">
      <motion.div 
        ref={menuRef} 
        className="max-w-md mx-auto bg-[#E1CDBA] font-bold text-[#634935] rounded-xl shadow-lg overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveTab(null);
        }}
        animate={{
          padding: isHovered ? 8 : 4,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <AnimatePresence>
          {activeTab && (
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="p-4">
                {menuItems[activeTab].map((item, index) => (
                  <MenuItem key={index} {...item} onClick={() => handleItemClick(item)} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-evenly p-1">
          {Object.keys(menuItems).map((tab) => (
            <motion.button
              key={tab}
              className="flex items-center px-4 py-1 rounded-xl"
              onMouseEnter={() => setActiveTab(tab)}
              animate={{
                backgroundColor: activeTab === tab ? '#24201E' : 'transparent',
                color: activeTab === tab ? 'white' : '#634935',
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {tab === 'Apps' && <Laptop className="mr-2" size={18} />}
              {tab === 'Components' && <Code className="mr-2" size={18} />}
              {tab === 'Notes' && <FileText className="mr-2" size={18} />}
              {tab}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MenuBar;
