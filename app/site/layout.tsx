

  import Navbar from '@/components/global/navbar'
import React from 'react'
  
  const SiteLayout = ({children}: {children: React.ReactNode}) => {
   children 
    return (
      <div className=' flex-col  flex bg-black'>
       <div>
        <Navbar/>
       </div>
       {children}</div>
    )
  }
  
  export default SiteLayout  