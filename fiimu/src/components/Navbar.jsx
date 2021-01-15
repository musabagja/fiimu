import React from 'react'

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="uk-container">
        <h1 id="fiimu-title">Fiimu</h1>
        <form className="uk-search uk-search-default">
          <span className="uk-search-icon-flip" uk-search-icon="true"></span>
          <input className="uk-search-input" type="search" placeholder="Search..."/>
        </form>
      </div>
    </div>
  )
}

export default Navbar;
