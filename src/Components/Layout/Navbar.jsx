import React, { Component } from 'react'
import {
    NavLink
} from "react-router-dom";

import {VscMenu} from "react-icons/vsc"

import styled from "styled-components"


export class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }

        this.handleOnClick = this.handleOnClick.bind(this)  
    }

    handleOnClick() {
        const currentState = this.state.active
        this.setState({
            active: !currentState
        })
    }


    
    render() {
        return (
            <Header>
                <NavbarTop>
                <LogoWrapper>
                    <NavLink to="/">
                      <img src="/images/logo.png" alt="" />
                        </NavLink>
                        
                    </LogoWrapper>
                    
                    
                <NavbarWrapper >
                    <ul>
                        <li>
                                <NavLink to="/" exact={true}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tours" >Our Tours</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" >About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>

                    </ul>
                </NavbarWrapper>
                    <NavButton onClick={this.handleOnClick}><VscMenu /></NavButton>

                </NavbarTop>

        
              <MobileNavbarWrapper className={this.state.active ? "open" : ""}>
                    <ul>
                        <li>
                            <NavLink to="/" exact={true}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tours">Our Tours</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>

                    </ul>
                </MobileNavbarWrapper>
            </Header>

        )
    }
}

const Header = styled.header`
    background-color: #652440;


`
const NavbarTop = styled.div`
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    padding:1rem;


    svg {
        font-size: 2rem;
        color: #fefefe!important;
    }

`
const LogoWrapper = styled.div`
    img {
        width: 3rem;
        height: 3rem;
    }
`

const MobileNavbarWrapper = styled.nav`
display: none;
height: 30vh;

     ul {
         display: flex;

         flex-direction: column;
         color: white;
         font-size: 1.5rem;
         height: 100%;
         justify-content: space-around;


         a {
             margin-left: 1rem;
             font-size: 1.1rem;


             &:hover,
             &:focus {
                text-decoration: underline;
                outline: none;
             }
         }
     }

     .active {
         text-decoration: underline;
         padding-left: 1rem;
     }

`


const NavbarWrapper = styled.nav`
    display: none !important;
    color: white;


    @media (min-width: 992px) {
      display: block  !important;

      ul {
          display: flex;
          
          li {
              margin-right: 1rem;

              .active {
                text-decoration: underline;              }
          }
      }
    
}

`


const NavButton = styled.div`
@media (min-width: 992px) {
       display: none;
    
}

`
