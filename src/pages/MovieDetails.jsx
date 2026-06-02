import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieDetails } from "../services/api"
import { useNavigate } from "react-router-dom"

function MovieDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const getMovie = async () => {
            const data = await fetchMovieDetails(id)
            setMovie(data)
        }

        getMovie()
    }, [id])

    if (!movie) {
        return <h1 className="text-white p-5">Loading...</h1>
    }

    const imageBaseUrl = "https://image.tmdb.org/t/p/w500"

    return (
        <div className="p-5 text-white max-w-7xl mx-auto">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-400"
            >
                ← Back
            </button>
            <div className="flex flex-col md:flex-row gap-8">
                <img
                    src={`${imageBaseUrl}${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full md:w-80 rounded-lg"
                />

                <div>
                    <h1 className="text-4xl font-bold mb-4">
                        {movie.title}
                    </h1>

                    <p className="text-gray-300 mb-4">
                        {movie.overview}
                    </p>

                    <p className="mb-2">
                        <span className="font-bold">
                            Release Date:
                        </span>{" "}
                        {movie.release_date}
                    </p>

                    <p className="mb-2">
                        <span className="font-bold">
                            Rating:
                        </span>{" "}
                        ⭐ {movie.vote_average.toFixed(1)}
                    </p>

                    <p className="mb-2">
                        <span className="font-bold">
                            Runtime:
                        </span>{" "}
                        {movie.runtime} mins
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {movie.genres?.map((genre) => (
                            <span
                                key={genre.id}
                                className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails