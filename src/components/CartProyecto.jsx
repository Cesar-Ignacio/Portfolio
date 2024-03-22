import React from 'react'
import VercelIcon from '../icono/VercelIcon'
import NetiflyIcon from '../icono/NetiflyIcon'
import '../components/cartProyecto.css'
import viveGear from '@/assets/viveGear.webp';
const CartProyecto = ( {proyecto} ) => {
    return (
        <div className='rounded-lg bg-silver-800 p-[4px] flex flex-col gap-1 z-10 h-fit' key={proyecto.id}>
            <div className='relative rounded-lg overflow-hidden'>
                <img className='rounded-lg img' src={proyecto.urlImg} alt={proyecto.nombre} />
                <div className='absolute w-full bottom-0 px-2 flex justify-between ' >
                    <span className='text-silver-50'>{proyecto.nombre}</span>
                    <span className='text-silver-300'>{proyecto.fecha}</span>
                </div>
                {/* bg-gradient-to-t from-black to-transparent */}
            </div>
            <a href={proyecto.urlPagina} className='w-full flex items-center justify-center gap-2 bg-silver-950 rounded-lg text-silver-50 p-2' target='_blank'>
                {proyecto.servidor}
                {(proyecto.servidor?.includes("Vercel") ? (<VercelIcon />) : (<NetiflyIcon />))}
            </a>
        </div>
    )
}

export default CartProyecto
