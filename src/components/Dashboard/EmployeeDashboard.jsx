import Header from "../others/Header"
import TaskList from "../TaskList/TaskList"
import TaskListNumbers from "../others/TaskListNumber"

const EmployeeDashboard = ({ data }) => {
    return (
        <div className="w-screen h-screen bg-[#123B33] py-10 px-15">
            <Header data={data} />
            <TaskListNumbers data={data} />
            <TaskList data={data} />
        </div>
    )
}

export default EmployeeDashboard

// low- #2F6F5E
// mid- #1F5A4C
// high- #123B33