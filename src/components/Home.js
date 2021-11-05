import React, { useEffect, useState } from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/noImage.png";
import API from "../API";
import useHomeFetch from '../hook/useHomeFetch';
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
function Home(props) {
    const { data, loading, error, setSearch, search, setLoadmore } = useHomeFetch();
    // console.log(data);
    return (
        <>
            {!search && data.results[0] &&
                <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.results[0].backdrop_path}`} title={data.results[0].original_title} text={data.results[0].overview} />
            }
            <SearchBar setSearch={setSearch} />
            <Grid header={search ? `Kết quả tìm kiếm (${data.total_results})` : "Phim Hot Trong Tuần"} >
                {data.results.map((item,index) => {
                    return <Thumb key={index} clickAble image={item.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + item.poster_path : NoImage} id={item.id} />
                })}
            </Grid>
            {loading ? <Spinner /> : ""}
            {data.page < data.total_pages && !loading ? <Button callBack={() => setLoadmore(true)} text="Xem thêm" /> : ""}
        </>
    );
}

export default Home;