import React, { useRef } from 'react'
import Button from '../../components/Button';
import Section from '../../components/Section';

const SapBusinessOneCloud = () => {
    const parallaxRef = useRef(null);
    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings >
        <div className="container relative" ref={parallaxRef}>
  
  
        <h1 className='text-center text-4xl'>SAP Business One Cloud</h1>
        <div className='mt-5 pb-6'>


        <p className='mt-3'>
        SAP Business One Cloud is a cloud-deployed variant of the powerful
         SAP Business One Solution, tailored for small and medium-sized businesses.
          Whether you choose SAP’s subscription-based cloud or a private cloud hosting
           solution from trusted SAP partners, you get the complete capabilities of
         SAP Business One with the added benefits of cloud security, performance, and reliability.
        </p>

        <p className='mt-3'>
        With our SAP Cloud Solutions, businesses can streamline operations, 
        reduce IT infrastructure costs, and access real-time data anytime, 
        anywhere. Our team ensures a smooth migration from on-premise systems or 
        a seamless implementation of a cloud-based solution, delivering enhanced 
        agility and business continuity. Experience the power of software-as-a-service
         (SaaS) delivery, secure cloud hosting, and automatic updates to keep your operations
          running efficiently. 
        Move to SAP Cloud today and future-proof your business with innovation and growth!
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

export default SapBusinessOneCloud