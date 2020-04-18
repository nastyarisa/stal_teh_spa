import * as s from './Promo.scss'
import * as React from 'react'
import { Link } from 'react-router-dom'

export const Promo = () => (
  <div className={s.promo}>
    <div className={s.wrapper}>
      <div className={s.block}>
        <h1 className={s.title}>Мы занимаемся металлообработкой</h1>
        <p className={s.description}>Закажите у нас металлообработку, самая лучшая металлообработка из всех металлобработок в мире!</p>
        <Link to='/contacts' className={s.link}>Как проехать</Link>
      </div>
    </div>
  </div>
)
