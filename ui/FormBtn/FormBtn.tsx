import { FC } from 'react'

import s from './style.module.css'

import type { FormBtnType } from './FormBtn.type'


const FormBtn: FC<FormBtnType> = ({ text, variant, borderR, ...props }) => {

    return (

        <button className={`${s.root} ${s[variant]} ${borderR && s.borderR}`} {...props}>
            {text}
        </button>
    )
}

export default FormBtn