import React, { Component } from 'react'

import styled from "styled-components"



export class Jumbotron extends Component {

  
    render() {
        return (
            <JumbotronWrapper>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>


            </JumbotronWrapper>
        )
    }
}

const JumbotronWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: ${props => props.home ? "100vh" : "50vh"};
padding: 2rem 1rem;
background: #eb01a5;
background-image: url("/images/cardiff-large.jpg");
background-image: linear-gradient(0deg, rgba(36, 101, 73, 0.7), rgba(36, 101, 73, 0.8)),url("/images/cardiff-large.jpg") ; 
background-position: center;
background-size: cover;
color: #fefefe;
text-transform: capitalize;
text-align: center;

@media (min-width: 992px) {
 
    height: 30vh;
}

h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
}

h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 5rem
}
`
