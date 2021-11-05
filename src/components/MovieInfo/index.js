import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import Thumb from '../Thumb';
import NoImage from "../../images/noImage.png";
import { Wrapper, Content, Text } from "./MovieInfo.styles";
import { Row,Col } from 'antd';
// import {  } from "../Thumb/";
function MovieInfo({ movie }) {
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb clickAble={false} image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage} />
                <Text>
                    <h1><a href={movie.homepage ? movie.homepage : "#"}>{movie.title}</a></h1>
                    
                    <h4>Status: {movie.status}</h4>
                    <h4>Date: {movie.release_date}</h4>
                    <h4>Time: {movie.runtime} minutes</h4>
                    <h4>Language: {movie.spoken_languages.map(item => item.english_name + " ")}</h4>
                    <h4>Countries: {movie.production_countries.map(item => item.name+ " ")}</h4>
                    <h4>Genres: {movie.genres.map((item,index)=>{
                        return <span style={{fontWeight:"bold",fontSize:"15px"}}>{ (index ? ', ' : '') + item.name }</span>
                    })}</h4>
                    <h3>Description: {movie.overview}</h3>
                    {/* <h1>Rating: {movie.vote_average}</h1> */}
                    
                    <Row>
                        <Col>

                        </Col>
                        <Col>

                        </Col>
                        <Col>

                        </Col>
                    </Row> 
                </Text>
            </Content>
        </Wrapper>
    );
}

export default MovieInfo;