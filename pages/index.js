import React from "react"
import ReactDOM from "react-dom"
// import "./index.css"
// import 'normalize.css'
// import "../src/styles/index.css"
import App from "../src/App"
import { Provider } from "react-redux"

import store from "../store"

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
)
