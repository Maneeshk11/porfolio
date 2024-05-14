import LeetcodeItem from "./LeetcodeItem"
import { Suspense, useEffect, useRef, useState } from 'react'

import { Problem } from "@/utils/types/interface";
import { Dialog } from "@headlessui/react";
import { Inter } from "next/font/google"
import LeetcodeMarkdown from "./LeetcodeMarkdown";
import Loader from "../icons/Loader";
import { useScroll, motion, useTransform } from "framer-motion"

const inter = Inter({ subsets: ["latin"] });


const Leetcode = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [problems, setProblems] = useState<Problem[]>([])
    const [title, setTitle] = useState<string>("")
    const [filename, setFilename] = useState<string>("")
    const [mdx, setMdx] = useState<string>("")

    const leetcodeRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        container: leetcodeRef
    })

    const pos = useTransform(scrollYProgress, [0, 1], [0, 40])


    useEffect(() => {
        (async () => {
            const problems = await fetch("https://raw.githubusercontent.com/Maneeshk11/leetcode-solutions/main/problems.json")
                .then(res => res.json())

            setProblems(problems)
        })()
    }, [])

    useEffect(() => {
        if (title !== "") {
            (async () => {
                const mdxfile = await fetch(`https://raw.githubusercontent.com/Maneeshk11/leetcode-solutions/main/solutions/${filename}.mdx`)
                    .then(res => res.text())
                setMdx(mdxfile)
            })()
        }
    }, [title])


    return (
        <div className="flex flex-col gap-y-8">
            <div className="flex w-full flex-row items-center justify-between">
                <span className="text-2xl md:text-3xl lg:text-4xl font-semibold">LeetCode</span>
                <button className="border border-white rounded p-2 text-lg font-bold">Filter</button>
            </div>
            <div className="relative ">
                <div ref={leetcodeRef} className="h-[17rem] overflow-y-scroll projectsDiv">
                    <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                        {
                            problems.map((problem, index) => (
                                <LeetcodeItem key={index} problemType={problem.problemType} title={problem.title} setIsOpen={setIsOpen}
                                    setTitle={setTitle} setFilename={setFilename} filename={problem.filename} />
                            ))
                        }
                    </div>
                </div>
                <div className="absolute top-[calc(50%-2rem)] -right-4 rounded-full w-2 h-16 bg-[#2e2d2d]">
                    <div className="w-full h-full relative">
                        <motion.div className="absolute scroll w-full rounded-full h-6 bg-white"
                            style={{ top: pos }}></motion.div>
                    </div>
                </div>
            </div>
            <Dialog
                open={isOpen}
                onClose={() => {
                    setIsOpen(false)
                }}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <Dialog.Panel className={`${inter.className} max-w-none w-[70rem] prose prose-code:text-[#5cb0f9] prose-a:no-underline prose-a:hover:underline bg-[#1e293b] prose-strong:text-[#e6edf3] prose-a:text-[#4eaafa] prose-slate prose-headings:text-[#e6edf3] prose-h4:font-bold prose-code:before:hidden prose-code:after:hidden text-[#e6edf3] rounded-xl mx-auto h-[70vh] p-14 overflow-scroll relative`}>
                        <Suspense fallback={<Loader />}>
                            <LeetcodeMarkdown mdx={mdx} />
                        </Suspense>
                    </Dialog.Panel>
                </div>
            </Dialog >
        </div >
    )
}
export default Leetcode