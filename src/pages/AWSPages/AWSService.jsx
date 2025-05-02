import React, { useRef } from 'react'
import Section from '../../components/Section';
import { FaArrowRightLong } from "react-icons/fa6";


const AWSService = () => {
 const parallaxRef = useRef(null);
  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings >
      <div className="container relative" ref={parallaxRef}>
        <h1 className='text-center text-4xl mb-4 text-blue-800 font-bold'>AWS Cloud Services
        </h1>
        <p className='text-start text-xl text-black'>
          Empower your business with scalable, secure, and cost-efficient cloud solutions through our
          comprehensive AWS services. At Quantumbrix, we help you harness the full potential of Amazon Web
          Services with expert-led planning, deployment, and ongoing management tailored to your unique
          goals.
        </p>
        <h3 className='text-2xl mt-5 mb-2 text-black'>Our AWS service offerings include:</h3>
        <div>
          <ul className='pl-4 flex flex-col gap-2 empty-2'>
            <li className='flex gap-2 mt-2 align-center text-xl text-black'><FaArrowRightLong size={16} />AWS Deployment & Management</li>
              <p className='ml-6 text-black'>
                  Smooth and scalable deployments of cloud infrastructure, applications, and services on AWS.
                  We handle provisioning, configuration, and lifecycle management for high-performance and
                  reliable environments.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl text-black'><FaArrowRightLong size={16} />AWS Security</li>
              <p className='ml-6 text-black'>
                Implementation of best-in-class security practices, including IAM policies, encryption, network
                security, and compliance checks to protect your AWS resources and sensitive data.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl text-black'><FaArrowRightLong size={16} />AWS Cost Optimization</li>
              <p className='ml-6 text-black'>
                Analyze, monitor, and reduce your cloud spending with strategic resource planning, rightsizing, reserved instances, and ongoing cost management.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl text-black'><FaArrowRightLong size={16} />AWS Managed Services</li>
              <p className='ml-6 text-black'>
                End-to-end monitoring, patching, backups, and performance tuning of your AWS
                environment—handled by our certified cloud experts so you can focus on your business.
              </p>
            <li className='flex gap-2 mt-2 align-center text-xl text-black'><FaArrowRightLong size={16} />AWS Support</li>
              <p className='ml-6 text-black'>
                Timely, expert support for your AWS infrastructure with proactive issue resolution,
                performance troubleshooting, and configuration guidance.
              </p>
            <li className='flex gap-2 mt-1 align-center text-xl text-black'><FaArrowRightLong size={16} />AWS Migration</li>
              <p className='ml-6 mb-4 text-black'>
                Hassle-free migration of applications, workloads, and databases from on-premises or other
                cloud platforms to AWS—delivered with minimal downtime and maximum reliability.
              </p>
          </ul>
          <p className='text-xl mb-8 text-black'>
            At Quantumbrix, we bring cloud-native thinking and hands-on AWS expertise to every project. From
            startups to enterprises, we tailor each solution for security, scalability, and cost efficiency. With a
            commitment to transparency, reliability, and 24/7 support, we’re your trusted partner for success in
            the cloud.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default AWSService