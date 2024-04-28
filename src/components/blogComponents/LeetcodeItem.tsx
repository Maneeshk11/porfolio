import { Dispatch, FC, SetStateAction, useState } from "react";

interface LeetcodeItemProps {
    title: string;
    filename: string;
    problemType: string;
    setIsOpen:  Dispatch<SetStateAction<boolean>>;
    setTitle: Dispatch<SetStateAction<string>>;
    setFilename: Dispatch<SetStateAction<string>>;
}

const LeetcodeItem: FC<LeetcodeItemProps> = ({ title, problemType, setIsOpen, setTitle, setFilename, filename }) => {

    return (
        <div className="h-10 w-36 sm:w-40 md:w-56 text-sm bg-[#1d1d1d] rounded overflow-hidden p-2 flex items-center cursor-pointer gap-x-3 text-nowrap"
            onClick={() => { 
                setIsOpen(true);
                setTitle(title);
                setFilename(filename);
            }}>
            <div className={`w-4 aspect-square rounded-full ${problemType.toLowerCase() === "easy" ? "bg-[#00b8a3]" : problemType.toLowerCase()  === "medium" ? "bg-[#ffc01e]" : "bg-[#fe365e]"} `}></div>
            <span>{title}</span>
        </div>
    )
}

export default LeetcodeItem