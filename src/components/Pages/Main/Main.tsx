import * as React from 'react'
import * as s from './Main.scss'
import { Promo } from '../../Promo/Promo'
import { AboutCompany } from '../../AboutCompany/AboutCompany'
import { Features } from '../../Features/Features'
import { Sections } from '../../Sections/Sections'
import { GMap } from '../../GMap/GMap'

export class Main extends React.Component {
  render ():React.ReactNode {
    return (
      <div className={s.root}>
        <Promo />
        <AboutCompany />
        <Features />
        <Sections />
        <GMap />
      </div>
    )
  }
}
