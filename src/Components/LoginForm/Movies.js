import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel stillerini import edin
import { Carousel } from 'react-responsive-carousel';

const Studies = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = 'aab4af24f368e7dd896af5af45588714'; 
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500'; 
  

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data from TMDb:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='background'>
      <h3>Top Movies</h3>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {movies.map(movie => (
          <div key={movie.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src={`${posterBaseUrl}${movie.poster_path}`} 
              alt={movie.title} 
              style={{ width: '300px', height: '400px', objectFit: 'cover' }} 
            />
            <p className="movie-title">{movie.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Studies;