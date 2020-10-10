import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { TourCard } from "../Components/TourCard"

import { toursData } from "../info/toursData"


import styled from "styled-components"



export class FeaturedTours extends Component {
    render() {

        return (
            <FeaturedToursWrapper>
                <h3>Featured Tours</h3>

                {    toursData.filter(item => item.featured === true).map((item) => {
                    return (
                      <TourCard toursData={item} key={uuidv4()}/>
                    )
                })}
            </FeaturedToursWrapper>

        )
    }
}



const FeaturedToursWrapper = styled.section`

@media (min-width: 992px) {
       grid-column-gap: 1rem;
    
}


@media (min-width: 1200px) {
  grid-column-gap: 2rem;

}

  h3 {
    font-size: 2rem;
    font-family: 'Playfair Display', serif;
    text-align: center;
    grid-column: span 12;
    font-weight: bold;
  }
`

