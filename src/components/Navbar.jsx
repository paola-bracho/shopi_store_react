export const Navbar = () => {
    return (
        <nav className="bg-gray-800 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-base">
            
            <ul className="flex items-center gap-10 text-gray-200">
                <a href="#" className="font-bold text-2xl text-gray-200"><h1>Shopi</h1></a>
                <li><a href="#" className="">Home</a></li>
                <li><a href="#" className="">Women</a></li>
                <li><a href="#" className="">Men</a></li>
                <li><a href="#" className="">Jewerely</a></li>
                <li><a href="#" className="">Electronic</a></li>
            </ul>

            <ul className="flex items-center gap-10 text-gray-200">
            <li><a href="#" className="">My order</a></li>
            <li><a href="#" className="">My acount</a></li>
            <li><a href="#" className=""></a>Sign In</li>
            <li><a href="#" className="">CartWidget</a></li>
            </ul>
        </nav>
    )
} 