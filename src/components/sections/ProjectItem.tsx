import ArrowTopRightIcon from "~/components/svgs/ArrowTopRightIcon.tsx";

interface Props{
  title: string;
  description?: string;
  image: string;
  url: string;
  tabIndex?: number
  
}

function ProjectItem(props: Props) {
  return (
    <div tabIndex={props.tabIndex} className={' flex-none h-[100%] w-full  flex-col rounded-[18px] bg-cardColor md:w-[390px] md:h-[301px] overflow-hidden'} role="listitem"
         aria-label={`${props.title} project`}>
      <div className="flex relative  h-[75%] w-full ">
      <img src={props.image} alt="netlix-project" className={'h-full object-fill'}/>
      </div>
      
      <a  className="flex flex-row justify-between items-center px-[23px]  pt-3 pb-[14px]" target={'_blank'} href={props.url} rel={'noreferrer'}>
      <div className="flex flex-col">
        <span className={'text-secondaryText font-extrabold text-[10px] leading-[19px]'}>CLICK HERE TO VISIT</span>
    <h1 className={'font-extrabold text-primaryColor   leading-[20px] text-[20px]'}>{props.title}</h1>
      </div>
        <ArrowTopRightIcon />
      </a>
    </div>
  );
}

export default ProjectItem;
