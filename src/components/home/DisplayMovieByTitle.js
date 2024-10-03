import React from 'react'

function DisplayMovieByTitle({movies, setMovieID}) {
  return (
    <ul>
      {movies.map((film, index) => (
        <li key={index}><button onClick={() => setMovieID(film.id)}>{film.title}</button></li>
      ))}
    </ul>
  )
}

export default DisplayMovieByTitle