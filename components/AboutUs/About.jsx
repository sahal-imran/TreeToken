import React from 'react'

function About() {
  return (
    <>
      <div className="relative w-full h-[calc(100vh-80px)]">
        <div className="max-w-[1440px] md:px-6 px-3 m-auto w-full h-full flex justify-center items-center flex-col ">
          <h1 className="lg:text-[60px] text-[30px] lg:leading-[67.77px] leading-[36px] font-rubik font-[700] text-[#8AD153] lg:text-start text-center ">
            {`About Us`}
          </h1>
          <p className="lg:text-[20px] text-[18px] lg:leading-[30px] leading-[21.78px] font-inter font-[400] text-white/80 lg:max-w-[800px] text-center mt-6">
            TreeToken is a non-profit company based in Germany that promotes nature conservation, environmental education and forest research. It was founded in 2022 and is primarily operational. With partners from the fields of forestry, forest education and nature conservation, the company implements regional projects in accordance with the listed corporate objectives.
          </p>
        </div>
      </div>
    </>
  )
}

export default About