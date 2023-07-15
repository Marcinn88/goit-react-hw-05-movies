import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { handleSearch } from 'service/Api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [, setLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await handleSearch(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName]);

  return (
    <div>
        <SearchForm value={movieName} onChange={updateQueryString} />
        {searchResults.length === 0 && movieName ? (
          <h2> Nothing found</h2>
        ) : (
          <MovieList films={searchResults} />
        )}
    </div>
  );
};

export default Movies;
