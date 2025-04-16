import React, { useRef } from 'react'
import Section from '../../components/Section';
import Button from '../../components/Button';

const SapUpgradation = () => {
    const parallaxRef = useRef(null);
    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings >
        <div className="container relative" ref={parallaxRef}>
  
  
        <h1 className='text-center text-4xl'>SAP Upgradation</h1>
        <div className='mt-5 pb-6'>


        <p className='mt-3'>
        Enhance your business efficiency with our SAP Upgradation Services. Our team 
        of experts ensures a smooth transition to newer SAP versions, minimizing downtime 
        while maximizing operational efficiency. Whether you need an upgrade in your existing 
        SAP Solution, module enhancements, or database migration, we follow
         a structured approach with meticulous planning, rigorous testing, and seamless execution.
        </p>
        <p className='mt-3'>
        At Quantumbrix, we provide end-to-end support for both
         technical and functional upgrades, ensuring a future-ready,
          scalable, and optimized SAP system.
         Upgrade with confidence and transform your business today.
        </p>

        <div className='text-center m-7'>
                        <Button 
                        // className={"w-[200px]"}
                        >Contact Now</Button>
                    </div>
        </div>
          
        </div>
      </Section>
    )
}

export default SapUpgradation