import React from 'react';
import {useGradientTextClass} from "~/hooks/useGradientTextClass.ts";
import ExperienceItem from "~/components/sections/ExperienceItem.tsx";
import shineon_logo from "~/assets/images/shineon-logo.png"
import lanatus_logo from "~/assets/images/lanatus-logo.png"
import westernwells_logo from "~/assets/images/westernwells-logo.png"


export default function ExperienceSection(): React.JSX.Element {
  // hooks
  const sectionHeadrGradientClass = useGradientTextClass({bgGradientStart: 'from-blueGradientStart', bgGradientStop: 'to-blueGradientStop', bgGradientTo: 'bg-gradient-to-b'})
  
  return (
    <div className="flex item-center justify-center py-20 lg:pt-0 lg:pb-25 scroll-mt-[20.18px] lg:scroll-mt-[82.18px]" id={'experience'}>
    
    <div className="flex flex-col w-screen lg:w-[50%]    p-5  justify-center gap-5 lg:gap-[57px]">
      {/*  header */}
      <div className="w-full flex justify-center item-center">
        
        <h1 className={`${sectionHeadrGradientClass} font-extrabold text-[35px] text-center`}>EXPERIENCE</h1>
      </div>
      
      <div className="flex flex-col gap-y-[50px]">
        {experiences.map(experience =>  <ExperienceItem {...experience}/>)}
      </div>
    </div>
    </div>
      );
}



const experiences: Array<{
  title: string;
  description: string;
  organisation: {
    name: string;
    url: string;
    image: string;
  };
  duration: string;
}> = [
  {
    title: 'Full-stack Developer',
    description:"In my role as a Senior Software Engineer at Shine-on, I was instrumental in crafting groundbreaking solutions tailored to elevate Shine-on\'s core search algorithms. Working closely with a diverse and talented team of engineers, I actively contributed to refining search precision and effectiveness, ultimately enhancing user interactions for a global audience.", duration: 'Jun 2022 - Present', organisation: {
      name: 'ShineOn',
      url: 'https://www.shineon.com/',
      image: shineon_logo,}
  },
  {
    title: 'Full-stack Developer',
    description:"During my tenure at Lanatus Systems, I held the position of Full-stack Developer, where I played an integral role in the development and implementation of comprehensive software solutions. Responsible for designing and building robust, scalable applications across both frontend and backend technologies, I contributed to the technical leadership of our multidisciplinary team.", duration: 'Dec 2021 - Mar 2024', organisation: {
      name: 'Lanatus Systems',
      url: 'https://www.linkedin.com/company/lanatus/',
      image: lanatus_logo,}
  },
  {
    title: 'Full-stack Developer',
    description:"At Westerwells, I currently serve as a Web Developer, focusing on designing and implementing dynamic web solutions. I am actively engaged in projects that require building scalable and user-friendly interfaces, utilizing cutting-edge technologies to ensure optimal performance. My role involves collaborating with cross-functional teams to deliver high-quality web applications that meet the diverse needs of our clients.", duration: 'Jan 2018 - Present', organisation: {
      name: 'Weaternwells',
      url: 'https://github.com/Westernwells',
      image: westernwells_logo,}
  },
  
]
