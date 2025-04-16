import React from 'react'
import Hero from '../sections/Hero'
import Benefits from '../sections/Benefits'
import Roadmap from '../sections/Roadmap'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>

            <Hero />
            <Benefits />
            {/* <Collaboration /> */}
            {/* <Services /> */}
            {/* <Pricing /> */}
            <Roadmap />
           
        </div>
    )
}

export default Home