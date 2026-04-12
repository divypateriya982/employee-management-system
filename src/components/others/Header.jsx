const Header = ({data}) => {
    return (
        <div className="flex items-end justify-between">
            <h1 className="text-white text-xl font-medium" >Hello, <br /><span className="text-4xl font-semibold">{data.firstName}👋</span></h1>
            <button className="text-white text-lg font-medium px-5 py-2 bg-[#D35A4A] rounded active:scale-95 transition-transform duration-300 ease-in cursor-pointer ">Log Out</button>
        </div>
    )
}

export default Header