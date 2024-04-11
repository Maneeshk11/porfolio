import { TagColors } from "@/utils/types/interface";
import { FC } from "react";

interface TagProps {
    title: string;
    disabled?: boolean;
    onClick?: () => void;
    border?: boolean;
}

const Tag: FC<TagProps> = ({ title, disabled, onClick, border }) => {
    return (
        <div style={{ backgroundColor: TagColors[title as keyof typeof TagColors] }}
            className={`flex items-center justify-center rounded-full py-1 px-2 ${disabled ? "" : "cursor-pointer"} ${border && "border-2 border-white"}`}
            onClick={onClick}>
            <span className={`${disabled ? "text-xs" : "text-xs sm:text-sm"} font-bold`}>{title}</span>
        </div>
    );
}

export default Tag;