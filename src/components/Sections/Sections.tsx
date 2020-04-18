import * as React from 'react'
import { Link } from 'react-router-dom'
import * as s from './Sections.scss'

const sections = [
  {
    text: 'О нас',
    name: 'about',
    link: '/about'
  },
  {
    text: 'Услуги',
    name: 'services',
    link: '/services'
  },
  {
    text: 'Оборудование',
    name: 'equipment',
    link: '/equipment'
  },
  {
    text: 'Наши работы',
    name: 'works',
    link: '/works'
  }
]

export const Sections = () => (
  <div className={s.sections}>
    <div className={s.wrapper}>
      <ul className={s.list}>
        {sections.map((item) => <SectionItem key={item.name} {...item} />)}
      </ul>
    </div>
  </div>
)

export const SectionItem = (props:{text:string, link:string, name:string}) => (
  <li className={`${s.item} ${s[props.name]}`}>
    <Link to={props.link} className={s.link}>
      <span className={s.text}>{props.text}</span>
    </Link>
  </li>
)
