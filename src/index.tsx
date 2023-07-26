import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from 'App'
import 'index.css'
import 'assets/font/HelveticaNeue.ttc'
import { createStore } from 'redux'
import allReducer from 'reducers'

const store = createStore(allReducer)
store.subscribe(() => console.log(store.getState()))

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
