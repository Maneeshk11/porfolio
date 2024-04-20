import { useState } from "react"

const TextArea = () => {

    const [message, setMessage] = useState<string>('')

    const ClearText = () => {
        setMessage('')
    }

    return (
        <div>
            <div
                className="overflow-hidden rounded-lg bg-[#1d1d1d] shadow-sm focus-within:ring-1 focus-within:ring-slate-600 w-72"
            >
                <textarea
                    id="messageBox"
                    className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm bg-[#1d1d1d] dark:text-white placeholder:text-gray-300"
                    rows={4}
                    placeholder="Type message here ..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <div className="flex items-center justify-end gap-2 p-3 bg-[#1d1d1d] w-full">
                    <button
                        type="button"
                        className="rounded bg-indigo-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-800"
                        onClick={ClearText}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>

    )
}

export default TextArea