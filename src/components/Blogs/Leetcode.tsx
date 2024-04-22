import { useEffect } from "react"
// import { gql, useQuery } from '@apollo/client';


const LeetcodeComp = () => {


    return (
        <div className="w-full px-20 flex flex-col gap-y-6">
            <span className="font-semibold text-3xl">Leetcode</span>
            <div className="w-full flex flex-row  gap-3 flex-wrap">
                <div className="h-10 w-60 bg-[#2e2d2d] rounded cursor-pointer"></div>
                <div className="h-10 w-60 bg-[#2e2d2d] rounded cursor-pointer"></div>
            </div>
        </div>
    )
}

export default LeetcodeComp