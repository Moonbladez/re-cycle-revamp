import React, { Component } from 'react'


import styled from "styled-components"



export class Footer extends Component {

    render() {
        return (
            <FooterWrapper>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <a href="http://www.faceook.com" target="_blank" rel="noopener noreferrer">
                                    <span className="sr-only">Link to Facebook</span>
                                    <img src="/images/facebook.svg" alt="" />
                                </a> 
                            </li> 
                                
                            <li>
                                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <span className="sr-only">Link to Twitter</span>
                                    <img src="/images/twitter.svg" alt="" />
                                </a> 
                            </li> 
                            <li>
                                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <span className="sr-only">Link to Instagram</span>
                                    <img src="/images/instagram.svg" alt="" />
                                </a> 
                            </li> 
                    </ul>        
                    </nav>

                    <FooterContact>
                        <ul>
                            <li>
                               122 Crown Street,<br/> London, W10 2LG
                            </li>
                            <li>
                                <a href="mailto:steve@avengers.com">steve@avengers.com</a>
                            </li>
                            <li>
                                <a href="tel:+07700 900770">07700 900770</a>
                            </li>
                        </ul>
                    </FooterContact>
                </div>
                <FooterCopyright>Made with <span style={{ color: "red" }}>&#9829;</span> by Bulu Designs
                <div>
                    {new Date().getFullYear()} All Rights Reserved  
                </div>
                </FooterCopyright>
            </FooterWrapper>

        )
    }
}

const FooterWrapper = styled.footer`
    background-color: #246549;
    color: #fefefe;

    .container {
        @media (min-width: 992px) {
            width: 60vw;

    }

    img {
        width: 3rem;
    }


    nav {
        ul {
            display: flex;
            justify-content: space-around;
        }
        margin-bottom: 3rem;
    }
`

const FooterContact = styled.div`
    ul {
        display: flex;
        justify-content: space-between;

      
    }
`

const FooterCopyright = styled.div`
    text-align: center;
    
    div {
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }
`