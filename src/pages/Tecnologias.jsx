import React from 'react'

const Tecnologias = () => {
  return (
    <div className="xl:w-[70%]  2xl:h-auto mx-auto  rounded-[2rem] dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative] relative  " id='tec'>
      {/* Radial gradient for the container to give a faded look */}
      <div className=" transition-all duration-300 ease-linear absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#1a2b2b] bg-silver-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1a2b2b)]"></div>
      
      <div className='text-silver-950 dark:text-silver-100 tracking-[1px] relative z-20 '>
          <h2 className='text-[3rem] font-bold bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400' >Tecnologías</h2>  
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui!</p>    
      </div>
      
    </div>
  )
}

export default Tecnologias
