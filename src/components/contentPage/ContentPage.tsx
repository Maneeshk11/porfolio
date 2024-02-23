import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"


interface ContentPageProps {
    pageLoc: string;
}


const ContentPage:FC<ContentPageProps> = ({pageLoc})  => {
    
    return (
        <div style={{ left: pageLoc }} className={`${pageLoc} top-20 flex flex-row items-center w-screen transform 
        absolute duration-300 ease-in`}>
            
            <Home />
            <About />
            <Projects />
            <Contact />

        </div>
    )
}

export default ContentPage