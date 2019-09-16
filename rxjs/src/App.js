import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import ViewComponent from './components/ViewComponent'
import InputComponent from './components/InputComponent'

axios.interceptors.response.use(
  response => response,
  error => error.response
)

ReactDOM.render(
  <React.Fragment>
    <h1>Rxjs example</h1>
    <InputComponent />
    <ViewComponent />
  </React.Fragment>,
  document.getElementById('root')
)
