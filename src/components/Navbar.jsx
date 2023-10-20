import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-base">
            
            <ul className="flex items-center gap-10 text-gray-200">
                <Link to="/" className="font-bold text-2xl text-gray-200"><h1>Shopi</h1></Link>
                <li><Link to="/" className="">Home</Link></li>
                <li><Link to="/women" className="">Women</Link></li>
                <li><Link to="/men" className="">Men</Link></li>
                <li><Link to="/jewerely" className="">Jewerely</Link></li>
                <li><Link to="/electronics" className="">Electronics</Link></li>
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