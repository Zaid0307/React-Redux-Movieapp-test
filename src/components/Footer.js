import React from "react";
import styled from "styled-components";

const Footer =() => {
    return (
        <StyledFooter>
            <div>Movie App</div>
            <div>@2022, Movie App</div>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
 background-color: #1a242f;
height: 72px;
display: flex;
justify-content: center;
align-items: center;
color: #FFFFFF;
flex-direction: column;
width: 100%;
`

export default Footer;