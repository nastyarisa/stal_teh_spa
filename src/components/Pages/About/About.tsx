import * as React from 'react'
import * as s from './About.scss'

export class About extends React.Component {
  render ():React.ReactNode {
    return (
      <div className={s.company}>
        <div className={s.wrapper}>
          <div>
            <h2>О нас</h2>
            <p>ООО «Сталь-Технология» ведёт свою историю с 2011 г. За всё время работы компании был накоплен богатый опыт в области обработки металлов.</p>
            <p>Наше предприятие обладает квалифицированными специалистами, способными изготавливать изделия различной степени сложности с точностью размеров до IT6.
            </p>
            <p>
            Класс обрабатываемых материалов – углеродистые, конструкционные, коррозионно-стойкие, жаропрочные стали, закалённые стали до 64 HRC, алюминиево-магниевые, титановые сплавы.
            </p>
            <p>
            Современный парк оборудования ООО «Сталь-Технология» позволяет выполнять работы в максимально короткие сроки с высоким уровнем качества.
            </p>
            <p>
            Профессионализм работников – лицо нашей компании. Наша основная задача в работе с клиентом сделать так, чтобы он обратился за нашей помощью снова.
            </p>
              <h3>Виды обработки материала:</h3>
            <ul>
              <li>
              токарные работы, в том числе на станках с ЧПУ
              </li>
              <li>
              фрезерные работы, в том числе на станках с ЧПУ
              </li>
              <li>
              шлифовальные работы
              </li>
              <li>
              химико-термическая обработка металлов (отжиг, закалка, нормализация, цементация, нитроцементация, оксидирование)
              </li>
              <li>
              сварные работы и другие виды обработки разнообразных материалов.
              </li>
              <li>
              лазерная резка
              </li>
              <li>
              гибка листового металла
              </li>
            </ul>
            <p>ООО «Сталь-технология» успешно сотрудничает с такими предприятиями, как ООО «НИКБООР», ЗАО «ИТЗ», ОАО «ЭЗТМ», ООО «ЭЛЕМАШ МАГНИТ», АО "ВМЗ", АО "ПНТЗ", АО "ЧМЗ"</p>
          </div>
        </div>
      </div>
    )
  }
}