import React, { useRef } from 'react'
import Section from '../../components/Section';
import Button from '../../components/Button';

const SapSupport = () => {
    const parallaxRef = useRef(null);
    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings >
            <div className="container relative" ref={parallaxRef}>


                <h1 className='text-center text-4xl'>SAP Support Service</h1>
                <div className='mt-5 pb-6'>


                    <p className='mt-3'>
                    Maximize the potential of your SAP Solution with Quantumbrix and gain a competitive edge in the market.
                    </p>
                    <p className='mt-3'>
                    Selecting the right SAP support partner for integration and migration can be challenging.
                     As an advanced and dynamic platform, SAP requires specialized expertise to ensure smooth
                      implementation. To fully leverage your SAP applications, you need a team of seasoned
                     professionals who can seamlessly execute solutions with precision and efficiency.
                    </p>
                    <p className='mt-3'>
                    At Quantumbrix, we are a trusted SAP support service provider, offering a 
                    complete range of solutions, including SAP Business One HANA integration, 
                    data migration, cloud deployment, and ongoing support. Our team of experts is
                     dedicated to delivering high-quality services to enhance your business performance
                      and drive long-term success. Keep your
                     SAP systems performing at their best with our expert support services!
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

export default SapSupport