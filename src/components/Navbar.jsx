import { Link, useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { background, quantum2 } from "../assets";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import { RxDotFilled } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";





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
    // const [hovered, setHovered] = useState(false);
    const [sideBar, setSideBar] = useState(false)
    const navigate = useNavigate()
    const [hovered, setHovered] = useState(false);
    const [hoveredSubMenu, setHoveredSubMenu] = useState(null); // Add this state

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
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 bg-white  lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img
                        src={quantum2}
                        // width={190}
                        // height={40}
                        alt="OpenAI"
                        className="h-[40px] w-[100px]"
                    />
                </a>

                <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent lg:p-6 lg:text-black`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row gap-10 text-xl text-blue-800 font-bold">
                        <div className="cursor-pointer" onClick={() => navigate("/")}>{navigation[0].title}</div>
                        <Menu menuButton={<MenuButton className="flex items-center gap-1">{navigation[1].title}<IoMdArrowDropdown className="text-black text-lg" />
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

                <a href="#signup" className="button hidden mr-8 text-white/50 transition-colors hover:text-white lg:block lg:text-black">
                    New account
                </a>
                <Button className="hidden lg:flex" href="#login">
                    Sign in
                </Button>
                {sideBar &&
                    <div className="fixed top-0 left-0  z-999 lg:hidden h-[100vh] w-[100vw] bg-gray-900/50 backdrop-blur-sm" onClick={() => setSideBar(false)}>


                        <div className="bg-[#dbd9d9] h-[100vh] w-[70vw] ">
                         
                                <div className="flex justify-between items-center w-[100%] p-4 border-b-[#000000] border-[2px]">
                                    <a className="block w-[12rem] xl:mr-8" href="#hero">
                                        <img
                                            src={quantum2}
                                            // width={190}
                                            // height={40}
                                            alt="OpenAI"
                                            className="h-[40px] w-[100px]"
                                        />
                                    </a>
                                    <RxCross2 size={30} color="black" onClick={() => setSideBar(false)} />
                                </div>

                                {/* Code here abhik */}
                                <div className="flex flex-col">
                                    <ul className="p-4">
                                        {navigation.map((item) => (
                                            <li key={item.id} className="py-2 border-b border-gray-300">
                                                {item.title === "Services" ? (
                                                    <div>
                                                        <button
                                                            className="text-black hover:text-blue-500 transition-colors
                                                             w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.6rem]"
                                                            onClick={() => setHovered((prev) => !prev)} // Toggle dropdown visibility
                                                        >
                                                            {item.title}
                                                        </button>
                                                        {hovered && (
                                                            <ul className="pl-4 mt-2">
                                                                <li>
                                                                    <button
                                                                        className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.6rem]"
                                                                        onClick={() =>
                                                                            setHoveredSubMenu((prev) =>
                                                                                prev === "SAP" ? null : "SAP"
                                                                            )
                                                                        }
                                                                    >
                                                                        SAP Solution Services
                                                                    </button>
                                                                    {hoveredSubMenu === "SAP" && (
                                                                        <ul className="pl-4 mt-2">
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/sap-business"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors border-b !border-gray-400 py-2 flex items-center justify-between text-[1.6rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    SAP Business One Implementation & Consulting
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/sap-consulting"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors border-b !border-gray-400 py-2 flex items-center justify-between text-[1.6rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    SAP Consulting
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/sap-support"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors border-b !border-gray-400 py-2 flex items-center justify-between text-[1.6rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    SAP Support
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/sap-upgradation"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    SAP Upgradation
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                                <li>
                                                                    <button
                                                                        className="text-black hover:text-blue-500 transition-colors w-full text-left"
                                                                        onClick={() =>
                                                                            setHoveredSubMenu((prev) =>
                                                                                prev === "Oracle" ? null : "Oracle"
                                                                            )
                                                                        }
                                                                    >
                                                                        Oracle Services
                                                                    </button>
                                                                    {hoveredSubMenu === "Oracle" && (
                                                                        <ul className="pl-4 mt-2">
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/oracle-service"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Installation & Configuration
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/oracle-service"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Database Upgrades & Migrations
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/oracle-service"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Performance Tuning
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/oracle-service"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Backup & Recovery Solutions
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                                <li>
                                                                    <button
                                                                        className="text-black hover:text-blue-500 transition-colors w-full text-left"
                                                                        onClick={() =>
                                                                            setHoveredSubMenu((prev) =>
                                                                                prev === "OS" ? null : "OS"
                                                                            )
                                                                        }
                                                                    >
                                                                        OS Services
                                                                    </button>
                                                                    {hoveredSubMenu === "OS" && (
                                                                        <ul className="pl-4 mt-2">
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/os-service"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Installation & Configuration
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/os-service"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    System Hardening & Security
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/os-service"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Patch Management & Updates
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/os-service"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Performance Monitoring & Optimization
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                                <li>
                                                                    <button
                                                                        className="text-black hover:text-blue-500 transition-colors w-full text-left"
                                                                        onClick={() =>
                                                                            setHoveredSubMenu((prev) =>
                                                                                prev === "AWS" ? null : "AWS"
                                                                            )
                                                                        }
                                                                    >
                                                                        AWS Cloud Services
                                                                    </button>
                                                                    {hoveredSubMenu === "AWS" && (
                                                                        <ul className="pl-4 mt-2">
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/aws-service"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    AWS Deployment & Management
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/aws-service"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    AWS Security
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/aws-service"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    AWS Cost Optimization
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/aws-service"}
                                                                                    className="block py-1 text-black hover:text-blue-500 transition-colors"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    AWS Managed Services
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                            </ul>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <Link
                                                        to={item.url}
                                                        className="text-black hover:text-blue-500 transition-colors"
                                                        onClick={() => setSideBar(false)} // Close sidebar on link click
                                                    >
                                                        {item.title}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                        </div>

                    </div>
                }

                <Button className="ml-auto lg:hidden" onClick={() => setSideBar(!sideBar)}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;