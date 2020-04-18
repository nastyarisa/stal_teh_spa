import * as React from 'react'
import * as s from './Contacts.scss'
import {GMap} from "../../GMap/GMap";

export class Contacts extends React.Component {
  render ():React.ReactNode {
    return (
      <div className={s.root}>
        <GMap />
      </div>
    )
  }
}
