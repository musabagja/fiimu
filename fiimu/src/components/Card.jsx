import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

const Card = (props)  => {
  const { movies, movie, index, lastMovieElementRef } = props;
  const history = useHistory();
  const { path } = useRouteMatch();

  const getDetails = (e, id) => {
    e.preventDefault();
    history.push('/please-wait');
    setTimeout(() => {
      history.push(`/${id}`);
    }, 300)
  }

  if (movies.length === index + 1) {
    return (
      <div className="uk-width-1-3@m">
        <a href="#" onClick={ (e) => getDetails(e, movie.i)}>
          <div className="uk-card uk-card-hover uk-card-default" ref={ lastMovieElementRef }>
            <img src={ `https://image.tmdb.org/t/p/w500${ movie.poster_path }` } alt=""/>
            <div className="uk-inline">
                <button className="uk-button button-title noto-text" type="button">{ movie.title }</button>
                <div uk-dropdown>{ movie.title } ({ movie.release_date.split('-')[0] })</div>
            </div>
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
            <div className="uk-inline">
              <button className="uk-button button-title noto-text" type="button">{ movie.title }</button>
              <div uk-dropdown="true">{ movie.title } ({ movie.release_date?.split('-')[0] })</div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default Card;
