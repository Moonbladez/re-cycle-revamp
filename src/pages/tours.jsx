import React, { Component } from 'react'
import Helmet from "react-helmet"


import { Layout } from "../Components/Layout/Layout"
import { Jumbotron } from "../Components/Jumbotron"
import {ToursExtended} from "../Components/ToursExtended"


class Tours extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Re-Cycle | Our Tours</title>
                </Helmet>
            <Layout>
                <Jumbotron title="Our Tours" />
                <ToursExtended/>
                </Layout>
                </>
        )
    }
}

export default Tours
