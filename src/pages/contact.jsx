import React, { Component } from 'react'
import Helmet from "react-helmet"
import { FaPhone } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { BiCurrentLocation } from "react-icons/bi"


import { Layout } from "../Components/Layout/Layout"
import { Jumbotron } from '../Components/Jumbotron'

import styled from "styled-components"


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: "",
                valid: null,
                error: "This field is required"
            },
            email: {
                value: "",
                valid: null,
                error: "This is not a valid email address",
            },
            message: {
                value: "",
                valid: null,
                error: "This field is required",
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange({ target }) {
        this.setState({
            [target.name]: { ...this.state[target.name], value: target.value, valid: this.validation(target.name, target.value) }
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        if (this.state.name.valid && this.state.email.valid && this.state.message.valid) {
            window.alert("Submited")
        }
    }

    validation(inputName, inputValue) {
        switch (inputName) {
            case "email":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);

            case "name":
            case "message":
                return inputValue !== "";
            default:
        };
    }

    render() {
        return (
            <>
              <Helmet>
                    <title>Re-Cycle | Contact Us</title>
                </Helmet>
            <Layout>
                    <Jumbotron title="Contact Re-Cycle" url={Image}/>


                <ContactForm>
                    <h2>Keep in Touch</h2>
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <label htmlFor="name">
                                Name:
                                <input type="text" value={this.state.name.value} id="name" placeholder="John Smith" onChange={this.handleChange} name="name" />
                                <span> {this.state.name.valid || this.state.name.valid === null ? "" : this.state.name.error}</span>

                            </label>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="email">
                                Email:
                                <input type="email" name="email" id="email" placeholder="j.smith@gmail.com" value={this.state.email.value} onChange={this.handleChange} />
                                <span>{this.state.email.valid || this.state.email.valid === null ? "" : this.state.email.error}</span>

                            </label>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="message">
                                Your message:
                                <textarea type="text" name="message" id="message" value={this.state.message.value} onChange={this.handleChange} />
                                <span>{this.state.message.valid || this.state.message.valid === null ? "" : this.state.message.error}</span>

                            </label>
                        </FormGroup>
                        <button type="submit">Submit</button>
                    </form>
                </ContactForm>

                <WaysToContact>
                    <div className="container">
                        <div>
                            <FaPhone />
                            <span>
                                Call us on
                                <a href="tel:+4707700 900770">07700 900770</a>
                            </span>

                        </div>
                        <div>
                            <GrMail />
                            <span>
                                Email Us On
                                <a href="mailto:steve@avengers.com">steve@avengers.com</a>
                            </span>

                        </div>
                        <div>
                            <BiCurrentLocation />
                            <span>
                                122 Crown Street,
                                <br />
                                London, W10 2JG
                            </span>

                        </div>
                    </div>

                </WaysToContact>


                <Map>
                    <h2>How To Find Us</h2>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d635456.5765727975!2d-0.101599!3d51.526933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sse!4v1602184427530!5m2!1sen!2sse"
                            style={{ width: "600", height: "450", border: "0" }} frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="google maps"></iframe>
                    </div>
                </Map>

                </Layout >
         </>
        )
    }
}

export default Contact


const ContactForm = styled.section`
    h2 {
        font-size: 1.8rem;
        font-weight: bold;
        text-align: center;
        grid-column: span 12;
    }
    form {
        grid-column: span 12;

        @media (min-width: 1200px) {
               width: 60vw;
               margin: auto;
        }

        @media (min-width: 1500px) {
               width: 40vw;
        }
        }

        button {
        background-color: #246549;

        width: 100%;
        padding: 1rem 0.5rem;
        text-align: center;
        color: #fefefe;

   
    }
`
const FormGroup = styled.div`
    position: relative;
    margin-bottom: 3rem;

    
    span {
        color: red;
    }

    svg {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        color:  #a5a5a5;

    
        
        }
    input, textarea {
    border: 1px solid #246549;
    padding: 1rem;
    width: 100%;
    margin: 1rem 0;


}

`


const WaysToContact = styled.section`
    background-color: #ceede0;
    width: 100%;
    text-align: center;

    @media (min-width: 992px) {
           .container {
               display: flex;
               justify-content: space-between;
               width: 50vw;
           }

        }

    svg {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: #246549;
        }  
         

    span {
        display: flex;
        flex-direction: column;
        margin-bottom: 3rem;
        cursor: pointer;

        @media (min-width: 992px) {
           margin-bottom: 0;

        }
        
    }
`

const Map = styled.section`
        h2 {
            font-size: 1.8rem;
        font-weight: bold;
        text-align: center;
        grid-column: span 12;
        }

        div {
            grid-column: span 12;
            height: 30vh;

            @media (min-width: 1200px) {
               width: 40vw;
               margin: auto;
        }


            iframe {
                width: 100%;
                height: 100%;
                
            }
        }
`