import React, {useState} from 'react';
import GridElementsIcon from "~/components/svgs/GridElementsIcon.tsx";
import {cn} from "~/utils/cn.ts";
import logo from '~/assets/images/logo-img.png'


export default function Navbar(): React.JSX.Element {
  // hooks
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  
  // helpers
  const toggleShowMobileMenu = () => setShowMobileMenu(!showMobileMenu)
  
  // renders
  
  return (
    <nav className={' fixed w-screen bg-headerBackgroundColor  h-[82.18px] z-30'}>
      <div className={'relative flex flex-row items-center justify-between px-5 lg:px-60 h-full z-20 bg-headerBackgroundColor'}>
        {/* logo */}
        <a href="https://vitejs.dev" target="_blank">
          <div>
            <img src={logo} alt="logo"
                 className={'logo-img  relative h-10 w-10 bg-blend-multiply bg-transparent fill-white'}/>
          </div>
        </a>
        
        {/* nav links */}
        
        <div className={'hidden md:block'}>
          <ul className={'inline-flex space-x-10'}>
            <li><a href="#home" className={'text-primaryColor font-semibold text-[15px]'}>Home</a></li>
            <li><a href="#projects" className={'text-primaryColor font-semibold text-[15px]'}>Projects</a></li>
            <li><a href="#experience" className={'text-primaryColor font-semibold text-[15px]'}>Experience</a></li>
            <li><a href="#contact" className={'text-primaryColor font-semibold text-[15px]'}>Contact</a></li>
          </ul>
        </div>
        
        <div/>
        
        
        {/* mobile display */}
        
        <div className={'block md:hidden relative '}>
          <div className={'md:hidden'}>
            <button type={"button"} onClick={toggleShowMobileMenu}>
              <GridElementsIcon/>
            </button>
          </div>
          
          {/*  mobile nav links */}
        
        </div>
      </div>
        <div className={cn(" block md:hidden absolute w-screen right-0 top-[82.18px] z-10 bg-headerBackgroundColor transition-all duration-500 ", {
          // 'hidden': !showMobileMenu,
          // 'top-[80.18px]': showMobileMenu
          'slide-in-from-top': showMobileMenu,
          'slide-out-to-top': !showMobileMenu,
          // 'hover:-translate-y-[400px]':true
          '-translate-y-[400px]': !showMobileMenu,
          '-translate-y-[0px]': showMobileMenu
        })}>
          
          <ul className={'flex flex-col space-y-10 p-5'}>
            <li><a href="#home" className={'text-primaryColor font-semibold text-[15px]'} onClick={toggleShowMobileMenu}>Home</a></li>
            <li><a href="#projects" className={'text-primaryColor font-semibold text-[15px]'} onClick={toggleShowMobileMenu}>Projects</a></li>
            <li><a href="#experience" className={'text-primaryColor font-semibold text-[15px]'} onClick={toggleShowMobileMenu}>Experience</a></li>
            <li><a href="#contact" className={'text-primaryColor font-semibold text-[15px]'} onClick={toggleShowMobileMenu}>Contact</a></li>
          </ul>
        </div>
    
    </nav>
  );
}

