import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const openMenu = (refer) => {
  refer.current.classList.remove('w-0', 'h-[0vh]');
  refer.current.classList.add('w-full', 'h-[90vh]');
}

export const closeMenu = (refer) => {
  refer.current.classList.remove('w-full','h-[90vh]');
  refer.current.classList.add('w-0','h-[0vh]');
}
