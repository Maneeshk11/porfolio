import LeetcodeItem from "./LeetcodeItem"
import { useEffect, useState } from 'react'

import { Problem } from "@/utils/types/interface";
import { Dialog } from "@headlessui/react";
import { Inter } from "next/font/google"
import LeetcodeMarkdown from "./LeetcodeMarkdown";

const inter = Inter({ subsets: ["latin"] });


const Leetcode = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [problems, setProblems] = useState<Problem[]>([])
    const [title, setTitle] = useState<string>("")
    const [filename, setFilename] = useState<string>("")
    const [mdx, setMdx] = useState<string>("")


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
                <span className="text-4xl font-semibold">LeetCode</span>
                <button className="border border-white rounded p-2 text-lg font-bold">Filter</button>
            </div>
            <div className="grid grid-flow-row grid-cols-4 gap-3">
                {
                    problems.map((problem, index) => (
                        <LeetcodeItem key={index} problemType={problem.problemType} title={problem.title} setIsOpen={setIsOpen}
                            setTitle={setTitle} setFilename={setFilename} filename={problem.filename} />
                    ))
                }
            </div>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <Dialog.Panel className={`${inter.className} max-w-none w-[70rem] prose prose-code:text-[#e6edf3] bg-[#1e293b] prose-slate prose-headings:text-[#e6edf3] prose-h4:font-bold prose-code:before:hidden prose-code:after:hidden text-[#e6edf3] rounded-xl mx-auto h-[70vh] p-14 overflow-scroll relative`}>
                        <LeetcodeMarkdown mdx={mdx} />
                    </Dialog.Panel>
                </div>
            </Dialog >
        </div >
    )
}
export default Leetcode