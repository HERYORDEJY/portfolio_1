import GridElementsIcon from "~/components/svgs/GridElementsIcon.tsx";
import {FaCss3Alt, FaHtml5, FaLaravel, FaNodeJs, FaReact} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import React from "react";
import {SiNextdotjs} from "react-icons/si";
import {RiGatsbyFill} from "react-icons/ri";


function App() {
  
  return (
    <>
      <nav className={'bg-cardColor  h-[82.18px]'}>
        <div className={'flex flex-row items-center justify-between px-5 h-full '}>
          {/* logo */}
          <a href="https://vitejs.dev" target="_blank">
            <div>
              <img src="/images/logo-img.png" alt="logo"
                   className={'logo-img  relative h-10 w-10 bg-blend-multiply bg-transparent fill-white'}/>
            </div>
          </a>
          
          {/* nav links */}
          <div className={'md:hidden'}>
            <button>
              <GridElementsIcon/>
            </button>
          </div>
        </div>
      </nav>
      <main className={''}>
        {/*   hero */}
        <div
          className={'w-screen  self-center h-[calc(100vh-82.18px)] flex flex-col items-center text-primaryColor justify-center  px-5'}>
          <img src="/images/maliq.png" alt="malik" className={'rounded-full h-40 w-40 md:size-[250px] mb-5 md:mb-10'}/>
          <div className={'w-full space-y-2.5 md:space-y-10 mb-5 lg:mb-[54px]'}>
            
            <p
              className={'font-extrabold text-2xl md:text-[55px] text-center block leading-[30.4px] md:leading-[63.4px]'}>I
              do code and<br/>make content <span
                className={'inline bg-gradient-to-r from-primaryGradientStart  to-primaryGradientStop text-transparent bg-clip-text'}> about
                it!</span></p>
            <p className={'block lg:hidden md:mx-20 text-secondaryText text-[14px] md:text-[18px] text-center font-light'}>
              I am a seasoned full-stack software engineer with over
              8 years of professional experience, specializing in backend development.
              My expertise lies in crafting robust and scalable SaaS-based
              architectures on the Amazon AWS platform.
            </p>
            <p className={' hidden lg:block text-secondaryText text-[14px] md:text-[18px] text-center font-light'}>
              I am a seasoned full-stack software engineer with over<br/>8 years of professional experience,
              specializing
              in backend development.<br/>My expertise lies in crafting robust and scalable SaaS-based<br/>architectures
              on the Amazon AWS platform.
            </p>
            
          </div>
          
        {/* action buttons */}
          <div className="flex flex-row item-center justify-center gap-[18px] mb-[30px] md:mb-[54px] lg:mb-[88px]">
            <button className={'rounded-full bg-primaryColor text-[#161513] font-semibold text-[14px] md:text-[18px] lg:text-[21.38px] px-[30px] py-1.5 lg:py-[16px] w-[150px] lg:w-[195px]'}>Get in touch</button>
            <button className={'rounded-full border-2 bg-transparent border-primaryColor text-primaryColor font-semibold text-[14px] md:text-[18px] lg:text-[21.38px] px-[30px] py-1.5 lg:py-[16px]  w-[150px] lg:w-[195px]'}>View CV</button>
          </div>
          
        {/*  experience */}
          <div className={'flex flex-col items-center gap-[20px] md:gap-[30px] lg:gap-[48px]'}>
            <h2 className={'text-[#C5C5C5] font-semibold text-[14px] md:text-[18px] lg:text-[20px]'}>EXPERIENCE WITH</h2>
            <div className="flex flex-row items-center justify-center gap-3">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
                <defs>
                  <linearGradient id="mygradient" x1="80.86%" x2="19.14%" y1="0%" y2="100%">
                    <stop offset="0%" stop-color="#FF8660"/>
                    <stop offset="100%" stop-color="#9A33FF"/>
                  </linearGradient>
                </defs>
              </svg>
              
              
              <FaHtml5 style={{fill: "url(#mygradient)"}}/>
              
              <FaCss3Alt style={{fill: "url(#mygradient)"}}/>
              <IoLogoJavascript style={{fill: "url(#mygradient)"}}/>
              <FaReact style={{fill: "url(#mygradient)"}}/>
              <SiNextdotjs style={{fill: "url(#mygradient)"}}/>
              <RiGatsbyFill style={{fill: "url(#mygradient)"}}/>
              <FaNodeJs style={{fill: "url(#mygradient)"}}/>
              <FaLaravel style={{fill: "url(#mygradient)"}}/>
            
            
            
            
            </div>
          </div>
        </div>
      </main>
    
    
    </>
  )
}

export default App
