import React from 'react'

function DisplayResemblanceResults({movies}) {
  return (
    <ul id="resemblanceResults">
      {movies.map((film, index) => (
        <li key={index}>
          <a href={`https://www.imdb.com/title/${film.imdb_id}/`} target="_blank" rel="noreferrer">
            <img src={film.poster} alt={film.title} />
            <span>{film.title} ({film.release_date.slice(0,4)})</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default DisplayResemblanceResults