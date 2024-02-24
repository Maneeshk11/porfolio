import { Project } from "@/utils/types/interface"
import { FC } from "react"
import Tag from "./tag"
import Link from "next/link"

interface ProjectItemProps {
    details: Project
}

const ProjectItem: FC<ProjectItemProps> = ({ details }) => {
    return (
        <div className="w-72 aspect-[10/11] flex items-center justify-center">
            <div className="w-[17rem] aspect-[10/11] bg-[#1f1f1f] rounded-3xl overflow-hidden cursor-pointer hover:w-full transform duration-100 ease-in"
            onClick={() => {window.open(`${details.link}`, '_blank')}}>
                <div className={`h-2/5 w-full`} style={{ backgroundImage: `url(${details.image})`, backgroundSize: 'cover' }}>
                </div>
                <div className="h-3/2 w-full py-2 px-3 flex flex-col gap-y-[6px]">
                    <span className="text-white font-semibold">{details.title}</span>
                    <div className="flex flex-row gap-x-2">
                        {
                            details.tags.map((tag, index) => {
                                return (
                                    <Tag title={tag} key={index} disabled={true} />
                                )
                            })
                        }
                    </div>
                    <span className="text-sm text-gray-400">{details.description}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem