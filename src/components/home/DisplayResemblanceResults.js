import React from 'react'

function DisplayResemblanceResults({movies}) {
  return (
    <ul>
      {movies.map((film, index) => (
        <li key={index}>{film.title}</li>
      ))}
    </ul>
  )
}

export default DisplayResemblanceResults