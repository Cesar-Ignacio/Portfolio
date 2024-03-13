import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const openMenu=(refer)=>{
  refer.current.classList.remove('w-0')
  refer.current.classList.remove('h-[0vh]')
  refer.current.className += " w-full"
  refer.current.className += " h-[90vh]"

}

export const closeMenu=(refer)=>{
  refer.current.classList.remove('w-full')
  refer.current.classList.remove('h-[90vh]')
  refer.current.className += " w-0"
  refer.current.className += " h-[0vh]"
}
