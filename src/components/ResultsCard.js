import React from 'react'
import './ResultsCard.css';

const ResultsCard = ({movie}) => {
  return (
    <div className='result-card' >
      <div className='poster-wrapper' >
        {movie.Poster ? (
            <img src={movie.Poster} alt={movie.Title} />
        ) : (
            <div className='filter-poster' ></div>
        ) }
      </div>
      <div className='info' >
        <div className='heading' >
            <h3 className='title' > {movie.Title} </h3>
            {movie.Year ? <h4 className='release-data' >{movie.Year}</h4> :'-' }
        </div>
        <div className='controls' >
            <div className='btn' >Add to Watchlist</div>
            <div className='btn' >Add to Watched</div>
        </div>
      </div>

    </div>
  )
}

export default ResultsCard
