import AllTask from "../others/AllTask"
import CreateTask from "../others/CreateTask"
import Header from "../others/Header"

const AdminDashboard = () => {
    return (
        <div className="w-full h-screen py-5 px-10">
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard