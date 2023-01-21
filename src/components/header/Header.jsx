import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <h2>Todo App</h2>
      <div className='theme-choice'>
        <select name="theme-selector" id="theme-selector">
          <option value="">Light</option>
          <option value="">Dark</option>
        </select>
      </div>
    </div>
  )
}

export default Header