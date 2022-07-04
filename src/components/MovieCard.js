import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const MovieCard = (props) => {
    const { data } = props;
    return (
    <CardItem>
        < Link to={`/movie/${data.imdbID}`}>
        <div>
            <CardTop>
                <StyledImg src={data.Poster} alt={data.Title} />
            </CardTop>
            <CardBottom>
                <CardInfo>
                    <StyledH4>{data.Title}</StyledH4>
                    <p>{data.Year}</p>
                </CardInfo>
            </CardBottom>
        </div>
        </Link>
    </CardItem>
        );
};

const CardItem = styled.div`
background-color: #1a242f;
cursor: pointer;
transition: all 0,3s;
&:hover{
    transform: scale(1.1);
    transition: all 0.3s;
}
`
const CardTop = styled.div`
height: 300px;
`
const StyledImg = styled.img`
width: 100%;
height: 100%;
`
const CardBottom = styled.div`
padding: 20px;
`
const CardInfo = styled.div`
color: #FFFFFF;
`
const StyledH4 = styled.h2`
font-size: 22px;
font-weight: 400;
margin-bottom: 10px;
`

export default MovieCard;