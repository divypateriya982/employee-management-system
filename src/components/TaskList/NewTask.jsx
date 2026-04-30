const NewTask = ({data}) => {
    return (
        <div className="h-full w-75 bg-emerald-900 rounded-2xl shrink-0 py-10 px-8 flex flex-col justify-between items-baseline-last">
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold px-3 py-1 bg-red-400 rounded-lg">{data.category}</h2>
                    <h4 className="text-sm text-white font-semibold">{data.date}</h4>
                </div>
                <h1 className="text-2xl font-bold text-white mt-2">{data.title}</h1>
                <p className="text-[1rem] mt-2 text-white/95">{data.description}</p>
            </div>
            <button className="mt-5 px-3 py-1 text-sm font-medium rounded text-white bg-yellow-600 cursor-pointer active:scale-97 transition-all duration-200 ease-in">Accept Task</button>
        </div>
    )
}

export default NewTask