import React from 'react';
import {useGradientTextClass} from "~/hooks/useGradientTextClass.ts";
import ProjectItem from "~/components/sections/ProjectItem.tsx";


export default function ProjectsSection(): React.JSX.Element {
  const sectionHeadrGradientClass = useGradientTextClass({bgGradientStart: 'from-orangeGradientStart', bgGradientStop: 'to-orangeGradientStop', bgGradientTo: 'bg-gradient-to-b'})
  
  const midPoint = Math.ceil(projects.length/2);
  const firstHalfItems = projects.slice(0, midPoint);
  const secondHalfItems = projects.slice(midPoint);
  
  // render
  const renderItems = (itemsList: typeof projects, offset: number = 0) => (
    itemsList.map(( project, i) => (
      <>

        <ProjectItem key={`${project.title}-${project.url}`} tabIndex={i + 1 + offset} {...project}/>
      </>
    ))
  );
  
  
  return (
    <div id={'projects'} className={' lg:mb-20 scroll-mt-[20.18px] lg:scroll-mt-[82.18px]'}>
 
    <div className="flex flex-col  w-screen   p-5 overflow-y-hidden justify-center gap-5 lg:hidden">
      {/*  header */}
      <div className="w-full flex justify-center item-center">
        
        <h1 className={`${sectionHeadrGradientClass} font-extrabold text-[35px] text-center`}>PROJECTS</h1>
      </div>
      
      

      {/*<div className="flex px-20 lg:w-2/3  items-center justify-center">*/}
      
      {/*<div className="flex flex-col overflow-x-scroll projectsScrollbar gap-y-10">*/}
      <div className="w-screen overflow-x-scroll">
        
        <div className="flex  flex-row mb-4 gap-10 ">
        {/*<ProjectItem {...projects[0]} />*/}
          {renderItems(firstHalfItems)}
        </div>
        <div className="flex flex-row gap-10">
        {/*<ProjectItem {...projects[0]} />*/}
          {renderItems(secondHalfItems, midPoint)}
        {/*</div>*/}
      {/*</div>*/}
      </div>
      </div>
    
    </div>
    
    <div className="hidden lg:flex flex-col w-screen   p-5 overflow-y-hidden justify-center gap-5">
      {/*  header */}
      <div className="w-full flex justify-center item-center">
        
        <h1 className={`${sectionHeadrGradientClass} font-extrabold text-[35px] text-center`}>PROJECTS</h1>
      </div>
      
      

      <div className="flex px-20 lg:w-2/3 self-center items-center justify-center">
      
      <div className="flex flex-col overflow-x-scroll projectsScrollbar gap-y-10">
        <div className="flex flex-1 flex-row mb-4 gap-10">
          {renderItems(firstHalfItems)}
        </div>
        <div className="flex flex-row gap-10">
          {renderItems(secondHalfItems, midPoint)}
        </div>
      </div>
      </div>
    
    </div>
    
    </div>
  )
    ;
}


export const projects: Array<{
  title: string;
  description?: string;
  image: string;
  url: string;
  
}> = [
  {
    title: 'Netflix',
    image: '../../../public/images/netflix-page.png',
    url: 'https://www.netflix.com',
    description: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    
  },
  {
    title: 'Spotify',
    image: '../../../public/images/spotify-page.png',
    url: 'https://www.spotify.com',
    description: 'Spotify is a Swedish music streaming service.',
    
  },
  {
    title: 'Youtube',
    image: '../../../public/images/youtube-page.png',
    url: 'https://www.youtube.com',
    description: 'YouTube is an American online video sharing and social media platform.'
    
  },
  {
    title: 'Github',
    image: '../../../public/images/github-page.png',
    url: 'https://github.com/marlstergo',
    description: 'GitHub is a web-based hosting service for Git version control using the distributed version control system, Git.',
    
  },
  {
    title: 'Twitter',
    image: '../../../public/images/twitter-page.png',
    url: 'https://www.twitter.com',
    description: 'Twitter is an American microblogging and social networking service on the Internet.',
    
  },
  {
    title: 'Facebook',
    image: '../../../public/images/facebook-page.png',
    url: 'https://www.facebook.com',
    description: 'Facebook is an American online social media and social networking service based in Menlo Park, California.',
    
  },
  {
    title: 'Instagram',
    image: '../../../public/images/instagram-page.png',
    url: 'https://www.instagram.com',
    description: 'Instagram is a photo-sharing social networking service on the Internet.',
    
  },
  {
    title: 'Linkedin',
    image: '../../../public/images/linkedin-page.png',
    url: 'https://www.linkedin.com/in/abdulmaliq-shola-02739b19a/',
    description: 'LinkedIn is an American professional social media platform and communications service.',
  },
  {
    title: 'Amazon',
    image: '../../../public/images/amazon-page.png',
    url: 'https://www.amazon.com',
    description: 'Amazon.com, Inc. is an American multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
  },
  {
    title: 'Google',
    image: '../../../public/images/google-page.png',
    url: 'https://www.google.com',
    description: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products.',
  },
  {
    title: 'Tiktok',
    image: '../../../public/images/tiktok-page.png',
    url: 'https://www.tiktok.com',
    description: 'TikTok is a Chinese video sharing and social media platform.',
  },
  {
    title: 'Snapchat',
    image: '../../../public/images/snapchat-page.png',
    url: 'https://www.snapchat.com',
    description: 'Snap Inc. is an American social networking service and online social media platform.',
  },
 
]
