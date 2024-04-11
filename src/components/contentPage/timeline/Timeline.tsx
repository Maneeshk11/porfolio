import Timestamp from "./timestamp";


const Timeline = () => {
    return (
        <div className="grid grid-rows-3 grid-cols-5 w-full py-4 px-32 gap-y-3 gap-x-2">
            <Timestamp role="Bachelor in Computer Science" timeperiod="Oct 2020 - Jun 2024" position="top" title="Mahindra University" className="row-start-2 row-span-1 col-span-5 bg-green-600" /> {/*MU */}
            <Timestamp role="CISE Senior Certificate Program" timeperiod="Jan 2024 - May 2024" position="bottom" title="University of Florida" className="row-start-3 row-span-1 col-start-5 col-span-1 bg-orange-500"/> {/* uf*/}
            <Timestamp role="Software Developer Intern" timeperiod="May 2023 - Dec 2023" position="top" title="Catalog" className="row-start-1 row-span-1 col-end-5 bg-purple-500 w-2/3 ml-[33%]"/> {/*catalog */}
        </div>
    )
}

export default Timeline;