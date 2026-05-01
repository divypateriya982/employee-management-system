import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {
    const authData = useContext(AuthContext);

    return (
        <div className="bg-[#1c1c1c] px-5 py-2 mt-4 rounded text-white">
            <div className="bg-orange-700 mb-2 px-4 py-2 rounded flex">
                <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
                <h5 className="w-1/5 text-lg font-medium">New Task</h5>
                <h5 className="w-1/5 text-lg font-medium">Completed Task</h5>
                <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
                <h5 className="w-1/5 text-lg font-medium">Failed Task</h5>
            </div>
            <div id="allTaskScrollbar" className="overflow-y-auto h-45">
                {authData.employees.map((elem, idx) => {
                    return <div key={idx} className="mb-2 px-4 py-2 rounded flex border-2 border-emerald-600 bg-transparent">
                        <h2 className="w-1/5 text-lg font-medium">{elem.firstName}</h2>
                        <h5 className="w-1/5 text-lg font-medium ml-15 text-blue-400">{elem.taskNumbers.newTask}</h5>
                        <h5 className="w-1/5 text-lg font-medium ml-15 text-yellow-700">{elem.taskNumbers.completed}</h5>
                        <h5 className="w-1/5 text-lg font-medium ml-10 text-slate-400">{elem.taskNumbers.active}</h5>
                        <h5 className="w-1/5 text-lg font-medium ml-10 text-rose-900">{elem.taskNumbers.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask