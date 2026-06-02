import { useEffect, useState } from "react"

function RatingStars({ movieId }) {
    const [rating, setRating] = useState(0)

    useEffect(() => {
        const savedRating = localStorage.getItem(
            `rating-${movieId}`
        )

        if (savedRating) {
            setRating(Number(savedRating))
        }
    }, [movieId])

    const handleRating = (value) => {
        setRating(value)

        localStorage.setItem(
            `rating-${movieId}`,
            value
        )
    }

    return (
        <div className="flex gap-1 mt-3">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`cursor-pointer text-2xl transition ${star <= rating
                            ? "text-yellow-400"
                            : "text-gray-500"
                        }`}
                >
                    ★
                </span>
            ))}
        </div>
    )
}

export default RatingStars