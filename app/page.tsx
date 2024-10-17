import BottomMenuBar from '@/components/BottomMenuBar'
import CreateNewOptions from '@/components/CreateNewOptions'
import DeliveryTracker from '@/components/DeliveryTracker'
import DigitTransitionCounter from '@/components/DigitTransitionCounter'
import InteractiveIconBar from '@/components/InteractiveIconBar'
import ProfileHoverCard from '@/components/ProfileHoverCard'
import SustainabilityScore from '@/components/SustainabilityScore'
import React from 'react'
import GlassySignUp from '@/components/GlassySignUp'
import Steps from '@/components/Steps'
import PricingComponents from '@/components/PricingComponents'
import ThemeToggle from '@/components/ThemeToggle'
import GithubStar from '@/components/GithubStar'


const page = () => {
  return (
    <>
    <div className='flex justify-center bg-[#FFE7CC] items-center h-screen'>
      <ProfileHoverCard />
      
    </div>
    <InteractiveIconBar/>

    {/* <div className='h-screen flex bg-[#FFE7CC] justify-center items-center'>
    <BottomMenuBar />
    </div> */}
    <DigitTransitionCounter/>
    <DeliveryTracker/>
    
      <CreateNewOptions />
      <div className='flex justify-center h-screen items-center'>
      <SustainabilityScore/>
      </div>
      <GlassySignUp/>
      <Steps/>
      
      <PricingComponents/>
      <ThemeToggle/>
      <GithubStar />
        
    </>
  )
}

export default page





