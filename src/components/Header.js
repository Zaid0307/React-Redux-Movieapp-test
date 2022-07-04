import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../img/user-286.svg"
import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../features/movies/movieSlice";

const Header =() => {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        if(term === "") return alert("Please enter serch Term!")
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("");
    };

    return (
        <StyledHeader>
            <Link to="/">Movie App</Link>
            <Searchbar>
                <form onSubmit={handleSubmit}>
                    <StyledInput type="text" value={term} placeholder="Search Movies or Shows" onChange={(event)=> setTerm(event.target.value)}/>
                    <button type="submit"><ImSearch /></button>
                </form>
            </Searchbar>
            <UserImg>
                <User_Img src={user} alt="user" />
            </UserImg>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
  background-color: #1a242f;
  height: 72px;
  padding: 0px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserImg = styled.div`
width: 38px;
height: 38px;
`;

const User_Img = styled.img`
width: 38px;
height: 38px;
`;

const Searchbar = styled.div`
width: 50%;
display: flex;
justify-content: center;
form {
    display: flex;
    justify-content: center;
    width: 70%;
    button {
        padding: 0px 8px;
        font-size: 20px;
        cursor: pointer;
        height: 38px;
    }
}
`;

const StyledInput = styled.input`
font-size: 18px;
width: 100%;
padding: 5px 5px 5px 10px;
height: 38px;
outline: none;
`;

export default Header;