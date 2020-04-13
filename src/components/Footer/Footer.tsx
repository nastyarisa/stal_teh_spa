import * as React from 'react'
import * as s from './Footer.scss'
import { Link } from 'react-router-dom'

export class Footer extends React.Component {
  private firstColumn = [
    {
      title: 'О нас',
      href: '/about',
      key: 'about'
    },
    {
      title: 'Услуги',
      href: '/services',
      key: 'services'
    },
    {
      title: 'Оборудование',
      href: '/equipment',
      key: 'equipment'
    }
  ];

  private secondColumn = [
    {
      title: 'Наши работы',
      href: '/works',
      key: 'works'
    },
    {
      title: 'Партнеры',
      href: '/partners',
      key: 'partners'
    },
    {
      title: 'Контакты',
      href: '/contacts',
      key: 'contacts'
    }
  ]

  getActivePage = ():string => {
    const match = window.location.pathname.match(/^\/(\w+)/)
    return (match && match[1]) || ''
  }

  state = {
    activePage: this.getActivePage()
  }

  linkHandler = (key):void => {
    this.setState({
      activePage: key
    })
  }

  menuList = (list):React.ReactNode => {
    return (
      <ul className={s.list}>
        {list.map((item) => {
          return (
            <li className={s.item} key={item.key}>
              <Link to={item.href} onClick={():void => this.linkHandler(item.key)}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    )
  }

  render ():React.ReactNode {
    return (
      <footer className={s.footer}>
        <div className={s.wrapper}>
          <div className={s.block}>
            <div className={s.name}>
              <Link to='/' className={s.logo} onClick={():void => this.linkHandler('')}>
                <div className={s.logo}>Сталь-Техология</div>
              </Link>
              <div className={s.copyright}>&copy; 2020</div>
            </div>
            <div className={s.contacts}>
              <a href='mailto:stal.teh@mail.ru' className={s.email}>stal.teh@mail.ru</a>
              <a href='tel:+79099457539' className={s.phone}>8 (909) 945-75-39</a>
              <a href='tel:+74950185725' className={s.phone}>8 (495) 018-57-25</a>
              <a href='tel:+79852602924' className={s.phone}>8 (985) 260-29-24</a>
            </div>
            <div className={s.menu}>
              {this.menuList(this.firstColumn)}
            </div>
            <div className={s.menu}>
              {this.menuList(this.secondColumn)}
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
