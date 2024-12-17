import React from 'react'

function DisplayMovieByTitle({movies, setMovieID}) {

  const handleTitleClick = (id) => {
    setMovieID(id);
    document.getElementById('titleResults').style.display = 'none';
  }

  return (
    <ul id="titleResults">
      {movies.map((film, index) => (
        <li key={index}><button onClick={() => handleTitleClick(film.id)}>{film.title} ({film.release_date.slice(0,4)})</button></li>
      ))}
    </ul>
  )
}

export default DisplayMovieByTitle