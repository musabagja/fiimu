import React, { useState, useRef, useCallback } from 'react';
import useMovie from '../helpers/useMovie';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { 
    loading,
    error,
    movies,
    hasMore
  } = useMovie(pageNumber);
  const observer = useRef();
  const lastMovieElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPage => prevPage + 1)
      }
    })
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <>
      <Navbar/>
      <div className="uk-container">
        <div className="uk-collapse uk-text-center" uk-grid="true">
        { movies.map((el, index) => (
          <Card
            key={ el.id }
            index={ index }
            movie={ el }
            movies={ movies }
            lastMovieElementRef={ lastMovieElementRef }
          />
        )) }
        { loading ? <p>Loading...</p> : '' }
        { error ? <p>Error...</p> : '' }
        </div>
      </div>
    </>
  )
}

export default Home;
