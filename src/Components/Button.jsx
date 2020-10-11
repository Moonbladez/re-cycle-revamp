import React, { Component } from 'react'
import {Link} from "react-router-dom"

import styled from "styled-components"


export class Button extends Component {
    render() {
        return (

            <ButtonWrapper to={this.props.to}>{this.props.text}</ButtonWrapper>
        )
    }


}



const ButtonWrapper = styled(Link)`
      background: #246549;
        background-image: linear-gradient(to bottom, #246549, #173f2e);
        color: #fefefe;
        text-transform: capitalize;
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        display: block;

        &:hover,
        &:focus {
        background-image: linear-gradient(to bottom,#173f2e , #246549);

        }   
`