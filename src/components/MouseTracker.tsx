import React, { useEffect, useRef } from "react";

const MouseTracker = () => {

    const cursorRef = useRef<HTMLDivElement>(null);

    const useMousePosition = () => {
        const [
            mousePosition,
            setMousePosition
        ] = React.useState({ x: null, y: null });

        React.useEffect(() => {
            const updateMousePosition = (ev: any) => {
                setMousePosition({ x: ev.clientX, y: ev.clientY });
            };

            window.addEventListener('mousemove', updateMousePosition);

            return () => {
                window.removeEventListener('mousemove', updateMousePosition);
            };
        }, []);

        return mousePosition;
    };

    const mousePosition = useMousePosition();

    return (
        <div ref={cursorRef} style={{
            top: `${mousePosition.y ? mousePosition.y-40 : mousePosition.y}px`,
            left: `${mousePosition.x ? mousePosition.x-40 : mousePosition.x}px`,
        }} className="transition duration-100 ease-in absolute w-20 aspect-square rounded-full border-[#c6c6c690] border-2 flex items-center justify-center">
            {/* <div className="w-2 aspect-square bg-[#c6c6c690] rounded-full"></div> */}
        </div>
    )
}

export default MouseTracker