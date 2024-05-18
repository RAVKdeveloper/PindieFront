import { FC } from 'react'

import s from './style.module.css'


interface Props {
    source: string
}


const GameSection: FC<Props> = ({ source }) => {

    return (

        <section className={s['game']}>
        <iframe
          className={s['game__iframe']}
          src={source}
        ></iframe>
      </section>
    )
}

export default GameSection