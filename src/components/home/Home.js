import React from 'react'
import TitleSearch from './TitleSearch';
import MovieOutput from './MovieOutput';
import { useState } from 'react';
import "./css/Home.scss";

function Home() {
  const [movieID, setMovieID] = useState(null);
  
  return (
    <div className="home">
      <div className="header">
        <h1>Reel Resemblance</h1> 
        <span>Search for a movie and results will be ones that resemble it.</span>
      </div>
      <div className="content-container">
        <TitleSearch setMovieID={setMovieID}/>
        <MovieOutput movieID={movieID}/>
      </div>
    </div>
  )
}

export default Home