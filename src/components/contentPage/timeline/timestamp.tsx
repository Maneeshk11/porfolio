import { FC } from "react";


interface TimestampProps {
    className?: string;
    title: string;
    position?: string;
    timeperiod: string;
    role: string;
}

const Timestamp:FC<TimestampProps> = ({className, title, position, timeperiod, role}) => {
    const Tag = ({position, title, timeperiod, role} : {position?:string, title: string, 
        timeperiod:string, role:string }) => {
        return (
            <div className={`absolute h-28 ${position === "top" ? "bottom-full" : "top-full justify-end"} left-1.5 flex flex-col border-l px-2 border-y-slate-300
            transform duration-100 hover:h-40 cursor-pointer`}>
                <span className="lg:text-base text-xs font-semibold">{title}</span>
                <span className="lg:text-xs text-[10px] font-medium">{timeperiod}</span>
                <span className="lg:text-xs text-[10px] font-light">{role}</span>
            </div>
        )
    }
    return (
        <div className={`relative h-5 rounded-full ${className}`}>
            <Tag role={role} timeperiod={timeperiod} position={position} title={title}/>
        </div>
    )
}

export default Timestamp;