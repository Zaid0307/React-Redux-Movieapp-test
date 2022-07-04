import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { BsFillCalendar2EventFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { RiFilmFill } from "react-icons/ri";
import styled from "styled-components";
import { fetchAsyncMovieorShowDetail, getSelectedMoviesOrShow, removeSelectedMovieOrShow } from "../features/movies/movieSlice";

const MovieDetail =() => {
const {imdbID} = useParams();
const dispatch = useDispatch();
const data= useSelector(getSelectedMoviesOrShow)

useEffect(() => {
dispatch(fetchAsyncMovieorShowDetail(imdbID));
return () => {
    dispatch(removeSelectedMovieOrShow());
};
},[dispatch, imdbID]);


    return (
        <MovieSection>
            {Object.keys(data).length === 0 ? 
            (<div>...loading</div>)
            :
        (
        <>
            <div>
                <MovieTitle>{data.Title}</MovieTitle>
                <MovieRating> 
                    <span>IMDB Rating <AiFillStar color="#ff9e00"/> : {data.imdbRating}</span>
                    <span>IMDB Votes <BsFillHandThumbsUpFill color="#fefefe" /> : {data.imdbVotes}</span>
                    <span>Runtime <RiFilmFill color="rgba(191,213,214)"/> : {data.Runtime}</span>
                    <span>Year <BsFillCalendar2EventFill color="#ffdab9" /> : {data.Year}</span>
                </MovieRating>
                <MoviePlot>{data.Plot}</MoviePlot>
                <MovieInfo>
                    <StyledDiv>
                        <TitleSpan>Directory:</TitleSpan>
                        <DataSpan>{data.Director}</DataSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <TitleSpan>Stars:</TitleSpan>
                        <DataSpan>{data.Actors}</DataSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <TitleSpan>Generes:</TitleSpan>
                        <DataSpan>{data.Genre}</DataSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <TitleSpan>Laguages:</TitleSpan>
                        <DataSpan>{data.Language}</DataSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <TitleSpan>Awards:</TitleSpan>
                        <DataSpan>{data.Awards}</DataSpan>
                    </StyledDiv>
                    </MovieInfo>
                </div>
            <RightSide>
                <img src={data.Poster} alt={data.Title} />
            </RightSide>
        </>
        )};
        </MovieSection>
    );
};

const MovieSection = styled.div`
display: flex;
justify-content: space-evenly;
padding: 40px 0px;
color: #FFFFFF;
font-weight: 200;
`
const MovieRating = styled.div`
padding-left: 3px;
margin-top: 20px;
color: #79b8f3;
display: flex;
span{
    margin-left: 20px;
}
`
const MovieTitle = styled.div`
font-size: 40px;
color: #FFFFFF;
`
const MoviePlot = styled.div`
margin-top: 20px;
line-height: 1.8re;
`
const MovieInfo = styled.div`
padding: 20px 0px;
font-weight: 200;
width: 100%;
display: inline-block;
`
const StyledDiv = styled.div`
padding: 10px 0px;
`
const TitleSpan = styled.span`
color: #FFFFFF;
`
const DataSpan = styled.span`
color: #79b8f3;
position:sticky;
left: 150px;
`
const RightSide = styled.div`
margin-left: 30px;
`
export default MovieDetail;