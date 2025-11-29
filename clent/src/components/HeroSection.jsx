import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-start justify-center gap-4
    px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover
    bg-center h-screen'>   
    <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20' />
    <h1> Guardians <br/> of The Galaxy </h1>
    <div className='flex items-center gap-4 text-gray-300'>
        <span>Action|Adventure|Sci-Fi</span>
        <div className='flex items-center gap-1'>
            <CalendarIcon className='w-4 h-4'/> 2018
        </div>
        <div className='flex items-center gap-1'>
            <ClockIcon className='w-4 h-4'/> 2h 8m
        </div>
    </div>
    <p className='max-w-md text-gray-300'>A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</p>
    {/* explore movies button new window open so navigate needed */}
<button 
  onClick={()=>navigate('/movies')} 
  className='px-6 py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium mt-4 flex items-center gap-2'>
  Explore Movies
  <ArrowRight />
</button>

    </div>
  )
}

export default HeroSection