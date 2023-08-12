import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import {FaEye, FaEyeSlash} from "react-icons/fa"
import { FaTimes } from 'react-icons/fa';



function MovieControls({ movie, type }) {
const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched } = useContext(GlobalContext);

  return (
    <div className='inner-card-controls'>
      {type === "watchlist" && (
        <>
        <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
          <FaEye />
        </button>

        <button className='ctrl-btn' 
        onClick={() => removeMovieFromWatchlist(movie.id)}
        >
          <FaTimes />
        </button>
        </>
      )}

      {type === 'watched' && 
      (
        <>
          <button className='ctrl-btn' onClick={() => moveToWatchlist(movie)} >
          <FaEyeSlash />
        </button>

        <button className='ctrl-btn' onClick={() => removeFromWatched(movie.id)} >
          <FaTimes />
        </button>
        </>
      )}
    </div>
  )
}

export default MovieControls;