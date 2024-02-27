const baseURL = 'https://api.themoviedb.org/3'

const movies = '/discover/movie'
const genres = '/genre/movie/list'

const urls = {
    movies,
    genres: {
        base: genres
    }
}

export {
    baseURL,
    urls
}