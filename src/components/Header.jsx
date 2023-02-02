import React from 'react'

const Header = ({ setDarkMode, darkMode }) => {

  const handleClick = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className="header">
      <h1>ReactHooks</h1>
      <button onClick={handleClick} type="button">
        {darkMode ? 'Dark Mode' : 'light'}
      </button>
    </div>
  )
}

export default Header;

