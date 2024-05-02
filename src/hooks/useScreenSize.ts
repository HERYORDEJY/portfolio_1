import {useEffect, useState} from 'react';

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return {...screenSize, isSm: screenSize.width <= 640, isMd: screenSize.width <= 768, isLg: screenSize.width <= 1024, isXl: screenSize.width <= 1280, is2xl: screenSize.width <= 1536, is3xl: screenSize.width <= 1920};
};

