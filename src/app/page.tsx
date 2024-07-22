import ThreeDModelLoader from '@/components/Loader'
import React from 'react'

const page = () => {

  return (
    <div className='flex w-[100%] min-h-screen flex-col'>
        
            
            <ThreeDModelLoader modelUrl="/Ring.3dm"/>
            <ThreeDModelLoader modelUrl="/Band.3dm"/>
          
    </div>
  )
}

export default page
