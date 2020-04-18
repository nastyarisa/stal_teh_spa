import * as React from 'react'
import * as s from './Features.scss'

const features = [
  {
    text: 'Мы имеем большой опыт работы и являемся профессионалами в области металлобработки',
    name: 'time'
  },
  {
    text: 'Изготовим металлоизделия по вашим чертежам и эскизам, поможем подобрать металл',
    name: 'person'
  },
  {
    text: 'Используем токарное, фрезерное, шлифовальное, прессовое оборудование, оснащенное ЧПУ',
    name: 'robot'
  }
]

export const Features = () => (
  <div className={s.features}>
    <div className={s.wrapper}>
      <ul className={s.list}>
        {features.map((item) => <Item key={item.name} {...item} />)}
      </ul>
    </div>
  </div>
)

export const Item = (props:{text:string; name:string}) => (
  <li className={s.item}>
    <i className={`${s.icon} ${s[props.name]}`} />
    <span className={s.text}>{props.text}</span>
  </li>
)
