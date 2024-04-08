import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards/infinite-moving-cards'

const CartContenedor = ({ children, className: stilos, lista,sentido }) => {
    return (
        <div className={stilos + " bg-silver-200 dark:bg-firefly-950 border-[2px] border-solid border-silver-400 rounded-lg  z-20 p-4 relative overflow-hidden transition-colors ease-linear"}>
            {children}
            <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                {
                    lista && (
                        <InfiniteMovingCards
                            items={lista}
                            direction={sentido}
                            speed="slow"
                        />
                    )
                }
            </div>
        </div>
    )
}

export default CartContenedor
