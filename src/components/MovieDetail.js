import React from 'react';
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Spinner from "./Spinner";
import Grid from "./Grid";
import NoImage from "../images/noImage.png";

import API from "../API";
import useMovieDetail from '../hook/useMovieDetail';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import Actor from './Actor';
function MovieDetail(props) {
    const { id } = useParams();
    const { movieDetial, loading, error } = useMovieDetail(id)
    console.log(movieDetial);
    if (loading) return <Spinner />
    return (
        <div>
            <BreadCrumb movieTitle={movieDetial?.original_title} />
            <MovieInfo movie={movieDetial} />
            <Grid header="Actor">
                {movieDetial.actors.map(item => (
                    <Actor name={item.original_name} character={item.character} image={item.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${item.profile_path}` : NoImage}></Actor>
                ))}
            </Grid>
        </div>
    );
}

export default MovieDetail;