import { Dialog } from "@headlessui/react";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import Threesum from "../../utils/data/markdowns/3sum.mdx"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

interface LeetcodeSolutionProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    title: string;
}

const LeetcodeSolution:FC<LeetcodeSolutionProps> = ({isOpen, setIsOpen, title}) => {

    useEffect(() => {
        
    }, [])

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel className={`${inter.className} max-w-none w-[70rem] prose prose-code:text-[#e6edf3] bg-[#1e293b] prose-slate prose-headings:text-[#e6edf3] prose-h4:font-bold prose-code:before:hidden prose-code:after:hidden text-[#e6edf3] rounded-xl mx-auto h-[70vh] p-14 overflow-scroll relative`}>
                    <Threesum />
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

export default LeetcodeSolution;