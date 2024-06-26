import React from 'react';
import './ResultCard.css';
import { useMovieContext } from '../context/GlobalContext';
import * as actions from '../context/ActionTypes';

const ResultCard = ({ movie }) => {

    const MovieContext = useMovieContext()
    const storeMovie = MovieContext.watchlist.find(
        (o) => o.imdbID ===movie.imdbID 
    )

    const storeMovieWatched = MovieContext.watched.find(
        (o) => o.imdbID ===movie.imdbID 
    )

    const WatchlistDisable = storeMovie ? true : storeMovieWatched ? true : false
    const WatchedDisable = storeMovieWatched ? true : false
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.Poster ? (
                    <img src={movie.Poster} alt={movie.Title} />
                ) : (
                    <div className="filter-poster"></div>
                )}
            </div>
            <div className="info">
                <div className="heading">
                    <h3 className="title">{movie.Title}</h3>
                    {movie.Year ? (
                        <h4 className="release-date">{movie.Year}</h4>
                    ) : (
                        '-'
                    )}
                </div>

                <div className="controls">
                    <button onClick={() => MovieContext.MoviesDispatch(
                        {
                            type: actions.ADD_MOVIE_TO_WATCHLIST ,
                            payload:movie
                        }
                    )} className="btn"
                    disabled={WatchlistDisable}
                    >Add to Watchlist</button>
                    <button onClick={() => MovieContext.MoviesDispatch(
                        {
                            type: actions.ADD_MOVIE_TO_WATCHED ,
                            payload:movie
                        }
                    )} className="btn"
                    disabled={WatchedDisable}
                    >Add to Watched</button>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;
