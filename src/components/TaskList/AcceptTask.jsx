const AcceptTask = ({data}) => {
    return (
        <div className="h-full w-75 bg-slate-700 rounded-2xl shrink-0 py-10 px-8 flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold px-3 py-1 bg-red-400 rounded-lg">{data.category}</h2>
                    <h4 className="text-sm text-white font-semibold">{data.date}</h4>
                </div>
                <h1 className="text-2xl font-bold text-white mt-4">{data.title}</h1>
                <p className="text-[2rem] mt-2 text-white/60 leading-tight">{data.description}</p>
            </div>
            <div className="flex justify-between items-center">
                <button className="text-sm rounded px-1 py-1 bg-green-600 text-white font-medium cursor-pointer active:scale-97 transition-all duration-200 ease-in">Mark as Completed</button>
                <button className="text-sm rounded px-1 py-1 bg-red-700 text-white font-medium cursor-pointer active:scale-97 transition-all duration-200 ease-in">Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask