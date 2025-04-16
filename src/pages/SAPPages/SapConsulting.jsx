import React, { useRef } from 'react'
import Section from '../../components/Section';
import Button from '../../components/Button';

const SapConsulting = () => {
    const parallaxRef = useRef(null);
    return (
      <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings >
        <div className="container relative" ref={parallaxRef}>
  
  
        <h1 className='text-center text-4xl'>SAP Consulting</h1>
        <div className='mt-5 pb-6'>


        <p className=''>
        Unlock the full potential of your business with
         our expert SAP Consulting Services. We help companies
          streamline operations, enhance productivity, and drive digital
           transformation by providing tailored SAP solutions. From implementation
            and customization to integration and ongoing support, our experienced 
            consultants ensure a seamless transition to SAP, maximizing efficiency 
            and ROI. Whether you're adopting SAP for the first time or optimizing an
             existing system, we deliver strategic guidance and hands-on expertise to
              align SAP solutions with your business goals.
         Empower your business with Quantumbrix’s SAP consulting expertise today!
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

export default SapConsulting