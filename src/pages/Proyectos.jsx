import React, { useEffect, useState } from 'react'
import proyecto from '../assets/proyecto.png'
import portfolio from '../assets/portfolio.jpg'
import bzst from '../assets/bzst.jpg'
import portada from '../assets/portada.jpg'
import buyTech from '../assets/buyTech.jpg'


import SeccionConteiner from '../components/SeccionConteiner'

const Proyectos = () => {

    const [widthWindowa, setwidth] = useState(window.innerWidth);
    const lista = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    const[filaUno,setFilaUno]=useState();
    const[filaDos,setFilaDos]=useState();
    let filaTres = [];


    window.addEventListener('resize', () => {

        setwidth(window.innerWidth)
    })

    useEffect(() => {

        if (widthWindowa > 1024) { console.log("tres filas") }
        else if (widthWindowa > 640) {
            const subFilaUno=lista.filter((n,i)=>i%2===0)
            const subFilaDos=lista.filter((n,i)=>i%2!=0)
            
            setFilaUno(subFilaUno)
            setFilaDos(subFilaDos)
        }
        else{
        setFilaUno(lista);
        }

    }, [widthWindowa])


    return (
        <>
            <SeccionConteiner id='pro' className='scroll-mt-[4rem] '>
                {/* <div className='xl:w-[70%] mx-auto container scroll-mt-[6rem] dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative] relative' id='pro'> */}
                {/* Radial gradient for the container to give a faded look */}
                {/* <div className=" transition-all duration-300 ease-linear absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#1a2b2b] bg-silver-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1a2b2b)]"></div> */}

                {/* Titulo */}
                <div className='text-silver-950 dark:text-silver-100 tracking-[1px] relative z-20 '>
                    <h2 className='text-[2rem] md:text-[2.5rem] font-bold bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400 font-poppins' >Proyectos</h2>
                </div>
                {/* Galeria de proyectos */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-1 mt-4 '>

                    <div className='bg-red-500 p-1 flex flex-col gap-2'>
                        {
                            filaUno?.map((n, i) => (
                                <span key={i} className='bg-[#21a474] text-center' >{n}</span>
                            ))
                        }
                    </div>

                    <div className='bg-blue-500 p-1 flex-col gap-2 flex'>
                        {
                            filaDos?.map((n, i) => (
                                <span key={i} className='bg-[#21a474] text-center' >{n}</span>
                            ))
                        }
                    </div>

                    <div className='bg-yellow-500 p-1 flex-col gap-2 flex'>
                        {
                            filaTres.map((n, i) => (
                                <span key={i} className='bg-[#21a474] text-center' >{n}</span>
                            ))
                        }
                    </div>

                    {/* Primera Fila */}
                    {/* <div className='flex flex-col gap-1'>
                        <div className='rounded-lg bg-silver-800 p-[4px] flex flex-col gap-1 z-10 h-fit'>
                            <div className='relative rounded-lg overflow-hidden'>
                                <img className='rounded-lg' src={bzst} alt="" />
                                <div className='absolute w-full bottom-0 p-2 flex justify-between bg-gradient-to-t from-black to-transparent' >
                                    <span className='text-silver-50'>Maquetación</span>
                                    <span className='text-silver-300'>Agosto 2023</span>
                                </div>
                            </div>
                            <button className='w-full flex items-center justify-center gap-2 bg-silver-950 rounded-lg text-silver-50 p-2'>Deploying to Vercel <svg viewBox="0 0 256 222" className='size-[1rem]' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#fff" d="m128 0 128 221.705H0z" /></svg></button>
                        </div>
                        <div className='rounded-lg bg-silver-800 p-[4px] flex flex-col gap-1 z-10 h-fit'>
                            <div className='relative rounded-lg overflow-hidden'>
                                <img className='rounded-lg' src={buyTech} alt="" />
                                <div className='absolute w-full bottom-0 p-2 flex justify-between bg-gradient-to-t from-black to-transparent' >
                                    <span className='text-silver-50'>Buy Tech</span>
                                    <span className='text-silver-300'>Nomviembre 2023</span>
                                </div>
                            </div>
                            <button className='w-full flex items-center justify-center gap-2 bg-silver-950 rounded-lg text-silver-50 p-2'>Deploying to Vercel <svg viewBox="0 0 256 222" className='size-[1rem]' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#fff" d="m128 0 128 221.705H0z" /></svg></button>
                        </div>
                    </div> */}
                    {/* Segunda Fila */}
                    {/* <div className='flex flex-col gap-1'>

                        <div className='rounded-lg bg-silver-800 p-[4px] flex flex-col gap-2 z-10'>
                            <div className='relative rounded-lg overflow-hidden'>
                                <img className='rounded-lg' src={portada} alt="" />
                                <div className='absolute w-full bottom-0 p-2 flex justify-between bg-gradient-to-t from-black to-transparent' >
                                    <span className='text-silver-50'>Portada</span>
                                    <span className='text-silver-300'>Septiembre 2023</span>
                                </div>
                            </div>
                            <button className='w-full flex items-center justify-center gap-2 bg-silver-950 rounded-lg text-silver-50 p-2'>Deploying to Vercel <svg viewBox="0 0 256 222" className='size-[1rem]' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#fff" d="m128 0 128 221.705H0z" /></svg></button>
                        </div>
                        <div className='rounded-lg bg-silver-800 p-[4px] flex flex-col gap-2 z-10'>
                            <div className='relative rounded-lg overflow-hidden'>
                                <img className='rounded-lg' src={portfolio} alt="" />
                                <div className='absolute w-full bottom-0 p-2 flex justify-between bg-gradient-to-t from-black to-transparent' >
                                    <span className='text-silver-50'>Portfolio</span>
                                    <span className='text-silver-300'>2024</span>
                                </div>
                            </div>
                            <button className='w-full flex items-center justify-center gap-2 bg-silver-950 rounded-lg text-silver-50 p-2'>Deploying to Vercel <svg viewBox="0 0 256 222" className='size-[1rem]' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#fff" d="m128 0 128 221.705H0z" /></svg></button>

                        </div>
                    </div> */}
                    {/* Tercera Fila */}
                    {/* < div className='flex flex-col gap-1'>
                        <div className='rounded-lg bg-silver-800 p-[4px] flex flex-col gap-2 z-10 h-fit'>
                            <div className='relative rounded-lg overflow-hidden'>
                                <img className='rounded-lg' src={bzst} alt="" />
                                <div className='absolute w-full bottom-0 p-2 flex justify-between bg-gradient-to-t from-black to-transparent' >
                                    <span className='text-silver-50'>Carrito Compras</span>
                                    <span className='text-silver-300'>Agosto 2023</span>
                                </div>
                            </div>
                            <button className='w-full bg-silver-950 rounded-lg text-silver-50 p-2'>ver</button>
                        </div>
                        <div className='rounded-lg bg-silver-800 p-[4px] flex flex-col gap-2 z-10 h-fit'>
                            <div className='relative rounded-lg overflow-hidden'>
                                <img className='rounded-lg' src={proyecto} alt="" />
                                <div className='absolute w-full bottom-0 p-2 flex justify-between bg-gradient-to-t from-black to-transparent' >
                                    <span className='text-silver-50'>E-commerce</span>
                                    <span className='text-silver-300'>2023</span>
                                </div>
                            </div>
                            <button className='w-full bg-silver-950 rounded-lg text-silver-50 p-2'>ver</button>
                        </div>
                    </div> */}


                </div>
                {/* </div> */}
            </SeccionConteiner >

        </>
    )
}

export default Proyectos

