import React from 'react';
import Image from 'next/image';

function Hero() {
    return (
        <>
            <div className="relative w-full h-[calc(100vh-80px)] ">
                <div className="max-w-[1440px] md:px-6 px-3 m-auto w-full h-full flex justify-start items-center lg:flex-row flex-col ">

                    {/* Left */}
                    <div className="flex justify-center lg:items-start items-center flex-col lg:w-[50%] h-full">
                        <h1 className="lg:text-[60px] text-[30px] lg:leading-[67.77px] leading-[36px] font-rubik font-[700] text-[#8AD153] lg:text-start text-center ">
                            {`TreeToken`}
                        </h1>
                        <p className="lg:text-[20px] text-[18px] lg:leading-[30px] leading-[21.78px] font-inter font-[400] text-white/80 lg:text-start text-center mt-3">
                            A token that will plant trees and flowering areas around the globe.
                            <br />
                            Be a part of us!
                        </p>
                        <div className="flex justify-center items-center lg:flex-row flex-col lg:mt-12 mt-6 ">
                            <a href='https://polygonscan.com/token/0xbb1f51cd96c1859adf7481d23dddae9812c9e3bf' target={"_blank"} rel="noreferrer" className="capitalize whitespace-nowrap lg:w-[204px] w-[290px] h-[57px] text-[16px] leading-[19.36px] font-rubik font-[600] text-black border-none bg-[#8AD153] hover:bg-[#5da229] transition-all duration-[0.4s] cursor-pointer rounded-[12px] flex justify-center items-center ">
                                Buy
                            </a>
                            <a href='https://polygonscan.com/address/0x59ad95f5433a24c6fb13bdc8ad30de471f707a59' target={"_blank"} rel="noreferrer" className="capitalize whitespace-nowrap lg:w-[204px] w-[290px] h-[57px] text-[16px] leading-[19.36px] font-rubik  font-[600] text-black border-none bg-[#8AD153] hover:bg-[#5da229] transition-all duration-[0.4s] cursor-pointer rounded-[12px] lg:mt-0 mt-4 lg:ml-5 flex justify-center items-center">
                                Donate
                            </a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex justify-center items-center lg:w-[50%] h-full">
                        <Image
                            src={"/assets/tree.png"}
                            alt={"Logo-White"}
                            width={500}
                            height={500}
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero