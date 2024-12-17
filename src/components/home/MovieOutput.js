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
          let resemblance_endpoint = "http://127.0.0.1:8000/api/resemblance-results";
          const response = await axios.get(`${resemblance_endpoint}?movie_id=${movieID}`);
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
      {movieID && movieData && <DisplayResemblanceResults movies={movieData}/>}
    </div>
  )
}

export default MovieOutput