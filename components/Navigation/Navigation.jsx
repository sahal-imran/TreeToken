import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Sling as Hamburger } from 'hamburger-react'
import { BsTwitter } from 'react-icons/bs';

function Navigation() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        <>
            <div className="w-full h-[80px] bg-[#1F1E29] sticky top-0 z-10 ">
                <div
                    className={`m-auto w-full h-full lg:px-10 md:px-6 px-3 flex justify-between items-center`}
                >
                    {/* Logo */}
                    <div className='flex justify-center items-center' >
                        <Image
                            src={"/assets/tree.png"}
                            alt={"Logo-White"}
                            width={60}
                            height={60}
                            objectFit="cover"
                        />
                        <p
                            className={`flex justify-center items-center cursor-pointer text-[#8AD153] ml-4 text-[22px] font-rubik`}
                        >
                            TreeToken
                        </p>
                    </div>

                    {/* Menu Items */}
                    <div className="lg:flex hidden justify-center items-center h-full ">
                        <Link href={"/"}>
                            <p
                                className={`font-rubik flex justify-center items-center cursor-pointer text-white text-[14px] ${router.pathname === "/" ? "font-bold" : "font-[300]"
                                    } capitalize h-full border-b-[3px] border-solid ${router.pathname === "/" ? "border-[#8AD153]" : "border-transparent"
                                    } lg:mr-8 mr-6 `}
                            >
                                Home
                            </p>
                        </Link>
                        <Link href={"/about"}>
                            <p
                                className={`font-rubik flex justify-center items-center cursor-pointer text-white text-[14px] ${router.pathname === "/about" ? "font-bold" : "font-[300]"
                                    } capitalize h-full border-b-[3px] border-solid ${router.pathname === "/about" ? "border-[#8AD153]" : "border-transparent"
                                    } lg:mr-8 mr-6 `}
                            >
                                about
                            </p>
                        </Link>
                        <Link href={"/doc"}>
                            <p
                                className={`font-rubik flex justify-center items-center cursor-pointer text-white text-[14px] ${router.pathname === "/doc" ? "font-bold" : "font-[300]"
                                    } capitalize h-full border-b-[3px] border-solid ${router.pathname === "/doc" ? "border-[#8AD153]" : "border-transparent"
                                    } lg:mr-8 mr-6 `}
                            >
                                whitepaper
                            </p>
                        </Link>
                        <Link href={"/gallery"}>
                            <p
                                className={`font-rubik flex justify-center items-center cursor-pointer text-white text-[14px] ${router.pathname === "/gallery" ? "font-bold" : "font-[300]"
                                    } capitalize h-full border-b-[3px] border-solid ${router.pathname === "/gallery" ? "border-[#8AD153]" : "border-transparent"
                                    } lg:mr-8 mr-6`}
                            >
                                pictures
                            </p>
                        </Link>
                        <a target={"_blank"} rel="noreferrer" href="https://twitter.com/TreeTokende">
                            <BsTwitter color='#8AD153' size={30} />
                        </a>
                    </div>
                    <div className='lg:hidden block' >
                        <Hamburger toggled={isOpen} color="#8AD153" toggle={setIsOpen} />
                    </div>
                </div>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                style={{ background: "#8AD153", width: "70%" }}
            >
                <div className="flex justify-center items-center flex-col w-full pt-10 ">
                    <Link href={"/"}>
                        <p
                            className={`font-rubik flex justify-center items-center cursor-pointer text-white text-[14px] ${router.pathname === "/" ? "font-bold" : "font-[300]"
                                } capitalize h-full border-b-[3px] border-solid ${router.pathname === "/" ? "border-white" : "border-transparent"
                                } mb-6 `}
                        >
                            Home
                        </p>
                    </Link>
                    <Link href={"/about"}>
                        <p
                            className={`font-rubik flex justify-center items-center cursor-pointer text-white text-[14px] ${router.pathname === "/about" ? "font-bold" : "font-[300]"
                                } capitalize h-full border-b-[3px] border-solid ${router.pathname === "/about" ? "border-white" : "border-transparent"
                                } mb-6 `}
                        >
                            about
                        </p>
                    </Link>
                    <Link href={"/whitepaper"}>
                        <p
                            className={`font-rubik flex justify-center items-center cursor-pointer text-white text-[14px] ${router.pathname === "/whitepaper" ? "font-bold" : "font-[300]"
                                } capitalize h-full border-b-[3px] border-solid ${router.pathname === "/whitepaper" ? "border-white" : "border-transparent"
                                } mb-6 `}
                        >
                            whitepaper
                        </p>
                    </Link>
                    <Link href={"/pictures"}>
                        <p
                            className={`font-rubik flex justify-center items-center cursor-pointer text-white text-[14px] ${router.pathname === "/pictures" ? "font-bold" : "font-[300]"
                                } capitalize h-full border-b-[3px] border-solid ${router.pathname === "/pictures" ? "border-[#8AD153]" : "border-transparent"
                                }`}
                        >
                            pictures
                        </p>
                    </Link>
                    <a target={"_blank"} className="mt-6" rel="noreferrer" href="https://twitter.com/TreeTokende">
                            <BsTwitter color='white' size={30} />
                        </a>
                </div>
            </Drawer>
        </>
    )
}

export default Navigation