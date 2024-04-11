import Timeline from "./timeline/Timeline"


const About = () => {
    return (
        <div id="about" className="flex flex-col items-center gap-y-6 w-screen flex-shrink-0 mb-auto mt-24">
            <div className="mb-48 flex flex-col items-center gap-y-6 ">
                <span className="font-semibold text-5xl">Hi, I&apos;m <span className=
                    "font-semibold text-5xl bg-gradient-to-r from-[#ffcbf2] to-[#deaaff] text-transparent bg-clip-text"> Maneesh</span></span>

                <span className="w-4/5 sm:w-fit mx-auto text-wrap sm:text-xl text-center">I am currently an exchange-student at University of Florida. Here&apos;s an <br /> overview of what I&apos;ve been upto in the past 5 years.</span>
            </div>
            <Timeline />
        </div>
    )
}

export default About