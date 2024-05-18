'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import Image from 'next/image';

import closeIcon from '../../images/icons8-close.svg'

import s from './style.module.css'


interface Props {
    children: React.ReactNode
    isOpen: boolean
    setIsOpen?: Dispatch<SetStateAction<boolean>>
    borderR?: boolean
    color?: string
}


const Popup: FC<Props> = ({ children, isOpen, setIsOpen, borderR, color }) => {

  const closeModal = () => setIsOpen && setIsOpen(false)

  const isOpenModal = isOpen ? `${s['popup']} ${s['popup_is-opened']}` : s['popup']

  return (
    <div style={{ backgroundColor: color }} className={`${isOpenModal} ${borderR ? s.borderR : ''}`}>
      <button onClick={closeModal} className={s['close']}>
        <Image 
         className={s['close-icon']}
         src={closeIcon}
         alt="close popup"
        />
      </button>
      <div className={s.content}>{children}</div>
    </div>
  );
};

export default Popup