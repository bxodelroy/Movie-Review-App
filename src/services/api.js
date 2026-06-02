const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const BASE_URL = "https://api.themoviedb.org/3"
console.log(API_KEY)

export const fetchPopularMovies = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}`
        )

        const data = await response.json()

        return data.results
    } catch (error) {
        console.log(error)
    }
}

export const fetchMovieDetails = async (id) => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
        )

        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchGenres = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
        )

        const data = await response.json()

        return data.genres
    } catch (error) {
        console.log(error)
        return []
    }
}

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    )

    const data = await response.json()

    return data.results || []
  } catch (error) {
    console.log(error)
    return []
  }
}