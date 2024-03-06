import React from 'react'

const Tecnologias = () => {
  return (
    <div className="xl:w-[70%] mx-auto  rounded-[2rem] dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative] relative ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-firefly-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
  )
}

export default Tecnologias
