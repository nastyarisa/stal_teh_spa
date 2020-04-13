import * as React from 'react'
import * as s from './Header.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export class Header extends React.Component {
  private items = [
    {
      title: "О нас",
      href: '/about',
      key: 'about'
    },
    {
      title: "Услуги",
      href: '/services',
      key: 'services'
    },
    {
      title: "Оборудование",
      href: '/equipment',
      key: 'equipment'
    },
    {
      title: "Наши работы",
      href: '/works',
      key: 'works'
    },
    {
      title: "Партнеры",
      href: '/partners',
      key: 'partners'
    },
    {
      title: "Контакты",
      href: '/contacts',
      key: 'contacts'
    }
  ]

  getActivePage = ():string => {
    const match = window.location.pathname.match(/^\/(\w+)/);
    return match && match[1] || "";
  }

  state = {
    activePage: this.getActivePage()
  }

  linkHandler = (key) => {
    this.setState({
      activePage: key
    })
  }

  render () :React.ReactNode {
    const logoClasses = classNames(s.logo, s.menu_item, s.active)
    const menuList = this.items.map((item) => {
      const itemClasses = classNames(s.menu_item, {
        [s.active]: this.state.activePage === item.key,
      })
      return <li className={s.item} key={item.key}>
        <Link to={item.href} className={itemClasses} onClick={() => this.linkHandler(item.key)}>{item.title}</Link>
      </li>
    })

    return (
      <header className={s.header}>
        <div className={s.wrapper}>
          <nav className={s.nav}>
            <Link to="/" className={logoClasses} onClick={() => this.linkHandler("")}>
              <div className={s.logo}>Сталь-Технология</div>
            </Link>
            <ul className={s.list}>
              {menuList}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
