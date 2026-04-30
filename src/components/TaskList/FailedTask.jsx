const FailedTask = ({data}) => {
    return (
        <div className="h-full w-75 bg-rose-900 rounded-2xl shrink-0 py-10 px-8 flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold px-3 py-1 bg-red-400 rounded-lg">{data.category}</h2>
                    <h4 className="text-sm text-white font-semibold">{data.date}</h4>
                </div>
                <h1 className="text-2xl font-bold text-white mt-2">{data.title}</h1>
                <p className="text-[2rem] mt-2 text-white/70 leading-tight">{data.description}</p>
            </div>
                <button className="px-3 py-1 text-sm font-medium rounded text-white bg-blue-400 cursor-pointer active:scale-98 transition-all duration-200 ease-in">Complete</button>
        </div>
    )
}

export default FailedTask