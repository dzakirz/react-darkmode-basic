import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { ThemeContext } from '../contexts/ThemeContext'

const Home = () => {
  const { darkMode, setDarkMode } = React.useContext(ThemeContext)

  const handleChangeTheme = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("darkMode", !darkMode)
  }

  return (
    <React.Fragment>
      <Navbar isHomeActive="nav-menu-item-active" isAboutActive="nav-menu-item"/>
      <HomeContent darkMode={darkMode}>
        <div className="home-content-container">
          <h2 className="home-content-header">Hello World <span className="alert-symbol"> ! </span></h2>
          <p className="home-content-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sunt et eaque adipisci recusandae, commodi at atque impedit quas, sed molestias dignissimos delectus esse. Dolorem labore autem quo adipisci temporibus magnam sint animi dolore exercitationem ducimus aliquam reiciendis odit ad, eius ipsa, obcaecati facere fugiat quam nihil placeat magni beatae.
          </p>
          <button onClick={handleChangeTheme} className="home-content-button">{darkMode ? "LightMode" : "DarkMode"}</button>
        </div>
      </HomeContent>
    </React.Fragment>
  )
}

export default Home

const HomeContent = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  
  .home-content-container{
    margin-top: 250px;
    position: relative;
    width: 450px;

    .home-content-header{
      font-size: 56px;
      font-weight: 400;
      color: ${(props) => props.darkMode ? "white" : "black"};
      transition: all ease-in-out .5s;
    }

    .home-content-paragraph{
      font-weight: 300;
      color: ${(props) => props.darkMode ? "#e0e0e0" : "black"};
      transition: all ease-in-out .5s;
    }

    .home-content-button{
      border: none;
      margin-top: 10px;
      padding: 10px 15px;
      color: ${(props) => props.darkMode ? "black" : "white"};
      background-color: ${(props) => props.darkMode ? "white" : "black"};
      border-radius: 5px;
      transition: all ease-in-out .5s;

      &:hover{
        transform: scale(1.1);
        background-color: ${(props) => props.darkMode ? "#292929" : "white"};
        color: ${(props) => props.darkMode ? "white" : "black"};
        cursor: pointer;
        border: 1px solid ${(props) => props.darkMode ? "white" : "black"};
        font-weight: 700;
      }
    }

    .alert-symbol{
      color: red;
    }
  }
`