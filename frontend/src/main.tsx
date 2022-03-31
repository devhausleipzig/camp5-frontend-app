// third-party imports
import dotenv from 'dotenv'
import React from 'react'
import ReactDOM from 'react-dom'

// local imports
import './index.css'
import App from './App'

// load env vars
dotenv.config()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
