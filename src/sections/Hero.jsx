import { curve, file02, heroBackground, homeSmile, loading, plusSquare, robot, searchMd, yourlogo } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useEffect, useRef, useState } from "react";
import Notification from "../components/Notification";
import PlusSvg from "../assets/svg/PlusSvg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Marquee from "react-fast-marquee";
import { Autoplay } from 'swiper/modules';
const BackgroundCircles = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
            <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

            <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                    <div className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                    <div className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                    <div className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                    <div className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                    <div className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                    <div className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>
            </MouseParallax>
        </div>
    );
};

const Hero = () => {
    const parallaxRef = useRef(null);

    return (
        <Section className="pt-[8rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
            <div className="container relative" ref={parallaxRef}>
                {/* <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        Explore the Possibilities of&nbsp;Developement&nbsp;Connect with {` `}
                        <span className="inline-block relative">
                            Quantum Brix <img src={curve} className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28} alt="" />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                    Quantum Brix delivers expert SAP and Oracle solutions, transforming enterprise systems with innovation, efficiency, scalability, and intelligent business insights</p>
                    <Button href="#pricing" white>
                        Get started
                    </Button>
                </div> */}
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation    
                    // autoplay={{
                    //     delay: 5000, // 2 seconds
                    //     disableOnInteraction: false, // Keeps autoplay running even after user interaction
                    // }}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="h-[57vh] md:h-[60vh] lg:h[80vh]"
                >
                    <SwiperSlide className="h-[200px] flex items-center justify-center">
                        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-2 lg:mb-[6.25rem]">
                            <h1 className="h1 mb-6 text-black">
                                Explore the Possibilities of&nbsp;Developement&nbsp;Connect with {` `}
                                <span className="inline-block relative">
                                    Quantum Brix <img src={curve} className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28} alt="" />
                                </span>
                            </h1>
                            <p className="body-1 max-w-3xl mx-auto mb-2 text-n-2 lg:mb-2">
                                Quantum Brix delivers expert SAP and Oracle solutions, transforming enterprise systems with innovation, efficiency, scalability, and intelligent business insights</p>
                            <Button href="#pricing" white>
                                Get started
                            </Button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="h-[200px] flex items-center justify-center">
                        <img src={robot} className="w-full scale-[1.2] translate-y-[8%] md:scale-[0.7] md:-translate-y-[10%] lg:-translate-y-[23%]" width={1024} height={490} alt="" />

                    </SwiperSlide>
                    {/* <SwiperSlide className="h-[500px] flex items-center justify-center">Slide 3</SwiperSlide>
                    <SwiperSlide className="h-[500px] flex items-center justify-center">Slide 4</SwiperSlide> */}

                </Swiper>

                <div className="hidden relative z-10 mt-20 lg:block">
                    {/* <h5 className="tagline mb-6 text-center text-white/50">Quantum Brix Helping People Create Beautiful Website</h5> */}
                    <Marquee>
                        <div className="flex items-center justify-center gap-[90px]">


                        <div className="flex items-center justify-center flex-[0_0_33.33%] h-[8.5rem]">
                            {/* <img src={yourlogo} width={134} height={28} alt="" /> */}
                            SAP Website
                        </div>
                        <div className="flex items-center justify-center flex-[0_0_33.33%] h-[8.5rem]">
                            {/* <img src={yourlogo} width={134} height={28} alt="" /> */}
                            Oracle Website
                        </div>
                        <div className="flex items-center justify-center flex-[0_0_33.33%] h-[8.5rem]">
                            {/* <img src={yourlogo} width={134} height={28} alt="" /> */}
                            Linux Website
                        </div>
                        <div className="flex items-center justify-center flex-[0_0_33.33%] h-[8.5rem]">
                            {/* <img src={yourlogo} width={134} height={28} alt="" /> */}
                            AWS Website
                        </div>
                        </div>
                    </Marquee>
                </div>
            </div>

            {/* <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
            <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
            <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" /> */}
        
        </Section>
    );
};

export default Hero;