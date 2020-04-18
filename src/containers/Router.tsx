import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import { Layout } from '../components/Layout/Layout'
import { About } from '../components/Pages/About/About'
import { Main } from '../components/Pages/Main/Main'
import { Contacts } from '../components/Pages/Contacts/Contacts'
import { Equipment } from '../components/Pages/Equipment/Equipment'
import { Services } from '../components/Pages/Services/Services'
import { Works } from '../components/Pages/Works/Works'

export class Router extends React.Component {
  render (): React.ReactNode {
    return (
      <>
        <BrowserRouter>
          <Layout >
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contacts' component={Contacts} />
              <Route exact path='/equipment' component={Equipment} />
              <Route exact path='/services' component={Services} />
              <Route exact path='/works' component={Works} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </>
    )
  }
}
