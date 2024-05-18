'use client';

import { FC } from 'react'

import s from './style.module.css'

import type { TypeOverlay } from './Overlay.type';



const Overlay: FC<TypeOverlay> = ({ children, isOpen, close }) => {
        
    const closeOverlay = () => close && close()

    const isOpenOverlay = isOpen ? `${s['overlay']} ${s['overlay_is-opened']}` : s.overlay

    return (

     <div onClick={closeOverlay} className={isOpenOverlay}>
         {children}
     </div>
    )
}

export default Overlay