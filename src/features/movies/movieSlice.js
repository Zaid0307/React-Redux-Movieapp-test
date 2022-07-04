import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apis/MovieApi"
import { APIKey }from "../../apis/movieApiKey"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (term) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
            return response.data;
}
);
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (term) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);
            return response.data;
}
);

export const fetchAsyncMovieorShowDetail = createAsyncThunk("movies/fetchAsyncMovieorShowDetail", async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
            return response.data;
}
);

const initialState = {
    movies: {},
    shows: {},
    selectedMovieorShowDetail: {},

};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieorShowDetail = {};
        },
    },

    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return{...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return{...state, shows: payload}
        },
        [fetchAsyncMovieorShowDetail.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return{...state, selectedMovieorShowDetail: payload}
        },

    }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMoviesOrShow = (state) => state.movies.selectedMovieorShowDetail;
export default movieSlice.reducer;

