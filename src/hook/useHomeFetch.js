// import React from 'react';
import { useState, useEffect } from "react";
import API from "../API";
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}
function useHomeFetch(props) {
    const [search, setSearch] = useState("")
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [loadMore, setLoadmore] = useState(false)

    const fetchMovie = async (page, searchItem = "") => {
        try {
            setError(false)
            setLoading(true)
            const movie = await API.fetchMovies(searchItem, page)
            setData(prev => ({
                ...movie,
                results: page > 1 ? [...prev.results, ...movie.results] : [...movie.results]
            }))

        } catch (err) {
            console.log(err);
        }
        setLoading(false)
    }
    useEffect(() => {
        if (!search) {
            const sessionState = JSON.parse(sessionStorage.getItem("homePage"))
            if (sessionState) {
                setData(sessionState)
                return
            }
        }
        if(search){
            const searchState= JSON.parse(sessionStorage.getItem("searchPage"))
            if (searchState) {
                setSearch(searchState)
                return
            }
        }
        fetchMovie(1, search)
        // setData(initialState)
    }, [search])
    useEffect(() => {
        if (!loadMore) return
        fetchMovie(data.page + 1, search)
        setLoadmore(false)
    }, [loadMore, data.page, search])
    useEffect(() => {
        if (!search) {
            sessionStorage.setItem("homePage", JSON.stringify(data))
        }
        // if(search){
        //     sessionStorage.setItem("searchPage", JSON.stringify(search))
        // }
    }, [data, search])
    return { data, loading, error, setSearch, search, setLoadmore }
}

export default useHomeFetch;