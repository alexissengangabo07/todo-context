import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoContextProvider } from './context/todo.context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>,
)
