export interface TmdbMovie {
    page: number;
    results: TmdbMovieResult[];
    total_pages: number;
    total_results: number;
}

export interface TmdbMovieResult {
    backdrop_path: string;
    genre_ids: string[];
    id: number;
    poster_path: string;
    release_date: string
    title: string
    vote_average: string
}

export const movieGenres = {
    genres: [
        {
            id: 28,
            name: "Action"
        },
        {
            id: 12,
            name: "Adventure"
        },
        {
            id: 16,
            name: "Animation"
        },
        {
            id: 35,
            name: "Comedy"
        },
        {
            id: 80,
            name: "Crime"
        },
        {
            id: 99,
            name: "Documentary"
        },
        {
            id: 18,
            name: "Drama"
        },
        {
            id: 10751,
            name: "Family"
        },
        {
            id: 14,
            name: "Fantasy"
        },
        {
            id: 36,
            name: "History"
        },
        {
            id: 27,
            name: "Horror"
        },
        {
            id: 10402,
            name: "Music"
        },
        {
            id: 9648,
            name: "Mystery"
        },
        {
            id: 10749,
            name: "Romance"
        },
        {
            id: 878,
            name: "Science Fiction"
        },
        {
            id: 10770,
            name: "TV Movie"
        },
        {
            id: 53,
            name: "Thriller"
        },
        {
            id: 10752,
            name: "War"
        },
        {
            id: 37,
            name: "Western"
        }
    ]
}