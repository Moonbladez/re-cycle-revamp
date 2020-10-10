import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';


import { Jumbotron } from '../Components/Jumbotron'
import { Layout } from '../Components/Layout/Layout'
import { teamInfo } from "../info/teamInfo"
import { DiGithubAlt } from "react-icons/di"
import { FaLinkedin } from "react-icons/fa"


import styled from "styled-components"
import { Helmet } from 'react-helmet'


class About extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Re-Cycle | About</title>
                </Helmet>
            <Layout>       
                <Jumbotron title="about us" image="images/about-img.jpg"/>

                <AboutHistory>
                    <h2>A Brief History</h2>

                    <HistoryWrapper>
                        <HistoryImg>
                            <img src="/images/about-img.jpg" alt="about re-cycle" />
                        </HistoryImg>
                        <HistoryText>
                            <p>Steve & Peggy formed Re-Cycle out of a mutual love of biking and everything good for the environment. They met in a bicycle repair shop and got discussing the need for more bikes rather than cars around the city.</p>

                            <p>Over a bagel they came up with the idea of Re-Cycle and the idea of running bike tours for tourists in the city, so they could see the local sites without the polution of the open topped buses.</p>

                            <p>and the rest they say.... is history</p>
                        </HistoryText>
                    </HistoryWrapper>
                </AboutHistory>

                <Nowadays>
                    <h2>Re-cycle Now</h2>

                    <NowadaysWrapper>
                        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, quod. Nobis assumenda rerum porro voluptatem perferendis, veniam harum maiores nisi omnis ad? Cumque sunt aliquam nisi dolores dolorum nam quod alias exercitationem optio? Perspiciatis asperiores culpa nesciunt pariatur, ratione modi libero quasi cum, at corporis ullam, omnis magni laboriosam fugiat.</div>

                        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, quod. Nobis assumenda rerum porro voluptatem perferendis, veniam harum maiores nisi omnis ad? Cumque sunt aliquam nisi dolores dolorum nam quod alias exercitationem optio? Perspiciatis asperiores culpa nesciunt pariatur, ratione modi libero quasi cum, at corporis ullam, omnis magni laboriosam fugiat.</div>

                    </NowadaysWrapper>
                </Nowadays>

                <Team>
                    <h2>Our Team</h2>

                    <TeamWrapper>
                        {teamInfo.map((member) => {
                            return (
                                <TeamCard key={uuidv4()}>
                                    <img src={member.image} alt={`${member.name} - ${member.position}`}></img>
                                    <TeamInfo>
                                        <h3>{member.name}</h3>
                                        <p>{member.position}</p>
                                        <TeamSocial>
                                            <span><a href="https://github.com/Moonbladez"><DiGithubAlt /></a></span>
                                            <span><a href="https://www.linkedin.com/in/rebecca-young83/"><FaLinkedin /></a></span>
                                        </TeamSocial>
                                    </TeamInfo>
                                </TeamCard>
                            )
                        })}
                    </TeamWrapper>
                </Team>

                <Testimonial>
                    <div className="container">
                        <h2>Re-Cycle Customers</h2>
                        <TestimonalWrapper>
                            <TestimonialBox>
                                <div><img src="/images/ultron.jpg" alt="testimonail" /></div>
                                <div>
                                    <q>Already booked my second tour with Re-Cycle. Very knowledgable tour guide Wanda, and I
                                learnt so much about a city I have lived in all my life which I never knew.</q>
                                </div>
                                <figcaption>
                                    <cite>Ultron</cite>
                                </figcaption>
                            </TestimonialBox>


                            <TestimonialBox>
                                <div><img src="/images/loki.jpg" alt="testimonail" /></div>
                                <div>
                                    <q>Highly recommended. Lovely day out for all the family</q>
                                </div>
                                <figcaption>
                                    <cite>Loki</cite>
                                </figcaption>
                            </TestimonialBox>
                        </TestimonalWrapper>
                    </div>
                </Testimonial>

                </Layout >
                </>
        )
        
    }
}

export default About


const AboutHistory = styled.section`
    h2 {
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
        grid-column: span 12;
    }

  
`

const HistoryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, [col] 1fr);
    grid-row-gap: 1rem;
    grid-column: span 12;

    @media (min-width: 992px) {
           grid-column-gap: 1rem;

        }

        
`

const HistoryImg = styled.div`
    grid-column: span 12;
    img {
        width: 100%
    }

        @media (min-width: 992px) {
            grid-column: span 6

        }
    
`

const HistoryText = styled.div`
    grid-column: span 12;

    @media (min-width: 992px) {
            grid-column: span 6

        }
`


const Nowadays = styled.section`
  h2 {
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
        grid-column: span 12;
    }
`

const NowadaysWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, [col] 1fr);
    grid-column: span 12;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;

    div {
        grid-column: span 12;

        @media (min-width: 992px) {
           grid-column-gap: 1rem;
           grid-column: spaN 6;

        }
    }
`

const Team = styled.section`
  h2 {
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
        grid-column: span 12;
    }
`

const TeamWrapper = styled.div`
  grid-column: span 12;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(12, [col] 1fr);
    display: grid;
    margin: auto;

    @media (min-width: 992px) {
           grid-column-gap: 1rem;

        }

`

const TeamCard = styled.figure`
    grid-column: span 12;
    padding: 5px;
    max-width: 500px;
    border: 1px solid #246549;
    display: grid;
    grid-template-columns: repeat(12, [col] 1fr);
    grid-row-gap: 2rem;

    @media (min-width: 992px) {
          grid-column: span 6;
          grid-column-gap: 1rem;

    }

        @media (min-width: 1200px) {
            grid-column: span 4;

        }

    img {
        object-fit: fill;
        grid-column: span 12;
        width: 100%;
    }

`

const TeamInfo = styled.figcaption`
    grid-column: span 12;

    h3 {
        font-size: 1.7rem;
    }

    p {
        font-size: 1.1rem;
        margin-top: 0.5rem;
    }
`
const TeamSocial = styled.div`
    margin-top: 0.5rem;

    svg {
        font-size: 2rem;

        &:hover {
            color: #652440;
        }

        &:nth-of-type(1) {
            margin-right: 1rem;
        }
    }
`

const Testimonial = styled.div`
    background-color: #ceede0;
    padding: 2rem 0;

    h2 {
        font-size: 2rem;
        padding-bottom: 2rem;
        font-weight: bold;
        text-align: center;
    }
`

const TestimonalWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-row-gap: 3rem;
    grid-column-gap: 1rem;
    @media (min-width:1200px) {
           width: 60vw;
           margin: auto;

        }


    figure {
        grid-column: span 12;
        @media (min-width: 992px) {
        grid-column: span 6;
    }
    }
`

const TestimonialBox = styled.figure`

    }
    img {
        width: 100%;
        max-height: 10rem;
        object-fit: contain;
        margin-bottom: 1rem;
    }   

    p {
        margin-bottom: 1rem;
        font-style: italic;
        font-size: 1.2rem;
        line-height: 1.7rem;

        
    }
    
    cite {
        font-weight: bold;
    }
`



