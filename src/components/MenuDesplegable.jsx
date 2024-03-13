import React, { useRef } from 'react'

const MenuDesplegable = ({ className: styleProps, refer }) => {


    // const refer=useRef();

    return (
        <>
            <div ref={refer} className={styleProps + 'fixed top-20 bg-firefly-950 right-0 w-0 h-[0vh] overflow-hidden  sm:hidden z-50 transition-all duration-400 ease-linear '} >

                <span className='font-righteous text-[2rem] text-silver-900 dark:text-silver-200 '>Ces<span className='text-[2rem] text-fountain-blue-700 dark:text-fountain-blue-600 '>Dev.</span></span>

                <button className='text-white' onClick={() => {
                    refer.current.classList.remove('w-full')
                    refer.current.classList.remove('h-[90vh]')
                    refer.current.className += " w-0"
                    refer.current.className += " h-[0vh]"
                }}>Onclpse</button>

            </div>
        </>
    )
}

export default MenuDesplegable

{/* <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            size={'full'}
        >
            <DrawerOverlay onClose={onClose} />

            <DrawerContent  >

                <DrawerHeader className='bg-silver-200 dark:bg-[#1a2b2b] flex justify-between ' >
                    <strong className=' text-[2rem] text-silver-900 dark:text-silver-200'>Ces<span className='text-[2rem] text-fountain-blue-700 dark:text-fountain-blue-600 '>Dev.</span></strong>

                    <IconButton aria-label='Search database' onClick={onClose} colorScheme='transparent' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-lg w-[2rem] dark:text-silver-200 text-silver-950 " viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </IconButton>
                </DrawerHeader>

                <DrawerBody className='bg-silver-200 dark:bg-[#1a2b2b] flex flex-col gap-3'>
                    {
                        listaSecciones.map((seccion, indece) => (
                            <a href={`#${seccion.id}`} onClick={() => {
                                setTimeout(() => {
                                    onClose()
                                }, 300);
                            }} key={indece} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#323c48,45%,#637b94,55%,#323c48)] bg-[length:200%_100%] px-6 font-medium text-silver-200 tracking-[1.5px] transition-colors ">
                                {t(`header.${seccion.name}`)}
                            </a>
                        ))
                    }
                </DrawerBody>

            </DrawerContent>
        </Drawer> */}