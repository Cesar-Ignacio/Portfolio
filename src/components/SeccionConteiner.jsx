import React from 'react'

const SeccionConteiner = ({ children,id,className:styleComponente }) => {
    return (
        <div id={id}  className={styleComponente+'xl:w-[70%] mx-auto  rounded-[2rem] dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative '}>
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-firefly-950 bg-silver-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1a2b2b)] transition-all duration-300 ease-linear ">
            </div>
            {children}
        </div>
    )
}

export default SeccionConteiner
