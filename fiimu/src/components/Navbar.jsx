import React from 'react';
import { useRouteMatch, useHistory, Link } from 'react-router-dom';

const Navbar = () => {
  const { path } = useRouteMatch();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return (
    <div id="navbar">
      <div className="uk-container">
        <Link to="/">
          <h1 id="fiimu-title">Fiimu</h1>
        </Link>
        { path === '/:id' ? 
          <button className="uk-button uk-button-text" onClick={goBack}>Back</button>
        :
          <form className="uk-search uk-search-default">
            <span className="uk-search-icon-flip" uk-search-icon="true"></span>
            <input className="uk-search-input" type="search" placeholder="Search..."/>
          </form>
        }
      </div>
    </div>
  )
}

export default Navbar;
