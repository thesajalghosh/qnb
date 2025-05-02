import React, { useRef } from 'react'
import Section from '../components/Section'

const Portfolio = () => {
    const parallaxRef = useRef(null);
  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings >
      <div className="container relative" ref={parallaxRef}>


      <marquee className="text-4xl text-black">Coming Soon...</marquee>

      </div>
    </Section>
  )
}

export default Portfolio