import { useState } from "react";

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="w-screen h-screen bg-black bg-[url('/images/ems-background-image.png')] bg-cover flex justify-center items-center">
            <form
            onSubmit={(e) => {
                e.preventDefault();
                handleLogin(email, password);
                setEmail('');
                setPassword('');
            }}
            className="w-90 bg-white/75 backdrop-blur-[15px] rounded-xl flex flex-col px-10 py-20">
                <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                required className="text-lg px-5 py-2 border-2 outline-none rounded placeholder:text-gray-400" type="email" placeholder="Enter your email" />
                <input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                required className="text-lg px-5 py-2 border-2 outline-none mt-5 rounded placeholder:text-gray-400" type="password" placeholder="Enter password" />
                <button className="mt-10 px-5 py-2 text-xl font-medium active:scale-95 transition-all duration-300 ease-in cursor-pointer bg-blue-600 text-white rounded-full">Login</button>
            </form>
        </div>
    )
}

export default Login