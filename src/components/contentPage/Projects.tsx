import { useEffect, useState } from "react"
import Tag from "./mini-elements/tag"
import { Project } from "@/utils/types/interface"
import projectsList from "@/utils/data/projects.json"
import ProjectItem from "./mini-elements/ProjectItem"
import { SlArrowUpCircle, SlArrowDownCircle } from "react-icons/sl";

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

            <span className="text-xl">Here is a list of projects I have worked on ...</span>
            <div className="flex flex-row gap-x-2 items-center">
                <Tag title="All" onClick={() => { setCurrProjType("All") }} />
                <Tag title="C++" onClick={() => { setCurrProjType("C++") }} />
                <Tag title="Python" onClick={() => { setCurrProjType("Python") }} />
                <Tag title="Full-stack" onClick={() => { setCurrProjType("Full-stack") }} />
                <Tag title="Crypto" onClick={() => { setCurrProjType("Crypto") }} />
                <Tag title="API" onClick={() => { setCurrProjType("API") }} />
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-2 relative">
                {
                    projects && projects.map((item, index) => {
                        return (
                            <ProjectItem key={index} details={item} />
                        )
                    })
                }
                <div className="flex flex-col gap-y-6 absolute -right-10 top-[calc(50%-2.5rem)]">
                    <SlArrowUpCircle className="w-7 h-7 cursor-pointer" />
                    <SlArrowDownCircle className="w-7 h-7 cursor-pointer" />
                </div>
            </div>

            {/* projects navigate buttons */}
        </div>
    )
}

export default Projects