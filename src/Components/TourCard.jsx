import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Img from "react-cool-img";



import styled from "styled-components"


export class TourCard extends Component {
    render() {
        return (
            <FeaturedToursCard>
                <ImageWrapper>
                    <Img src={this.props.toursData.img} alt={`${this.props.toursData.name} bike tour`} style={{backgroundColor: "grey"}} />
                    <span>Best Seller</span>
                </ImageWrapper>
                <CardContent>
                    <h4>{this.props.toursData.name}</h4>
                    <div>{this.props.toursData.description}</div>
                    <Link to="/tours">read more</Link>

                </CardContent>
            </FeaturedToursCard>
        )
    }
}

const FeaturedToursCard = styled.div`
    grid-column: span 12;
    display: grid;
    grid-row-gap: 1rem;
    grid-template-rows: max-content;

    
    @media (min-width: 992px) {
       grid-column: span 4;
       grid-column-gap: 1rem;
    
}


`

const ImageWrapper = styled.div`
position: relative;

span {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #652440;
    padding: 1rem;
    width: 50%;
    color: #fefefe;
}

    img{
        width: 100%;
    }

    `

const CardContent = styled.div`
    h4 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        font-weight: bold;

        }

        a {
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
    }

    @media (min-width: 992px) {
       display: flex;
       flex-direction: column;
       justify-content: space-between
    
}
`

