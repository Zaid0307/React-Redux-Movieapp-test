import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./components/Home"
import MovieDetail from "./components/MovieDetail"
import PageNotFound from "./components/PageNotFound"
import Footer from "./components/Footer"
import styled from 'styled-components';

function App() {
  return (
    <div>
        <Header></Header>
        <Container>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
        </Container>
        <Footer />
    </div>
  );
}

const Container = styled.div`
margin: 0px 40px;
`

export default App;
