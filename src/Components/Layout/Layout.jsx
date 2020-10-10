import React, { Component } from 'react'
import { Navbar } from '../Layout/Navbar'
import { Footer } from "../Layout/Footer"

import '../../App.css';




export class Layout extends Component {

    render() {
        return (
            <>
                <Navbar />
                {this.props.children}
                <Footer />
            </>
        )
    }
}