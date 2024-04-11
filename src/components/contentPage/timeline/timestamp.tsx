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
            <div className={`absolute h-28 ${position === "top" ? "-top-28 " : "top-full justify-end"} left-1.5 flex flex-col border-l px-2 border-y-slate-300`}>
                <span className="text-lg font-semibold">{title}</span>
                <span className="text-xs font-bold">{timeperiod}</span>
                <span className="text-xs font-light">{role}</span>
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