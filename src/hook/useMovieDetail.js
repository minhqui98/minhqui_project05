import React, { useState, useEffect } from 'react';
import API from "../API";

function useMovieDetail(movieId) {
    const [movieDetial, setMovieDetail] = useState()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetchMovieDetail()
    }, [movieId])

    const fetchMovieDetail = async () => {
        try {
            setError(false)
            setLoading(true)
            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);
            const director = credits.crew.filter(movie => movie.job = "Director")
            setMovieDetail({
                ...movie,
                actors: credits.cast,
                directors: director
            })
            setLoading(false)
        }
        catch (err) {
            setError(true)
        }
    }
    return (
        { movieDetial, loading, error }
    );
}

export default useMovieDetail;