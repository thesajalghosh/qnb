import React, { useRef } from 'react'
import Section from '../../components/Section';
import { FaArrowRightLong } from "react-icons/fa6";


const OsService = () => {
 const parallaxRef = useRef(null);
  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings >
      <div className="container relative" ref={parallaxRef}>
        <h1 className='text-center text-4xl mb-4'>Oracle Services</h1>
        <p className='text-center text-xl'>
          Unlock the full potential of your business data with our comprehensive Oracle Database Services.
          Whether you're looking to design a robust architecture, optimize performance, or ensure high
          availability, we provide tailored solutions to meet your unique requirements.
        </p>
        <h3 className='text-2xl mt-5'>Our Oracle Database offerings include:</h3>
        <div>
          <ul className='pl-4 flex flex-col gap-3 empty-2'>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />Installation & Configuration</li>
              <p className='ml-6'>
                Seamless setup of Oracle databases on-premises or in the cloud, configured for peak
                performance and security.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />Database Upgrades & Migrations</li>
              <p className='ml-6'>
                Effortless upgrades and secure migrations from legacy systems to the latest Oracle versions,
                with minimal downtime.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />Performance Tuning</li>
              <p className='ml-6'>
                In-depth diagnostics and tuning to ensure your databases are running at optimal efficiency.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />Backup & Recovery Solutions</li>
              <p className='ml-6'>
                Reliable strategies to safeguard your data and ensure fast recovery in case of system failures or
                disasters.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />High Availability & Disaster Recovery</li>
              <p className='ml-6'>
                Implementation of Oracle RAC, Data Guard, and other high-availability architectures to keep
                your business online 24/7.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />Security & Compliance</li>
              <p className='ml-6'>
                Advanced security configurations and compliance checks to protect sensitive data and meet
                industry regulations.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />Managed Services</li>
              <p className='ml-6 mb-4'>
                24/7 monitoring, maintenance, and support for your Oracle environments, so you can focus on
                growing your business.
              </p>
          </ul>
          <p className='text-xl'>
            At Quantumbrix, we combine deep Oracle expertise with a commitment to delivering value-driven,
            scalable, and secure database solutions. Our team of certified professionals works closely with you to
            understand your business goals and build robust Oracle environments that support long-term
            success. With proactive support, transparent communication, and a customer-first approach, we’re
            your trusted partner for all things Oracle.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default OsService