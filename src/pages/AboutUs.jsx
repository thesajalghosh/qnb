import React, { useRef } from 'react';
import Section from '../components/Section';
import { FaArrowRightLong } from 'react-icons/fa6';

const AboutUs = () => {
    const parallaxRef = useRef(null);
    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings>
            <div className="container relative text-black" ref={parallaxRef}>
            <h1 className="text-center text-4xl mb-4 text-blue-900 font-bold relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:mt-2">
            About Quantumbrix
            </h1>
            <p className="text-start text-xl">
                    Founded in 2022, with a highly experienced and versatile team of 12+ years of experience in the IT industry, 
                    Quantumbrix is committed to delivering tailored IT solutions that drive business transformation and growth. 
                    We specialize in:
                </p>
                <ul className="pl-4 flex flex-col gap-3 mt-4">
                    <li className="flex gap-2 align-center text-xl">
                        <FaArrowRightLong size={16} /> 
                        <span>SAP Implementation: Designing, configuring, and optimizing SAP landscapes to streamline finance, supply chain, and HR processes.</span>
                    </li>
                    <li className="flex gap-2 align-center text-xl">
                        <FaArrowRightLong size={16} /> 
                        <span>AWS Services: Architecting cloud-native infrastructures, migrating workloads, and automating deployments on Amazon Web Services.</span>
                    </li>
                    <li className="flex gap-2 align-center text-xl">
                        <FaArrowRightLong size={16} /> 
                        <span>Oracle Solutions: Implementing and fine-tuning Oracle databases and applications to ensure peak performance, security, and scalability.</span>
                    </li>
                    <li className="flex gap-2 align-center text-xl">
                        <FaArrowRightLong size={16} /> 
                        <span>OS Services: Managing and hardening operating systems (Linux & Windows), patching, monitoring, and automation for reliable uptime.</span>
                    </li>
                </ul>
                <h3 className="text-2xl mt-5">Why Hire Quantumbrix</h3>
                <ul className="pl-4 flex flex-col gap-3 mt-4">
                    <li className="flex gap-2 align-center text-xl">
                        <FaArrowRightLong size={16} /> 
                        <span>End-to-End Delivery: We partner with you from strategy and design through implementation, training, and ongoing support.</span>
                    </li>
                    <li className="flex gap-2 align-center text-xl">
                        <FaArrowRightLong size={16} /> 
                        <span>Certified Expertise: Our consultants hold AWS, SAP, and Oracle certifications—and maintain hands-on skills in system administration and automation.</span>
                    </li>
                    <li className="flex gap-2 align-center text-xl">
                        <FaArrowRightLong size={16} /> 
                        <span>Agile & Collaborative: We work in tight sprints, sharing progress and knowledge with your internal teams every step of the way.</span>
                    </li>
                    <li className="flex gap-2 align-center text-xl">
                        <FaArrowRightLong size={16} /> 
                        <span>Security & Compliance: From OS hardening to cloud-native controls, we build security into every layer of your infrastructure.</span>
                    </li>
                </ul>
                <p className="text-xl mt-4 mb-6">
                    Whether you’re modernizing ERP with SAP, migrating databases to Oracle Cloud, or building a resilient AWS environment, 
                    Quantumbrix delivers solutions that scale with your business and deliver measurable ROI. Let us show you how strategic 
                    service delivery can transform your IT into a true competitive advantage.
                </p>
            </div>
        </Section>
    );
};

export default AboutUs;