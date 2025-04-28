import { Link, useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { background, quantum2 } from "../assets";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import { RxDotFilled } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";






const navigation = [
    {
        id: "0",
        title: "Home",
        url: "/",
    },
    {
        id: "1",
        title: "Services",
        url: "/",
    },
    {
        id: "2",
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: "3",
        title: "About Us",
        url: "/about-us",
    },
    {
        id: "4",
        title: "Career",
        url: "/career",
    },
    {
        id: "5",
        title: "New account",
        url: "#signup",
        onlyMobile: true,
    },
    {
        id: "6",
        title: "Sign in",
        url: "#login",
        onlyMobile: true,
    },
];

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate()

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img src={quantum2} width={190} height={40} alt="OpenAI"  />
                </a>

                <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row gap-10 text-xl">
                        {/* {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                onMouseEnter={() => item.id === "1" && setHovered(true)}
                                onMouseLeave={() => item.id === "1" && setHovered(false)}
                                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                    item.url === pathname.hash ? "z-2 lg:text-white" : "lg:text-white/50"
                                } lg:leading-5 lg:hover:text-white xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))} */}
                        <div className="cursor-pointer" onClick={() => navigate("/")}>{navigation[0].title}</div>
                        <Menu menuButton={<MenuButton className="flex items-center gap-1">{navigation[1].title}<IoMdArrowDropdown className="text-white text-lg" />
                        </MenuButton>} transition>
                           
                            <SubMenu label="SAP Solution Services">
                                <MenuItem>
                                    <Link to={"/services/sap-business"}>SAP Business One Implementation & Consulting</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to={"/services/sap-consulting"}>SAP Consulting</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to={"/services/sap-support"}>SAP Support</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to={"/services/sap-upgradation"}>SAP Upgradation</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to={"/services/sap-business-one-cloud"}>SAP Business One Cloud</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to={"/services/sap-hana-solution"}>SAP Business One HANA Solution</Link>
                                </MenuItem>
                            </SubMenu>
                            <SubMenu label="Oracle Services">
                                <MenuItem><Link to={"/services/oracle-service"}>Installation & Configuration</Link></MenuItem>
                                <MenuItem><Link to={"/services/oracle-service"}>Database Upgrades & Migrations</Link></MenuItem>
                                <MenuItem><Link to={"/services/oracle-service"}>Performance Tuning</Link></MenuItem>
                                <MenuItem><Link to={"/services/oracle-service"}>Backup & Recovery Solutions</Link></MenuItem>
                                <MenuItem><Link to={"/services/oracle-service"}>High Availability & Disaster Recovery</Link></MenuItem>
                                <MenuItem><Link to={"/services/oracle-service"}>Security & Compliance</Link></MenuItem>
                                <MenuItem><Link to={"/services/oracle-service"}>Managed Services</Link></MenuItem>
                            </SubMenu>
                            <SubMenu label="OS Services">
                                <MenuItem><Link to={"/services/os-service"}>Installation & Configuration</Link></MenuItem>
                                <MenuItem><Link to={"/services/os-service"}>System Hardening & Security</Link></MenuItem>
                                <MenuItem><Link to={"/services/os-service"}>Patch Management & Updates</Link></MenuItem>
                                <MenuItem><Link to={"/services/os-service"}>Performance Monitoring & Optimization</Link></MenuItem>
                                <MenuItem><Link to={"/services/os-service"}>User & Permission Management</Link></MenuItem>
                                <MenuItem><Link to={"/services/os-service"}>Backup & Recovery Planning</Link></MenuItem>
                                <MenuItem><Link to={"/services/os-service"}>OS Migration & Upgrades</Link></MenuItem>
                                <MenuItem><Link to={"/services/os-service"}>Remote & On-Site Support</Link></MenuItem>
                            </SubMenu>
                            <SubMenu label="AWS Cloud Services">
                                <MenuItem><Link to={"/services/aws-service"}>AWS Deployment & Management</Link></MenuItem>                                                             
                                <MenuItem><Link to={"/services/aws-service"}>AWS Security</Link></MenuItem>                                                             
                                <MenuItem><Link to={"/services/aws-service"}>AWS Cost Optimization</Link></MenuItem>                                                             
                                <MenuItem><Link to={"/services/aws-service"}>AWS Managed Services</Link></MenuItem>                                                             
                                <MenuItem><Link to={"/services/aws-service"}>AWS Support</Link></MenuItem>                                                             
                                <MenuItem><Link to={"/services/aws-service"}>AWS Migration</Link></MenuItem>                                                             
                            </SubMenu>
                        </Menu>
                        <div className="cursor-pointer" onClick={() => navigate('/portfolio')}>{navigation[2].title}</div>
                        <div className="cursor-pointer" onClick={() => navigate('/about-us')}>{navigation[3].title}</div>
                        <div className="cursor-pointer" onClick={() => navigate('/career')}>{navigation[4].title}</div>


                    </div>


                    {/* {hovered && (
                        <div
                            className="absolute top-full left-0 w-full bg-white text-black shadow-lg hidden lg:grid grid-cols-5 gap-8 p-8 text-sm"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <div>
                                <h4 className="font-semibold mb-2">SAP Solution or SAP Solution Services</h4>
                                <ul className="space-y-1">
                                    <li><Link to={"/services/sap-business"}>SAP Business One Implementation & Consulting</Link></li>
                                    <li><Link to={"/services/sap-consulting"}>SAP Consulting</Link></li>
                                    <li><Link to={"/services/sap-support"}>SAP Support</Link></li>
                                    <li><Link to={"/services/sap-upgradation"}>SAP Upgradation</Link></li>
                                    <li><Link to={"/services/sap-business-one-cloud"}>SAP Business One Cloud</Link></li>
                                    <li><Link to={"/services/sap-hana-solution"}>SAP Business One HANA Solution</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Oracle</h4>
                                <ul className="space-y-1">
                                    <li><a href="#">Oracle Database Services</a></li>
                                    <li><a href="#">Database Migration Services</a></li>
                                    <li><a href="#">Managed Oracle DBA Services</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">OS Services</h4>
                                <ul className="space-y-1">
                                    <li><a href="#">Linux Server Setup & Configuration</a></li>
                                    <li><a href="#">System Administration & Maintenance</a></li>
                                    <li><a href="#">Performance Tuning & Optimization</a></li>
                                    <li><a href="#">Migration, Patching, Upgrade</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">AWS Cloud Services</h4>
                                <ul className="space-y-1">
                                    <li><a href="#">AWS Deployment & Management</a></li>
                                    <li><a href="#">AWS Security</a></li>
                                    <li><a href="#">AWS Cost Optimization</a></li>
                                    <li><a href="#">AWS Managed Services</a></li>
                                    <li><a href="#">AWS Support</a></li>
                                    <li><a href="#">AWS Migration</a></li>
                                </ul>
                            </div>
                      
                    
                        </div>
                    )} */}

                    <div className="absolute inset-0 pointer-events-none lg:hidden">
                        <div className="absolute inset-0 opacity-[.03]">
                            <img className="w-full h-full object-cover" src={background} width={688} height={953} alt="" />
                        </div>

                        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
                            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        </div>

                        <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
                        <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>

                        <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
                        <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
                        <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
                    </div>
                </nav>

                <a href="#signup" className="button hidden mr-8 text-white/50 transition-colors hover:text-white lg:block">
                    New account
                </a>
                <Button className="hidden lg:flex" href="#login">
                    Sign in
                </Button>

                <Button className="ml-auto lg:hidden" onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
