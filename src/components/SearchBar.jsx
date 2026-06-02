function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-yellow-400"
            />
        </div>
    )
}

export default SearchBar