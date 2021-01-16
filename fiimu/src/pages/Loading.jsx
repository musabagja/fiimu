import React from 'react';
import { Navbar, Footer } from '../components';

const Loading = () => {
  return (
    <div>
      <Navbar/>
      <div className="loading-container">
        <div uk-spinner="ratio: 10"></div>
      </div>
      <Footer/>
    </div>
  )
}

export default Loading;
