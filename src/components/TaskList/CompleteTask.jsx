const CompletedTask = ({data}) => {
    return (
        <div className="h-full w-75 bg-yellow-700 rounded-2xl shrink-0 py-10 px-8 flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold px-3 py-1 bg-red-400 rounded-lg">{data.category}</h2>
                    <h4 className="text-sm text-white font-semibold">{data.date}</h4>
                </div>
                <h1 className="text-2xl font-bold text-white mt-4">{data.title}</h1>
                <p className="text-[2rem] mt-2 text-white/70 leading-tight">{data.description}</p>
            </div>
            <button className="px-3 py-1 text-sm font-medium text-white bg-teal-600 cursor-pointer active:scale-98 transition-all duration-200 ease-in rounded">Complete</button>
        </div>
    )
}

export default CompletedTask