import React from 'react';
import {FaEnvelope, FaGithub, FaLinkedinIn} from "react-icons/fa";


export default function ContactSection(): React.JSX.Element {
  return (
    <div className={'bg-[#191919] flex flex-col items-center'}>
      <div className="flex flex-col py-20 px-5 w-screen lg:w-[50%]">
        <h1 className="text-primaryColor">
          Contact
        </h1>
        
        <p className={' text-[14px] text-secondaryText font-light mt-5 mb-5'}>
          Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing
          and implementing robust, scalable, and innovative web solutions. Adept at leveraging a
          comprehensive skill set encompassing front-end and back-end technologies
        </p>
        
        <ul className={'flex flex-row items-center gap-5 '}>
          <li>
            <a href="mailto:abdulmaliqshola@gmail.com">
          <FaEnvelope className={'text-primaryColor'} />
            </a>
          </li>
             <li>
            <a href="https://github.com/marlstergo">
          <FaGithub className={'text-primaryColor'} />
            </a>
          </li>
             <li>
            <a href="https://www.linkedin.com/in/abdulmaliq-shola-02739b19a">
          <FaLinkedinIn className={'text-primaryColor'} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}


