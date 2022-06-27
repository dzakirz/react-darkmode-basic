import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { ThemeContext } from '../contexts/ThemeContext'

const About = () => {
  const { darkMode } = React.useContext(ThemeContext)

  return (
    <React.Fragment>
      <Navbar isHomeActive="nav-menu-item" isAboutActive="nav-menu-item-active" />
      <AboutContent darkMode={darkMode}>
        <div className="about-content-container">
          <h2 className="about-content-header">Who Am I?</h2>
          <p className="about-content-paragraph">
            I'm <b>Dzaki Rozaan</b>
            <br />
            Student of Amikom University
            <br />
            Bachelor Information System Degree
            <br /> 
          </p>
        </div>
      </AboutContent>
    </React.Fragment>
  )
}

export default About

const AboutContent = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  
  .about-content-container{
    margin-top: 250px;
    position: relative;
    width: 450px;

    .about-content-header{
      font-size: 56px;
      font-weight: 400;
      color: ${(props) => props.darkMode ? "white" : "black"};
      transition: all ease-in-out .5s;
    }

    .about-content-paragraph{
      font-weight: 300;
      color: ${(props) => props.darkMode ? "#e0e0e0" : "black"};
      transition: all ease-in-out .5s;
    }

    .about-content-button{
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