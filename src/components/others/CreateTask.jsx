const CreateTask = () => {
    return (
        <div className="mt-5 bg-[#1c1c1c] rounded p-5">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="w-full flex justify-between items-start flex-wrap">
                <div className="w-1/2">
                    <div>
                        <h3 className="text-gray-300 text-lg mb-1">Task title</h3>
                        <input className="py-1 px-2 w-4/5 rounded bg-transparent border-2 border-gray-400 outline-none text-white mb-4" type="text" placeholder="Make a UI design" />
                    </div>
                    <div>
                        <h3 className="text-gray-300 text-lg mb-1">Date</h3>
                        <input className="border-2 border-gray-400 rounded outline-none w-4/5 py-1 px-2 bg-transparent text-white mb-4 scheme-light [&::-webkit-calendar-picker-indicator]:invert" type="date" />
                    </div>
                    <div>
                        <h3 className="text-gray-300 text-lg mb-1">Assign to</h3>
                        <input className="w-4/5 bg-transparent px-2 py-1 text-white outline-none border-2 border-gray-400 mb-4 rounded" type="text" placeholder="employee name" />
                    </div>
                    <div>
                        <h3 className="text-gray-300 text-lg mb-1">Category</h3>
                        <input className="w-4/5 px-2 py-1 outline-none text-white border-2 border-gray-400 rounded bg-transparent" type="text" placeholder="design, dev, etc" />
                    </div>
                </div>
                <div className="w-2/5 flex flex-col items-start">
                    <h3 className="text-gray-300 text-lg mb-1">Description</h3>
                    <textarea className="w-full h-55 border-2 border-gray-400 text-white rounded outline-none px-4 py-3 mb-5" name="" id=""></textarea>
                    <button className="text-white bg-emerald-600 px-5 py-2 rounded text-lg w-full font-semibold hover:bg-emerald-700 active:scale-98 transition-scale duration-200 ease-in-out cursor-pointer">Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask