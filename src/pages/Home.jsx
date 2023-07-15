import React, { useEffect, useState } from 'react';

import MovieList from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'service/Api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>  
      <MovieList films={trendingMovies} />
    </div>
  );
};

export default Home;
