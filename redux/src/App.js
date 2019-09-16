import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Provider } from 'react-redux'
import ViewComponent from './components/ViewComponent'
import InputComponent from './components/InputComponent'
import store from './store'

// Axios global interceptors fro error handling
axios.interceptors.response.use(
  response => response,
  error => error.response
)

ReactDOM.render(
  <Provider store={store}>
    <h1>Redux example</h1>
    <InputComponent />
    <ViewComponent />
  </Provider>,
  document.getElementById('root')
)
