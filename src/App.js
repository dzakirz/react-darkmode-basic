import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './contexts/ThemeContext'
import GlobalStyleDark from './globalStyleDark'
import GlobalStyle from './globalStyles'
import About from './pages/About'
import Home from './pages/Home'

const App = () => {
  const { darkMode } = React.useContext(ThemeContext)

  return (
    <React.Fragment>
      { darkMode ? <GlobalStyleDark /> : <GlobalStyle />}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </React.Fragment>
  )
}

export default App