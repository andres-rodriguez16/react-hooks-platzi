import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Characters from './components/Characters'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  if(darkMode){
    document.documentElement.style.setProperty('--background-App','#282c34')
    document.documentElement.style.setProperty('--font-color','white')
  }else{
    document.documentElement.style.setProperty('--background-App','white')
    document.documentElement.style.setProperty('--font-color','black')
    
  }

  return (
    <div className="App">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Characters />
    </div>
  )
}

export default App
