import * as React from 'react'
import * as s from './Contacts.scss'
import {GMap} from "../../GMap/GMap";
import {FeedbackForm} from "../../FeedbackForm/FeedbackForm";

export class Contacts extends React.Component {
  render ():React.ReactNode {
    return (
      <div className={s.root}>
        <main className={s.contacts}>
          <div className={s.wrapper}>
            <div className={s.left}>
              <h2 className={s.title}>Контактная информация:</h2>
              <p className={s.description}>Мы находимся в г. Электросталь. Здесь будет информация о том как к нам доехать, куда позвонить и всякое такое. Часы работы - с понедельника по субботу с 9-00 до 19-00.</p>
              <ul className={s.list}>
                <li className={s.item}>
                  <b>Адрес:</b>
                  <address>144001 Московская обл. г.Электросталь Промышленный проезд 9, офис 4</address>
                </li>
                <li className={s.item}>
                  <b>Email:</b>
                  <a href="mailto:stal.teh@mail.ru" className={s.email}>stal.teh@mail.ru</a>
                </li>
                <li className={s.item}>
                  <b>Телефон:</b>
                  <ul className={s.phoneList}>
                    <li className={s.phoneItem}>
                      <a href="tel:+79099457539" className={s.phone}>8 (909) 945-75-39</a>
                    </li>
                    <li className={s.phoneItem}>
                      <a href="tel:+74950185725" className={s.phone}>8 (495) 018-57-25</a>
                    </li>
                    <li className={s.phoneItem}>
                      <a href="tel:+79852602924" className={s.phone}>8 (985) 260-29-24</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={s.right}>
              <FeedbackForm />
            </div>
          </div>
        </main>
        <GMap />
      </div>
    )
  }
}
