import * as React from 'react'
import { Header } from '../Header/Header'
// import { Main } from "../Main/Main";
import * as s from './Layout.scss'

export interface LayoutProps {
  children: React.ReactNode
}

export class Layout extends React.Component<LayoutProps> {
  render () :React.ReactNode {
    return (
      <div className={s.root}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
