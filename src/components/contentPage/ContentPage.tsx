import { FC } from "react";
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Blogs from "./Blogs";


interface ContentPageProps {
    pageLoc: string;
}


const ContentPage: FC<ContentPageProps> = ({ pageLoc }) => {

    return (
        <div style={{ left: pageLoc }} className={`${pageLoc} top-20 flex flex-row items-center w-screen transform 
        absolute duration-300 ease-in`}>
            <About />
            <Projects />
            <Blogs />
            <Contact />
        </div>
    )
}

export default ContentPage