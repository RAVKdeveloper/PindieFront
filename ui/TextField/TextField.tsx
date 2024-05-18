import { FC } from 'react'
import s from './style.module.css'

import type { TextFieldType } from './TextField.type'


const TextField: FC<TextFieldType> = ({ label, isError, textError, ...props }) => {

    const isHasError = isError ? s.error : ''

    return (

        <label className={s.root}>
        <span className={`${s.title} ${isError && s.error}`}>{label}</span>
        <input className={`${s.input} ${isHasError}`} {...props}/>
        {
            isError && textError &&
             <p className={s.errorText}>{textError}</p>
        }
        </label>
    )
}

export default TextField