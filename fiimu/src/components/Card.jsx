import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = (props)  => {
  const { movies, movie, index, lastMovieElementRef } = props;
  const history = useHistory();

  const getDetails = (e, id) => {
    e.preventDefault();
    history.push(`/${id}`);
  }

  if (movies.length === index + 1) {
    return (
      <div className="uk-width-1-3@m">
        <a href="#" onClick={ (e) => getDetails(e, movie.id) }>
          <div className="uk-card uk-card-hover uk-card-default" ref={ lastMovieElementRef }>
            <img src={ `https://image.tmdb.org/t/p/w500${ movie.poster_path }` } alt=""/>
            <h3 className="noto-text movie-title">{ movie.title }</h3>
          </div>
        </a>
      </div>
    )
  } else {
    return (
      <div className="uk-width-1-3@m">
        <a href="#" onClick={ (e) => getDetails(e, movie.id) }>
          <div className="uk-card uk-card-hover uk-card-default">
            <img src={ `https://image.tmdb.org/t/p/w500${ movie.poster_path }` } alt=""/>
            <h3 className="noto-text movie-title">{ movie.title }</h3>
          </div>
        </a>
      </div>
    )
  }
}

export default Card;
