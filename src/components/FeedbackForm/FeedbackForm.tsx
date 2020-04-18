import * as React from 'react'
import * as s from './FeedbackForm.scss'

export class FeedbackForm extends React.Component {

  submit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h2>Вы можете написать нам</h2>
        <form onSubmit={this.submit}>
          <div className={s.name}>
            <input type="text" className={s.input} placeholder='Ваше имя'/>
          </div>
          <div className={s.contacts}>
            <input type="text" className={s.input} placeholder='Ваш email'/>
            <input type="text" className={s.input} placeholder='Ваш телефон'/>
          </div>
          <div className={s.comment}>
            <textarea className={s.textarea} placeholder='Напишите сообщение'></textarea>
          </div>
          <button className={s.button}>Отправить</button>
        </form>
      </div>
    )
  }
}