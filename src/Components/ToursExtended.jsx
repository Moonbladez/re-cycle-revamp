import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { LargeTourCard} from "./LargeTourCard"
import { toursData } from "../info/toursData"

import styled from "styled-components"

export class ToursExtended extends Component {
    render() {
        return (
            <ToursWrapper>
                <h2>Some of our favourite tours</h2>
                { toursData.map((tour) => {
                return (
                    <LargeTourCard tour={tour} key={uuidv4()}/>
               )
                })}
                </ToursWrapper>
            


       )
   }
}


const ToursWrapper = styled.section`
    h2 {
        grid-column: span 12;
        font-size: 2rem;
        text-align: center;
        text-transform: capitalize;
        font-weight: bold;
        grid-column-gap: 3rem
    }     
    @media (min-width: 1200px) {
 
     grid-column-gap: 1rem;

}


`
