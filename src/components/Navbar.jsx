import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-gray-900 px-6 py-4 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-yellow-400">
                        Movie Review App
                    </h1>
                </Link>

                <p className="text-gray-400 hidden sm:block">
                    Explore Movies
                </p>
            </div>
        </nav>
    )
}

export default Navbar