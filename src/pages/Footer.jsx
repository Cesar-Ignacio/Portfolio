import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Footer = () => {
    return (
        <footer className='xl:w-[70%] mx-auto mt-[3rem] p-3' >
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5  dark:text-silver-50'>
                <div className='col-span-2 lg:col-auto font-poppins dark:text-silver-50'>
                    <strong className='text-[2rem]'>Cesar I. Tello</strong>
                    <p className='text-[1.4rem] text-fountain-blue-700 mb-4 '>Desallodor Front-End</p>

                </div>
                {/* Educación */}
                <div className=''>
                    <strong className='text-fountain-blue-700   font-poppins'>Educación</strong>
                    <ul className='mt-3 flex flex-col gap-2 '>
                        <li><a href="https://www.frgp.utn.edu.ar/" target='_blank' className='hover:text-silver-700 transition-colors ease-linear '>UTN</a></li>
                        <li><a href="https://www.coderhouse.com/ar/?pipe_source=google&pipe_medium=cpc&pipe_campaign=0&gad_source=1&gclid=CjwKCAjwtqmwBhBVEiwAL-WAYSLuyDxF3mjLLSK3YSlC7teb3-Xtmn8PkdXrEsc31p0FwD5naYf7BxoCph8QAvD_BwE" target='_blank' className='hover:text-silver-700 transition-colors ease-linear '>Coder House</a></li>
                    </ul>
                </div>
                {/* Certificados */}
                <div className='lg:row-span-2'>
                    <strong className='text-fountain-blue-700  font-poppins '>Certificados</strong>
                    <ul className='mt-3 flex flex-col gap-2 '>
                        <li>Técnico Universitario en programación</li>
                        <li><a href="https://www.coderhouse.com/ar/certificados/65259d0c8b3f8989b8a8d5db?lang=es" target='_blank' className='hover:text-silver-700 transition-colors ease-linear '>Desarrollo Web</a></li>
                        <li><a href="https://www.coderhouse.com/ar/certificados/656d92ff73dbf57da8f25add?lang=es" target='_blank' className='hover:text-silver-700 transition-colors ease-linear '>JavaScript</a></li>
                        <li><a href="https://www.coderhouse.com/ar/certificados/65d9f43f7ec59025b4c6ebd7?lang=es" target='_blank' className='hover:text-silver-700 transition-colors ease-linear '>React js</a></li>
                    </ul>
                </div>
                {/* Cita */}
                <div className='col-span-2'>
                    <strong className='text-fountain-blue-700  font-poppins '>Cita Inspiradora</strong>
                    <div className='flex flex-col gap-1 mt-3 '>
                        <div className='flex gap-2'>
                            <Avatar className='size-[3rem]'>
                                <AvatarImage src="https://mg.co.za/wp-content/uploads/2023/03/stevejobs.1419962519.jpeg" />
                                <AvatarFallback>SJ</AvatarFallback>
                            </Avatar>
                            <div className='text-silver-900 dark:text-silver-400'>
                                <strong>Steve Jobs</strong>
                                <p>(2005 Stanford)</p>
                            </div>
                        </div>
                        <cite className='text-[1.1rem] mt-2'> <q>Manténganse hambrientos, manténganse alocados</q> </cite>
                    </div>
                </div>
                {/* Copy */}
                <div className='col-span-2'>
                    <p>All rights reserved © Cesar I. Tello 2024</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
