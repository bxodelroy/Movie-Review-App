import { Link } from "react-router-dom"
import RatingStars from "./RatingStars"

function MovieCard({ movie }) {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500"

    return (
        <Link
            to={`/movie/${movie.id}`}
            onClick={() =>
                sessionStorage.setItem(
                    "scrollPosition",
                    window.scrollY
                )
            }
        >
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition duration-300 cursor-pointer">
                <img
                    src={`${imageBaseUrl}${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-80 object-cover"
                />

                <div className="p-4">
                    <h2 className="text-lg font-bold">
                        {movie.title}
                    </h2>

                    <p className="text-gray-400 text-sm mt-1">
                        {movie.release_date?.split("-")[0]}
                    </p>

                    <p className="text-yellow-400 mt-2">
                        ⭐ {movie.vote_average.toFixed(1)}
                    </p>

                    <RatingStars movieId={movie.id} />
                </div>
            </div>
        </Link>
    )
}

export default MovieCard