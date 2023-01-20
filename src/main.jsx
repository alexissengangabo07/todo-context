import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeContextProvider from './context/theme.context'
import { TodoContextProvider } from './context/todo.context'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </TodoContextProvider>
  </React.StrictMode>,
)
