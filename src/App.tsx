import Navbar from "~/components/general/Navbar.tsx";
import HeroSection from "~/components/sections/HeroSection.tsx";
import ProjectsSection from "~/components/sections/ProjectsSection.tsx";
import ExperienceSection from "~/components/sections/ExperienceSection.tsx";
import ContactSection from "~/components/sections/ContactSection.tsx";


function App() {
  return (
    <>
     <Navbar />
      <main className={'pt-[82.18px]'}>
        
        
        {/*   Hero */}
        <HeroSection/>
        
        
        {/*  Projects */}
        <ProjectsSection/>
        
        {/*  Experience*/}
        <ExperienceSection/>
        
        {/*  Contact */}
        <ContactSection/>
      
      </main>
    
    
    </>
  )
}

export default App
