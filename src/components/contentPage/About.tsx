import Timeline from "./timeline/Timeline"


const About = () => {
    return (
        <div id="about" className="flex flex-col items-center gap-y-6 w-screen flex-shrink-0 mb-auto mt-24">
            <div className="mb-48 flex flex-col items-center gap-y-6 animate-drop-in">
                <span className="font-semibold text-5xl">Hi, I&apos;m <span className=
                    "font-semibold text-5xl bg-gradient-to-r from-[#ffcbf2] to-[#deaaff] text-transparent bg-clip-text"> Maneesh</span></span>

                <span className="w-4/5 sm:w-fit mx-auto text-wrap sm:text-xl text-center">I am a graduate student @ <span className="p-1 font-medium rounded-sm text-white bg-[#57068b]">NYU</span> I am currently seeking <br /> SDE/SWE internship opportunities for the summer of 2025.</span>
            </div>
            <Timeline />
        </div>
    )
}

export default About