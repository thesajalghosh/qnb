import React, { useRef } from 'react'
import Section from '../../components/Section';
import Button from '../../components/Button';
import { FaArrowRightLong } from "react-icons/fa6";
 

const SapBusiness = () => {
    const parallaxRef = useRef(null);
    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings >
            <div className="container relative text-black" ref={parallaxRef}>


            <h1 className="text-center text-4xl mb-4 text-blue-900 font-bold relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:mt-2">
            SAP Business One Implementation & Consulting</h1>
                <div className='mt-5 pb-6'>


                    <p className='text-start'>SAP Business One is a complete end to end business solution for the small and mid-sized enterprises (SMEs).
                        In today’s fast-paced business world, small and mid-sized enterprises (SMEs) need an efficient, scalable, and
                        affordable ERP solution to streamline operations and drive growth. SAP Business One is designed
                        to help businesses
                        integrate and manage their
                        key operations – from finance and sales to inventory and customer relations – all in a single, unified system.
                    </p>
                    <h2 className='text-2xl mt-5 mb-2'>Why Choose SAP Business One?</h2>
                    <ul className='pl-4 flex flex-col gap-3 empty-2'>
                        <li className='flex gap-2'><FaArrowRightLong size={16} /> End-to-End Business Management: 
                            Gain complete control over your business with a
                             centralized system that connects all core functions.
                             </li>
                        <li className='flex gap-2'><FaArrowRightLong size={16} /> Real-Time Insights: Make data-driven decisions with powerful analytics and reporting capabilities.
                             </li>
                        <li className='flex gap-2'><FaArrowRightLong size={16} /> Scalability: Grow your business without limitations – SAP Business One adapts to your evolving needs.
                             </li>
                        <li className='flex gap-2'><FaArrowRightLong size={16} /> Industry-Specific Solutions: Tailored functionalities for manufacturing, retail, wholesale, and more.
                             </li>
                        <li className='flex gap-2'><FaArrowRightLong size={16} /> Cloud & On-Premise Deployment: Flexible hosting options to suit your business strategy.
                             </li>
                    </ul>

                    <h2 className='text-2xl mt-5 mb-2'>Why Choose Quantumbrix as Your SAP Partner?</h2>
                    <p>
                    Choosing the right SAP partner is crucial for a seamless ERP implementation and
                     long-term business success. At Quantumbrix, we specialize in delivering tailored SAP Business
                     One solutions that help businesses optimize operations, enhance efficiency, and drive growth.
                    </p>
                    <h2 className='text-2xl mt-5 mb-2'>What Makes Quantumbrix Different?</h2>
                    <ul className='pl-4 flex flex-col gap-3 empty-2'>
                        <li className='flex gap-2'><FaArrowRightLong size={20} /> Expertise & Experience – Our team of experienced SAP consultants has extensive industry knowledge
                             and hands-on experience in implementing SAP Business One for businesses of all sizes.
                             </li>
                        <li className='flex gap-2'><FaArrowRightLong size={20} /> Customized Solutions – We understand that every business is unique. Our solutions are designed to align with
                             your specific needs, ensuring maximum efficiency and scalability.
                             </li>
                        <li className='flex gap-2'><FaArrowRightLong size={22} /> Seamless Implementation & Support – From deployment to training and ongoing support, we provide a hassle-free
                             experience with minimal downtime, so you can focus on growing your business.
                             </li>
                        <li className='flex gap-2'><FaArrowRightLong size={18} /> Cost-Effective & Scalable – Our SAP solutions are designed to grow with
                             your business, offering flexibility without breaking the bank.</li>
                        <li className='flex gap-2'><FaArrowRightLong size={20} /> Innovation-Driven Approach – We leverage the latest technologies and best practices to help businesses
                             stay ahead of the competition with real-time insights and automation.
                             </li>
                    </ul>
                    <p className='mt-3 pl-3'>
                    Partner with Quantumbrix today and unlock the full
                     potential of SAP Business One for your business! Contact us now to learn more.
                    </p>
                    <div 
                    className='text-center m-7'
                    >
                        <Button
                        //  className={"w-[200px]"}
                         >Contact Now</Button>
                    </div>
                </div>
            </div >
        </Section >
    )
}

export default SapBusiness