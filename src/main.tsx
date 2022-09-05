import React from 'react'
import ReactDOM from 'react-dom/client'
import {Navigator} from './components/navigator/index'
import MainPage from './pages/MainPage'
import './main.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navigator />
    <MainPage />
  </React.StrictMode>
)
