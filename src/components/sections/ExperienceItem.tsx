import React from 'react';

interface Props {
  title: string;
  description: string;
  organisation: {
    name: string;
    url: string;
    image: string;
  };
  duration: string;
}

export default function ExperienceItem(props: Props): React.JSX.Element {
  return (
   <div className={'flex flex-col gap-6 '}>
     <div className="flex flex-row item-center justify-between ">
       <div className="flex flex-row items-center gap-1 flex-1">
         <a href={props.organisation.url} target={'_blank'} rel={'noreferrer'} className={''}>
         <img src={props.organisation.image} alt={props.organisation.name} className={'size-[34px] rounded-full'}/>
         </a>
       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:flex-1">
       <div className="flex flex-col">
         <h1 className={'text-primaryColor  font-bold text-[21.74px] leading-normal'}>{props.title}</h1>
         <p className={'text-secondaryText text-[16px] font-medium'}>{props.organisation.name}</p>
       </div>
         <p className={' text-[14px] text-[#8491A0]'}>{props.duration}</p>
       </div>
       </div>
     </div>
   
     <div className={'ml-[38px]'}>
       <p className={' text-[14px] text-[#8491A0]'}>
         {props.description}
       </p>
     </div>
   </div>
  );
}


