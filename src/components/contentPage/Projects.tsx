import { useEffect, useRef, useState } from "react"
import Tag from "./mini-elements/tag"
import { Project } from "@/utils/types/interface"
import projectsList from "@/utils/data/projects.json"
import ProjectItem from "./mini-elements/ProjectItem"

const Projects = () => {

    const [currProjType, setCurrProjType] = useState<string>("All")
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        if (currProjType === "All") {
            setProjects(projectsList)
        } else {
            setProjects(projectsList.filter(item => item.tags.includes(currProjType)))
        }

    }, [currProjType])
    

    return (
        <div id="projects" className="flex flex-col items-center gap-y-6 pt-8 w-screen flex-shrink-0">
            <span className="font-semibold text-5xl">My <span className=
                "font-semibold text-5xl bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text"> projects</span></span>

            <span className="w-4/5 sm:w-fit mx-auto text-wrap sm:text-xl text-center">Here is a list of several projects I have worked on ...</span>
            <div className=" w-3/5 mx-auto sm:w-fit flex flex-row justify-center flex-wrap gap-x-2 gap-y-3 items-center">
                <Tag title="All" onClick={() => { setCurrProjType("All") }} />
                <Tag title="C++" onClick={() => { setCurrProjType("C++") }} />
                <Tag title="Python" onClick={() => { setCurrProjType("Python") }} />
                <Tag title="Full-stack" onClick={() => { setCurrProjType("Full-stack") }} />
                <Tag title="Crypto" onClick={() => { setCurrProjType("Crypto") }} />
                <Tag title="Mini-Projects" onClick={() => { setCurrProjType("Mini-Projects") }} />
            </div>

            <div className="px-8 relative">
                <div className="projectsDiv h-[40rem] grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-2 overflow-y-scroll scroll">
                    {
                        projects && projects.map((item, index) => {
                            return (
                                <ProjectItem key={index} details={item} />
                            )
                        })
                    }
                </div>
                <div className="absolute top-[calc(50%-2rem)] right-1 rounded-full w-2 h-16 bg-[#2e2d2d]">
                    <div className="scroll w-full rounded-full h-6 bg-white"></div>
                </div>

            </div>

            {/* projects navigate buttons */}
        </div>
    )
}

export default Projects