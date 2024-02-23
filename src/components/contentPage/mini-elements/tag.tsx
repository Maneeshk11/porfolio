import { FC } from "react";

interface TagProps {
    title: string;
}

const Tag:FC<TagProps> = ({title}) => {
    return(
        <div className="flex items-center justify-center border-2 border-white rounded-full py-1 px-2 cursor-pointer">
            <span className="text-sm font-semibold">{title}</span>
        </div>
    );
}

export default Tag;