import Tag from "./mini-elements/tag"

const Projects = () => {
    return (
        <div id="projects" className="flex flex-col items-center gap-y-6 pt-8 w-screen h-96 flex-shrink-0 transform duration-300 ease-in">
            <span className="font-bold text-5xl">My <span className=
            "font-semibold text-5xl bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text"> Projects</span></span>

            <span className="text-xl">Here is a list of projects I have worked on ...</span>
            <div className="flex flex-row gap-x-2 items-center">
                <Tag title="All"/>
                <Tag title="C++" />
                <Tag title="Python" />
                <Tag title="Full-stack" />
                <Tag title="Crypto" />
                <Tag title="API" />
            </div>
        </div>
    )
}

export default Projects