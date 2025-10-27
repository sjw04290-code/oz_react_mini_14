import React from 'react'

const MovieCard = ({movie}) => {

    /** todos : movieCard 컴포넌트 완성하기  */
  const baseUrl = "https://image.tmdb.org/t/p/w500" 
  return (
    <>
    <div className='card'>
      <img className='poster' src={`${baseUrl}${movie.poster_path}`} alt="" />
      <div>{movie.title}</div>
    <div>{movie.vote_average}</div>
    </div>
    </>
  )
}

export default MovieCard