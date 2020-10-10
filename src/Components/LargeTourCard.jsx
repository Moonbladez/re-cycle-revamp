import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';


import { FaUsers, FaLanguage, FaClock, FaCalendarAlt } from "react-icons/fa"
import { GiLightBackpack } from "react-icons/gi"
import { MdLocationOn } from "react-icons/md"

import { Button } from "../Components/Button"
import styled from "styled-components"

export class LargeTourCard extends Component {
   
    render() {
        const time = this.props.tour.duration

        return (
            <TourCard>
                <CardTop>
                    <img src={this.props.tour.img} alt={`a ${this.props.tour.name} tour`}></img>
                    <h3>{this.props.tour.name}</h3>
                </CardTop>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td><FaUsers/></td>
                                <td><h4>Max Group Size: </h4><p>{this.props.tour.max}</p></td>
                            </tr>

                            <tr>
                                <td><FaLanguage /></td>
                                <td><h4>Languages: </h4>
                                    <ul>
                                     {this.props.tour.languages.map((language) => {
                                        return (
                                            <li key={uuidv4()}>{language}</li>
                                        )
                                     })}
                                    </ul>
                             
                                
                                </td>
                            </tr>

                            <tr>
                                <td><FaClock /></td>
                                <td>
                                    <ul>
                                        {Object.keys(time).map(function (key, index) {
                                            return (
                                                <li key={uuidv4()}><span>{key}:</span> {time[key]}</li>
                                            )
                                        })}
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td><FaCalendarAlt /></td>
                                <td>
                                    <h4>Days: </h4>
                                    <ul>
                                    {this.props.tour.days.map((day) => {
                                        return <li key={uuidv4()}>{day}</li> 
                                    })}
                                    </ul>

                                </td>
                            </tr>

                            <tr>
                                <td><GiLightBackpack/></td>
                                <td>
                                    <h4>Included</h4> 
                                    <ul>
                                        {this.props.tour.included.map((item) => {
                                            return <li key={uuidv4()}>{item}</li>
                                        })}
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td><MdLocationOn/></td>
                                <td><h4>Meeting Point: </h4>
                                    {this.props.tour.meeting}
                                </td>
                            </tr>
                        </tbody>
                    </table>
        
                                        
                </div>

                
                <CardAction>
                        <div>from  <span>£{this.props.tour.price}</span></div>
                        <Button text="Book Now"  to="/"/>
                    </CardAction>    
            </TourCard>
        )
    }
}

const TourCard = styled.div`
    grid-column: span 12;

 
    @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1rem;

}
        @media (min-width: 1200px) {
            grid-column: span 6;
            grid-row-gap: 1rem;
            display: flex;
            flex-direction: column;

        }

    svg {
        font-size: 1.8rem;
        color: #246549;
    }

    img {
        width: 100%;
    }

    table {
        margin: auto;
        border-collapse: separate;
        border-spacing: 2rem;
    }

    h4 {
        font-weight: bold;
        font-size: 1.1rem;
        margin-bottom: 0.8rem;
    }

    li {
        text-transform: capitalize;

        span {
            margin-right: 1rem;
        }
    }
`

const CardTop = styled.div`
    position: relative;

    h3 {
        bottom: 0;
        background-color: #246549;
        width: 100%;
        color: white;
        padding: 1rem;
        font-size: 1.3rem;
        text-align: center;
        font-family: 'Assistant', sans-serif;
        letter-spacing: 0.1rem;
    }
    
`

const CardAction = styled.div`
text-align: center;
grid-column: span 12;

    span {
        font-weight: bold;
        font-size: 2rem;
        margin-left: 1rem;
        color: #652440;
    }

    @media (min-width: 1200px) {
           margin-top: auto;
        }

    
`


