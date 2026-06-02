import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import SearchBar from "../components/SearchBar"
import { useLayoutEffect } from "react"
import {
    fetchPopularMovies,
    fetchGenres,
    searchMovies
} from "../services/api"

function Home() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("")
    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getMovies = async () => {
            const data = await fetchPopularMovies()
            setMovies(data)
            setLoading(false)
        }

        const getGenres = async () => {
            const data = await fetchGenres()
            setGenres(data)
        }

        getMovies()
        getGenres()
    }, [])

    useEffect(() => {
        const getSearchResults = async () => {
            if (!searchTerm.trim()) {
                const data = await fetchPopularMovies()
                setMovies(data)
                return
            }

            const results = await searchMovies(searchTerm)
            setMovies(results)
        }

        getSearchResults()
    }, [searchTerm])

    useLayoutEffect(() => {
        const savedPosition =
            sessionStorage.getItem("scrollPosition")

        if (savedPosition) {
            window.scrollTo(
                0,
                Number(savedPosition)
            )
        }
    }, [])

   /* const filteredMovies = movies.filter((movie) => {
        const matchesSearch = movie.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())

        const matchesGenre =
            selectedGenre === "" ||
            movie.genre_ids.includes(Number(selectedGenre))

        return matchesSearch && matchesGenre
    })*/

    if (loading) {
        return (
            <div className="text-white text-2xl p-10">
                Loading movies...
            </div>
        )
    }

    return (
        <div className="p-5 max-w-7xl mx-auto">

            <div className="bg-gradient-to-r from-yellow-500 to-red-500 rounded-2xl p-8 mb-8 shadow-lg">
                <h2 className="text-4xl font-bold mb-3 text-black">
                    Discover Amazing Movies
                </h2>

                <p className="text-black text-lg">
                    Search, explore, and rate the popular movies.
                </p>
            </div>

            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="mb-6 p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            >
                <option value="">
                    All Genres
                </option>

                {genres.map((genre) => (
                    <option
                        key={genre.id}
                        value={genre.id}
                    >
                        {genre.name}
                    </option>
                ))}
            </select>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))
                ) : (
                    <p className="text-white text-xl">
                        No movies found.
                    </p>
                )}
            </div>
        </div>
    )
}

export default Home