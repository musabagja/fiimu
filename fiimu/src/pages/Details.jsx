import React, { useState, useEffect, useRef, useCallback } from 'react'
import useDetails from '../helpers/useDetails';
import { useParams } from 'react-router-dom';
import { Navbar, Footer, Card } from '../components';
import useSimilar from '../helpers/useSimilar';

const Details = () => {
  const { id } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const { details, loading, error  } = useDetails(id);
  const { 
    loading: similarLoading,
    error: similarError,
    similar,
    hasMore
  } = useSimilar(id, pageNumber);
  const observer = useRef();
  const lastMovieElementRef = useCallback(node => {
    if (similarLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPage => prevPage + 1)
      }
    })
    if (node) observer.current.observe(node);
  }, [similarLoading, hasMore]);

  return (
    <div>
      <Navbar/>
      <div className="uk-container-float movie-details">
        <div className="column-divider">
          <div className="movie-poster">
            <img className="details-poster-path" src={ `https://image.tmdb.org/t/p/w500${ details.poster_path }` } alt=""/>
          </div>
          <div className="movie-details">
            <div className="details-data">
              <div>
                <h2 className="noto-text">{ details.release_date?.split('-')[0]}</h2>
              </div>
              <div>
                <h1 className="noto-text">{ details.title }</h1>
              </div>
              <div>
                { details.vote_average*10 >= 70 ?
                  <span className="uk-label uk-label-success rating-score noto-text">{ details.vote_average*10 }%</span>
                :
                  details.vote_average*10 >= 40 ? 
                  <span className="uk-label uk-label-warning rating-score noto-text">{ details.vote_average*10 }%</span>
                  :
                  <span className="uk-label uk-label-danger rating-score noto-text">{ details.vote_average*10 }%</span>
                }
              </div>
            </div>
            <div className="details-overview noto-text">
              <p>{ details.overview }</p>
            </div>
            <div className="details-genres noto-text">
              { details.genres?.map(el => (
                <div>
                  <span className="uk-label">{ el.name }</span>
                </div>
              )) }
            </div>
            <img src={ `https://image.tmdb.org/t/p/w500${ details.backdrop_path }` } style={{ marginTop: "100px" }} width="40%" alt=""/>
            <div className="details-production-company">
              { details.production_companies?.map(el => {
                if (el.logo_path) {
                  return <img className="company-logo" src={ `https://image.tmdb.org/t/p/w500${ el.logo_path }` } width="150px" alt=""/>
                }
              }) }
            </div>
          </div>
        </div>
        <h1 className="noto-text" style={{ marginTop: "100px" }}>Similar Movies</h1>
        <div className="similar-movies">
        { similar.map((el, index) => (
          <Card
            key={ el.id }
            index={ index }
            movie={ el }
            movies={ similar }
            lastMovieElementRef={ lastMovieElementRef }
          />
        )) }
        { loading ? <p>Loading...</p> : '' }
        { error ? <p>Error...</p> : '' }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Details;
