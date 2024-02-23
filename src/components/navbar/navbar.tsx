import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaIdCard } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import Link from "next/link";

interface NavProps {
    setOpen: Dispatch<SetStateAction<boolean>>
    setCurrentPage: Dispatch<SetStateAction<number>>
}

const Navbar:FC<NavProps> = ({setOpen, setCurrentPage}) => {


    const NavItem: FC<{ title?: string, route: string, children?: ReactNode, setPage?: () => void }> = ({ title, route, children, setPage }) => {
        return (
            <Link href={route} onClick={setPage}>
                {children}
                {title && <span className={`font-medium text-base cursor-pointer`}>{title}</span>}
            </Link>
        )
    }

    return (
        <div className="px-5 py-2 flex flex-row items-center justify-between relative overflow-x-hidden overflow-y-auto">
            <span className=" bg-logo-img bg-cover text-transparent bg-clip-text font-black text-[38px] cursor-default">MK</span>
            <span className="flex-grow hidden lg:block"></span>
            <div className="hidden sm:flex flex-row gap-x-5 lg:w-1/3 justify-center">
                <NavItem route="https://github.com/Maneeshk11">
                    <FaGithub className="w-6 h-6 cursor-pointer" />
                </NavItem>
                <NavItem route="mailto: maneesh.kolli@gmail.com">
                    <MdOutlineEmail className="w-6 h-6 cursor-pointer" />
                </NavItem>
                <NavItem route="https://www.linkedin.com/in/maneeshkolli/">
                    <FaLinkedin className="w-6 h-6 cursor-pointer" />
                </NavItem>
                <NavItem route="">
                    <FaIdCard className="w-6 h-6 cursor-pointer" />
                </NavItem>
            </div>

            <div className={`hidden lg:flex flex-col lg:flex-row md:gap-x-3 lg:gap-x-5 lg:w-1/3 justify-end lg:h-auto`}>
                <NavItem title="Home" route="#" setPage={()=>{setCurrentPage(1)}} />
                <NavItem title="About" route="#" setPage={()=>{setCurrentPage(2)}} />
                <NavItem title="Projects" route="#" setPage={()=>{setCurrentPage(3)}} />
                <NavItem title="Contact" route="#" setPage={()=>{setCurrentPage(4)}} />
            </div>

            <RxHamburgerMenu className="w-8 h-8 lg:hidden cursor-pointer" onClick={()=>{setOpen(true)}}/>

        </div>
    )
}

export default Navbar