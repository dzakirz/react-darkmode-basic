import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

const Navbar = () => {
  const { darkMode } = React.useContext(ThemeContext)

  return (
    <Nav darkMode={darkMode}>
      <div className="nav-container">
        <h1 className="nav-header">{darkMode ? "DarkMode" : "LightMode"}.</h1>
        <ul className="nav-menu">
          <li className="nav-menu-item-active">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.darkMode ? "#292929" : "white"};
  border-bottom: 1px solid ${(props) => props.darkMode ? "" : "#cecece"};;

  .nav-container{
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-header{
      font-size: 32px;
      font-weight: 700;
      color: ${(props) => props.darkMode ? "white" : "black"};
      transition: all ease-in-out .5s;
    }

    .nav-menu{
      width: 150px;
      list-style: none;
      display: flex;
      justify-content: space-between;

      .nav-menu-item{
        a{
          text-decoration: none;
          font-size: 20px;
          font-weight: 400;
          color: ${(props) => props.darkMode ? "white" : "black"};
          transition: all ease-in-out .5s;
        }
      }
      .nav-menu-item-active{
        position: relative;
        a{
          text-decoration: none;
          font-size: 20px;
          font-weight: 600;
          color: ${(props) => props.darkMode ? "white" : "black"};
          transition: all ease-in-out .5s;
        }
        &::after{
          content: "";
          width: 100%;
          height: 4px;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: ${(props) => props.darkMode ? "white" : "black"};
          border-radius: 50px;
          transition: all ease-in-out .5s;
        }
      }
    }
  }
`