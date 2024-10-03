import React from 'react';
import { useState, useEffect } from 'react';
import DisplayResemblanceResults from './DisplayResemblanceResults';
import axios from 'axios';

function MovieOutput({movieID}) {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (movieID){
      const fetchData = async () => {
        try{
          const response = await axios.get(`${process.env.REACT_APP_resemblance_search_endpoint}?movie_id=${movieID}`);
          setMovieData(response.data);
        } catch (error) {
          alert("There was an error fetching the movie data!", error);
        }
      };
      fetchData();
    }
  }, [movieID])

  return (
    <div className='movie-output'>
      <span>MovieOutput</span>
      {movieData && <DisplayResemblanceResults movies={movieData}/>}
    </div>
  )
}

export default MovieOutput