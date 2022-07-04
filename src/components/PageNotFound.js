import React from "react";
import pageNotFound from "../img/pageNotFound.jpg"
import styled from "styled-components";
import { Link } from "react-router-dom"

const PageNotFound =() => {
    return (
    <Container>
        <Link to="/">
    <PageNotFoundImg src={pageNotFound} alt="PageNotFound"/>
    </Link>
    <a href="https://de.freepik.com/vektoren/404-page">404 page Vektor erstellt von pikisuperstar - de.freepik.com</a>
    </Container>
    );
};

const Container= styled.div`
display: flex;
flex-direction: column;
padding: 10px 0px;
justify-content: center;
align-items: center;
`
const PageNotFoundImg= styled.img`
height: 100vh;
`

export default PageNotFound;