import React, { useRef } from 'react'
import Section from '../components/Section';

const Career = () => {
    const parallaxRef = useRef(null);
  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings >
    <div className="container relative" ref={parallaxRef}>


      service
    </div>
  </Section>
  )
}

export default Career