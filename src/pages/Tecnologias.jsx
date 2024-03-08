import React from 'react'
import js from '../assets/js.png'
const Tecnologias = () => {
  return (
    <div className="xl:w-[70%]  2xl:h-auto mx-auto grid grid-cols-2 gap-2 rounded-[2rem] dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative] relative " id='tec'>
      {/* Radial gradient for the container to give a faded look */}
      <div className=" transition-all duration-300 ease-linear absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#1a2b2b] bg-silver-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1a2b2b)]"></div>
      
      <div className=' text-silver-950 dark:text-silver-100 tracking-[1px] relative z-20 '>
          <h2 className='text-[3rem] font-bold bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400' >Tecnologías</h2>  
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui!</p>  

      </div>
      <div className=' grid grid-cols-5 gap-1 p-3
      '>
        <div className=' justify-self-center rounded-lg overflow-hidden'>
          <img src={js} alt="icon" className=' ' />
        </div>
         <div className=' justify-self-center'>
          <img src={js} alt="icon" className=' ' />
        </div>
        <div className=' justify-self-center'>
          <img src={js} alt="icon" className=' ' />
        </div>
        <div className=' justify-self-center'>
          <img src={js} alt="icon" className=' ' />
        </div>
         <div className=' justify-self-center'>
          <img src={js} alt="icon" className=' ' />
        </div>
        <div className=' justify-self-center'>
          <img src={js} alt="icon" className=' ' />
        </div>
        
      </div>
    </div>
  )
}

export default Tecnologias
