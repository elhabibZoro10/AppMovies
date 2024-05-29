import React from 'react';
import { useMovieContext } from '../context/GlobalContext';
import * as actions from '../context/ActionTypes';

const MovieControls = ({ movie, type }) => {
    const MovieContext = useMovieContext();

    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <>
                    <button
                        onClick={() => {
                            MovieContext.MoviesDispatch({
                                type: actions.ADD_MOVIE_TO_WATCHED,
                                payload: movie,
                            });
                        }}
                        className="ctrl-btn"
                    >
                        <i className="fa-solid fa-eye"></i>
                    </button>
                    <button
                        onClick={() => {
                            MovieContext.MoviesDispatch({
                                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                                payload: movie.imdbID,
                            });
                        }}
                        className="ctrl-btn"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </>
            )}

            {type === 'watched' && (
                <>
                    <button className="ctrl-btn">
                        <i className="fa-solid fa-eye-slash"></i>
                    </button>
                    <button className="ctrl-btn">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </>
            )}
        </div>
    );
};

export default MovieControls;