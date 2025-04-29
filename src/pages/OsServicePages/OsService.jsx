import React, { useRef } from 'react'
import Section from '../../components/Section';
import { FaArrowRightLong } from "react-icons/fa6";


const OsService = () => {
 const parallaxRef = useRef(null);
  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings >
      <div className="container relative" ref={parallaxRef}>
        <h1 className='text-center text-4xl mb-4'>OS Services</h1>
        <p className='text-start text-xl'>
          We support a wide range of operating systems—both Linux and Windows—and deliver customized
          solutions to match your infrastructure needs.
        </p>
        <h3 className='text-2xl mt-5'>Our OS Services include:</h3>
        <div>
          <ul className='pl-4 flex flex-col gap-3 empty-2'>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />Installation & Configuration</li>
              <p className='ml-6'>Reliable setup of Windows and Linux-based operating systems with tailored configurations to
                meet your performance, security, and application needs. We ensure your server is optimized,
                stable, and ready for production workloads. Whether on-premises or cloud-based, our
                solutions are scalable, reliable, and fully customized.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />System Hardening & Security</li>
              <p className='ml-6'>Implementation of best practices and security protocols to protect your systems from
                vulnerabilities, threats, and unauthorized access
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />Patch Management & Updates</li>
              <p className='ml-6'>
                Regular updates and patching to keep your systems secure, compliant, and running smoothly.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />Performance Monitoring & Optimization</li>
              <p className='ml-6'>
                Proactive monitoring and tuning to maintain system health and ensure optimal performance
                under any workload.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />User & Permission Management</li>
              <p className='ml-6'>
                Structured access control setup, including role-based permissions and user group policies for
                better accountability and security.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />Backup & Recovery Planning</li>
              <p className='ml-6'>
                Creation and management of system-level backup strategies to ensure fast and effective
                disaster recovery.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />OS Migration & Upgrades</li>
              <p className='ml-6'>
                Smooth and safe transitions from older versions or between different OS platforms with
                minimal disruption
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl'><FaArrowRightLong size={16} />Remote & On-Site Support</li>
              <p className='ml-6 mb-6'>
                Flexible support options to assist with troubleshooting, system audits, and ongoing OS
                maintenance.
              </p>
          </ul>
          <p className='text-xl mb-8'>
            At Quantumbrix, we bring together certified expertise across both Linux and Windows
            platforms with a customer-first mindset. Our team delivers fast, secure, and cost-effective
            server solutions, backed by 24/7 support and a commitment to long-term success. Partner with
            us for transparency, technical excellence, and peace of mind.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default OsService