import AllTask from "../others/AllTask"
import CreateTask from "../others/CreateTask"
import Header from "../others/Header"

const AdminDashboard = ({data}) => {
    return (
        <div className="w-full h-screen py-5 px-10">
            <Header data={data} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard