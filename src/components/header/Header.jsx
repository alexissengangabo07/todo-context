import { useContext } from 'react';
import { themeContext } from '../../context/theme.context';

const Header = () => {
  const { toggleTheme, theme } = useContext(themeContext);

  return (
    <div className='header'>
      <h2>Todo App</h2>
      <div className='theme-choice'>
        <select name="theme-selector" id="theme-selector" onChange={(e) => toggleTheme(e.target.value)}>
          <option value="light" selected={theme === 'light' ? true : false}>Light</option>
          <option value="dark" selected={theme === 'light' ? false : true}>Dark</option>
        </select>
      </div>
    </div>
  )
}

export default Header