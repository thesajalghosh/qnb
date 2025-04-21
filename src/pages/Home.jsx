import React from 'react'
import Hero from '../sections/Hero'
import Benefits from '../sections/Benefits'
import Roadmap from '../sections/Roadmap'
import Footer from '../components/Footer'
import TestimonialComponent from '../components/TestimonialComponent'

const Home = () => {
    return (
        <div>

            <Hero />
            <TestimonialComponent/>
            <Benefits />
            {/* <Collaboration /> */}
            {/* <Services /> */}
            {/* <Pricing /> */}
            <Roadmap />
           
        </div>
    )
}

export default Home