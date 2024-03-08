import React, { useEffect } from 'react'
import js from '../assets/js.png'
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards'
import db from '../db/db';
import { collection, getDocs } from 'firebase/firestore';
const Tecnologias = () => {

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoc",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
      url: js
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to ",
      name: "William Shakespeare",
      title: "Hamlet",
      url: js
    }
  ];

  useEffect(() => {

    const q=collection(db,"productos");

    getDocs(q).then(({docs})=>{
      docs.forEach(doc=>{
        console.log( doc.id,doc.data())
      })
    })


  }, [])


  return (
    <div className="xl:w-[70%]  2xl:h-auto mx-auto rounded-[2rem]  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative] relative " id='tec'>
      {/* Radial gradient for the container to give a faded look */}
      <div className=" transition-all duration-300 ease-linear absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#1a2b2b] bg-silver-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1a2b2b)]"></div>
      {/* SubTitulo y descripción */}
      <div className='md:text-center text-silver-950 dark:text-silver-100 tracking-[1px] relative z-20 '>
        <h2 className='text-[3rem] font-bold bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400' >Tecnologías</h2>
        <p>A continuación se contare un poco de la tecnologías que menejo y te compartire los mejores recusros que utilizo</p>

      </div>
      {/* Contenido de tec */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-[100%] mt-4'>
        {/* FRONTEND */}
        <div className='bg-firefly-800 bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-[0px]  rounded-2xl z-20 p-4  '>
          <div>
            <strong className='text-fountain-blue-700 dark:text-fountain-blue-600 text-[1.2rem] tracking-wider'>FrontEnd</strong>
          </div>
          <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
            />
          </div>

        </div>
        {/* BACKEND */}
        <div className='bg-firefly-800 bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-[0px]  rounded-2xl z-20 p-4 '>
          <strong className='text-fountain-blue-700 dark:text-fountain-blue-600 text-[1.2rem] tracking-wider'>BackEnd</strong>
          <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
        {/* RECURSOS */}
        <div className='bg-firefly-800 bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-[0px]  rounded-2xl z-20 p-4 md:col-span-2'>
          <strong className='text-fountain-blue-700 dark:text-fountain-blue-600 text-[1.2rem] tracking-wide'>Recursos</strong>
          <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tecnologias
