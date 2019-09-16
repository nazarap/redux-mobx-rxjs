import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import Temperature from './services/Temperature'
import ViewComponent from './components/ViewComponent'
import InputComponent from './components/InputComponent'

const temp = Temperature.create({})

ReactDOM.render(
  <Provider temperature={temp}>
    <h1>Mobx example</h1>
    <InputComponent />
    <ViewComponent />
  </Provider>,
  document.getElementById('root')
)
