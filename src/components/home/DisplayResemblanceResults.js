import React from 'react'

function DisplayResemblanceResults({movies}) {
  return (
    <ul>
      {movies.map((film, index) => (
        <li key={index}><a href={`https://www.imdb.com/title/${film.imdb_id}/`} target="_blank" rel="noreferrer">{film.title}</a></li>
      ))}
    </ul>
  )
}

export default DisplayResemblanceResults