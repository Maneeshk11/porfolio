import Link from "next/link"
import InputComponent from "../inputcomp"
import TextArea from "../textarea"
import { useState } from "react"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [name, setName] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const sendMessage = () => toast.success('Message Sent Sucessfully', {
        className: "toast-position",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    return (
        <div id="contact" className="w-screen flex flex-col items-center flex-shrink-0 transform duration-300 ease-in gap-y-8 mb-auto mt-24">
            <div className="flex flex-col items-center">
                <span className="font-semibold text-5xl bg-gradient-to-r from-[#ffcbf2] to-[#deaaff] text-transparent bg-clip-text">Contact <span className="text-white"> me!</span></span>
                <span className="text-xl font-medium pt-1">Leave a message and let&apos;s chat!</span>
            </div>
            <div className="flex flex-col items-center gap-y-3">
                <InputComponent title="Name" />
                <InputComponent title="Company" />
                <InputComponent title="Email" />
                <TextArea />
            </div>

            <Link
                className="inline-block rounded bg-indigo-700 px-8 py-2 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
                href="#"
                onClick={sendMessage}
            >
                Send
            </Link>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </div>
    )
}

export default Contact

