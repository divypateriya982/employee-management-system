import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./context/AuthProvider"

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, [])
  
  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      const admin = authData.admin.find((e) => email == e.email && password == e.password);
      setUser('admin');
      setLoggedInUserData(admin);
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin', data: admin}));
    }
    else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password); // iss line se ye pta chalega ki konsa employee display ho rha hai
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}));
      }
    }
    else {
      alert('Invalid Credentials');
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard data={loggedInUserData} changeUser={setUser} /> : ''}
      {user == 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser} /> : ''}
    </>
  )
}
// {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard /> : null)}
// ye line bhi suitable hai admin aur employee dashboard open karne ke liye

export default App