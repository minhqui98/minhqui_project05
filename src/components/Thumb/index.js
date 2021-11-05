import React from 'react';
import { Image } from './Thumb.styles';
import { Link } from "react-router-dom";
function Thumb({ image, clickAble, id }) {
    return (
        <div>
            {clickAble ? <Link to={`/${id}`}>
                <Image src={image} alt="Movie-thumb " />
            </Link>
                :
                <Image src={image} alt="Movie-thumb " />
            }
        </div>
    );
}

export default Thumb;