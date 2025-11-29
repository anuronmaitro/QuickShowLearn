import { ArrowRight } from 'lucide-react'
import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle';

const FeaturedSection = () => {
    const navigate=useNavigate();
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
        {/* title div */}
        <div className='relative flex items-center justify-between pt-20 pb-10'>
        <BlurCircle top='0' right='-80px'/>
        <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
        {/* view all new window so navigate */}
        <button onClick={()=>navigate('/movies')} className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'>View All <ArrowRight className='group-hover:translate-x-0.5 
        transition w-4.5 h-4.5' /></button>
        </div>
        {/* movie card */}
        <div></div>
        {/*show more button */}
        <div className='flex justify-center mt-20'>
            {/* when on click we navigate to movies page and scroll to top */}
            <button onClick={ ()=>{navigate('/movies');scrollTo(0,0)}} className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull
            transition rounded-md font-medium cursor-pointer' >Show More</button>
        </div>
    </div>
  )
}

export default FeaturedSection