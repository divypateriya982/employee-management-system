const TaskListNumbers = ({data}) => {
    return (
        <div className="flex gap-5 justify-between mt-10">
            <div className="w-[45%] rounded-xl bg-teal-600 text-white py-6 px-9">
                <h1 className="text-5xl font-bold">{data.taskNumbers.newTask}</h1>
                <h3 className="text-2xl font-medium mt-2">New Task</h3>
            </div>
            <div className="w-[45%] rounded-xl bg-red-900 text-white py-6 px-9">
                <h1 className="text-5xl font-bold">{data.taskNumbers.completed}</h1>
                <h3 className="text-2xl font-medium mt-2">Completed</h3>
            </div>
            <div className="w-[45%] rounded-xl bg-emerald-700 text-white py-6 px-9">
                <h1 className="text-5xl font-bold">{data.taskNumbers.active}</h1>
                <h3 className="text-2xl font-medium mt-2">Accepted</h3>
            </div>
            <div className="w-[45%] rounded-xl bg-yellow-700 text-white py-6 px-9">
                <h1 className="text-5xl font-bold">{data.taskNumbers.failed}</h1>
                <h3 className="text-2xl font-medium mt-2">Failed</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers

// bg-teal-600 -> #5F9EA0
// bg-red-900 -> #8B4444
// bg-emerald-700 -> #8FBC8F
// bg-yellow-700 -> #B8860B