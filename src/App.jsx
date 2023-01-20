import { useContext } from 'react'
import { themeContext } from './context/theme.context'
import TodoList from './pages/TodoList'

const App = () => {
  const { theme } = useContext(themeContext)
  return (
    <div className='App' data-theme={theme}>
      <TodoList />
    </div>
  )
}

export default App