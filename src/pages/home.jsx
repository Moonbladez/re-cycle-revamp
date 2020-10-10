import React from "react"
import { Component } from "react";

import { Layout } from "../Components/Layout/Layout"
import { Jumbotron } from "../Components/Jumbotron"
import { Button } from "../Components/Button"
import { FeaturedTours } from "../Components/FeaturedTours"

import { FaAward } from "react-icons/fa"
import { GiLindenLeaf, GiPiggyBank } from "react-icons/gi"

import styled from "styled-components"



class Home extends Component {
    render() {
        return (
            <Layout>
                <Jumbotron title="Re-Cycle" home subtitle="offering eco-friendly bike tours in your local town" img="/images/about-img.jpg" />
                <FeaturedTours />


                <WhyWrapper>
                    <div className="container">
                        <WhyCard>
                            <div>
                                <FaAward />
                            </div>
                            <WhyCardBody>
                                <h4>Satisfaction Guarenteed</h4>
                            </WhyCardBody>
                        </WhyCard>

                        <WhyCard>
                            <div>
                                <GiLindenLeaf />
                            </div>
                            <WhyCardBody>
                                <h4>Environmentaly Friendly</h4>
                            </WhyCardBody>
                        </WhyCard>
                        <WhyCard>
                            <div>
                                <GiPiggyBank />
                            </div>
                            <WhyCardBody>
                                <h4>Free Cancellations</h4>
                            </WhyCardBody>
                        </WhyCard>
                    </div>
                </WhyWrapper>

                <AboutSection>
                        <h2>About Re-cycle</h2>
                        <AboutWrapper>
                            <div className="img-wrapper">
                                <img src="/images/about-img.jpg" alt="" />
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eveniet animi modi voluptas quo, error, quod quaerat iure enim architecto deserunt nisi, explicabo doloremque non possimus inventore? Recusandae, dolore aperiam totam culpa quas non odio laborum eveniet ad tenetur nisi. Incidunt eos nulla magni eius. Quos aperiam totam a at.
              </div>
                            <Button to={"/about"} text={"about us"} />
                        </AboutWrapper>
                    

                </AboutSection>

            </Layout>

        )
    }
}

export default Home


const WhyCard = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  text-align: center;
  margin-bottom: 3rem;


    @media (min-width: 992px) {
       margin-bottom: 0;
        
        }
        
      
  &:nth-of-type(3) {

    margin-bottom: 0;
  }


  svg {
    color: #246549;
    font-size: 3rem;
  }
`

const WhyWrapper = styled.section`
      background-color: #ceede0;
      width: 100vw;
      padding: 4rem 0;

      @media (min-width: 992px) {
      padding: 3rem
        
      }
      .container {
        @media (min-width: 992px) {
       display: flex;
        justify-content: space-between;
        width: 80%;
    }

    @media (min-width: 1200px) {
        width: 60%
    }
}

`

const WhyCardBody = styled.div`
    transform: capitalize;
    text-align: center;
    font-weight: bold;
    font-size: 1.8rem;

`

const AboutSection = styled.section`

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    grid-column: span 12;
    
  }

  img {
    width: 100%;
  }
`

const AboutWrapper = styled.div`
    
display: grid;
    grid-template-columns: repeat(12, [col] 1fr);
    grid-row-gap: 1rem;
    grid-column: span 12;

    @media (min-width: 992px) {
       grid-column-gap: 1rem;
    
}

    a {
      grid-column: span 12;

      @media (min-width: 992px) {
       justify-self: center;
       width: 50%;
       text-align: center;
    
}
    }

    div:nth-of-type(2) {
      grid-column: span 12;

      @media (min-width: 992px) {
       grid-column: span 6
    
}
    }


    .img-wrapper {
      grid-column: span 12;

      @media (min-width: 992px) {
       grid-column: span 6
    
}
    
`