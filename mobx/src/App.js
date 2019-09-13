import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import Temperature from './Temperature'
import ViewComponent from './ViewComponent'

const temp = Temperature.create({})

ReactDOM.render(
  <Provider temperature={temp}>
    <ViewComponent />
  </Provider>,
  document.getElementById('root')
)
