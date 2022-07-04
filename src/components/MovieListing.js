import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/movies/movieSlice";
import styled from "styled-components";
import MovieCard from "./MovieCard";


const MovieListing =() => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    return (
        <div>
            <MovieList>
                <StyledH2>Movies</StyledH2>
                {!movies.Response ? (
                <div> <h3>{movies.Error}</h3></div>
                ) : (
                    <MovieContainer>
                    {movies.Search.map((movie, index) => {
                        return (
                            <MovieCard key={index} data={movie} />
                        );
                    })}
                    </MovieContainer>
                    )};
            </MovieList>

            <ShowList>
                <StyledH2>Shows</StyledH2>
                {!shows.Response ? (
                <div> <h3>{shows.Error}</h3></div>
                ) : (
                    <MovieContainer>
                    {shows.Search.map((shows, index) => {
                        return (
                            <MovieCard key={index} data={shows} />
                        );
                    })}
                    </MovieContainer>
                    )};
            </ShowList>
        </div>
    
    );
};


const ShowList= styled.div`
margin:20px 0px;
`
const MovieList= styled.div`
margin:20px 0px;
`
const StyledH2 = styled.h2`
color: #79b8f3;
margin-bottom: 10px;
font-weight: 400;
`

const MovieContainer= styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(220px,1fr));
grid-gap: 15px;

`
export default MovieListing;