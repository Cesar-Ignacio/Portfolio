import React, { useEffect, useRef, useState } from 'react'
import proyecto from '../assets/proyecto.png'
import portfolio from '@/assets/portfolio.jpg'
import buyTech from '../assets/buyTech.jpg'
import SeccionConteiner from '../components/SeccionConteiner'
import { collection, getDocs } from 'firebase/firestore'
import db from '../db/db'
import NetiflyIcon from '../icono/NetiflyIcon'
import VercelIcon from '../icono/VercelIcon'


const Proyectos = () => {


    const [listaProyectos, setListaProyecto] = useState()


    useEffect(() => {

        getDocs(collection(db, 'projects')).then(({ docs }) => {
            const listPorject = docs.map(doc => {
                return { 'id': doc.id, ...doc.data() }
            })

            setListaProyecto(listPorject)
        })

    }, [])


    return (
        <>
            <SeccionConteiner id='pro' className='scroll-mt-[4rem] ' >
                {/* <div className='xl:w-[70%] mx-auto container scroll-mt-[6rem] dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative] relative' id='pro'> */}
                {/* Radial gradient for the container to give a faded look */}
                {/* <div className=" transition-all duration-300 ease-linear absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#1a2b2b] bg-silver-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1a2b2b)]"></div> */}

                {/* Titulo */}
                <div className='text-silver-950 dark:text-silver-100 tracking-[1px] relative z-20 '>
                    <h2 className='text-[2rem] md:text-[2.5rem] font-bold bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400 font-poppins' >Proyectos</h2>
                </div>
                {/* Galeria de proyectos */}
                <div className='grid sm:grid-cols-2  gap-2 mt-4' >

                    {/* Primera Fila */}
                    <div className='flex flex-col gap-2'>
                        {
                            listaProyectos?.map((proyecto, indice) => (
                                (indice % 2 === 0) && (
                                    <div className='rounded-lg bg-silver-800 p-[4px] flex flex-col gap-1 z-10 h-fit' key={indice}>
                                        <div className='relative rounded-lg overflow-hidden'>
                                            <img className='rounded-lg' src={proyecto.urlImg} alt={proyecto.nombre} />
                                            <div className='absolute w-full bottom-0 p-2 flex justify-between bg-gradient-to-t from-black to-transparent' >
                                                <span className='text-silver-50'>{proyecto.nombre}</span>
                                                <span className='text-silver-300'>{proyecto.fecha}</span>

                                            </div>
                                        </div>
                                        <a href={proyecto.urlPagina} className='w-full flex items-center justify-center gap-2 bg-silver-950 rounded-lg text-silver-50 p-2' target='_blank'>
                                            {proyecto.servidor}
                                            {(proyecto.servidor.includes("Vercel")?(<VercelIcon/>):(<NetiflyIcon/>))}

                                        </a>
                                    </div>
                                )
                            ))
                        }
                    </div>
                    {/* Segunda Fila */}
                    <div className='flex flex-col gap-2'>
                        {
                            listaProyectos?.map((proyecto, indice) => (
                                (indice % 2 != 0) && (
                                    <div className='rounded-lg bg-silver-800 p-[4px] flex flex-col gap-1 z-10 h-fit' key={indice}>
                                        <div className='relative rounded-lg overflow-hidden'>
                                            <img className='rounded-lg' src={proyecto.urlImg} alt={proyecto.nombre} />
                                            <div className='absolute w-full bottom-0 p-2 flex justify-between bg-gradient-to-t from-black to-transparent' >
                                                <span className='text-silver-50'>{proyecto.nombre}</span>
                                                <span className='text-silver-300'>{proyecto.fecha}</span>
                                            </div>
                                        </div>
                                        <a href={proyecto.urlPagina} className='w-full flex items-center justify-center gap-2 bg-silver-950 rounded-lg text-silver-50 p-2' target='_blank'>
                                            {proyecto.servidor}
                                            {(proyecto.servidor.includes("Vercel")?(<VercelIcon/>):(<NetiflyIcon/>))}
                                        </a>
                                    </div>
                                )

                            ))
                        }
                    </div>

                </div>
                {/* </div> */}
            </SeccionConteiner >

        </>
    )
}

export default Proyectos

