

const InputComponent = ({ title }: { title: string }) => {
    return (

        <label
            htmlFor="UserEmail"
            className="relative block overflow-hidden rounded-md bg-[#1d1d1d] px-3 pt-3 shadow-sm focus-within:ring-1 focus-within:ring-slate-600 w-72"
        >
            <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
            <span
                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
                {title}
            </span>
        </label>
    )
}

export default InputComponent