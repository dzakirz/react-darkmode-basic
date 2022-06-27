import React from 'react'

export const ThemeContext = React.createContext()

export const ThemeContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = React.useState(JSON.parse(localStorage.getItem("darkMode")))
  const value = {
    darkMode: darkMode,
    setDarkMode: setDarkMode
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}