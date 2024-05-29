import AboutSection from "components/AboutSection";
import CustomCursor from "components/CustomCursor";
import EmailSection from "components/EmailSection";
import Experience from "components/Experience";

import ProjectsSection from "components/ProjectsSection";
import Service from "components/Service";
import Skills from "components/Skills";

import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";

import  MyFooter from "components/MyFooter";




export default function Page() {
    return (
        <>
            <CustomCursor />
            <main className="flex min-h-screen flex-col bg-white ">
                <Navbar />
                <div className="bg-[#F5DAD2]">
                    <HeroSection />
                </div>
                <div className="container mt-20 md:-mt-16 mx-auto px-20">
                    <Skills />
                    <AboutSection />
                    <Experience />
                    <Service />
                    <ProjectsSection />
                    <EmailSection /> 
                </div>
                <MyFooter/>
            </main>
        </>
    );
}
