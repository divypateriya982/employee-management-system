import AllTask from "../others/AllTask"
import CreateTask from "../others/CreateTask"
import Header from "../others/Header"

const AdminDashboard = ({data,changeUser}) => {
    return (
        <div className="w-full h-screen py-5 px-10">
            <Header data={data} changeUser={changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard