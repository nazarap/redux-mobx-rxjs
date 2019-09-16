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
    <InputComponent />
    <ViewComponent />
  </React.Fragment>,
  document.getElementById('root')
)
