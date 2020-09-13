import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.scss';

const Topbar = () => {
  return <div className='topbar'>
      <Link className='topbar__link' to='/'>Pokemon List</Link>
      <Link className='topbar__link' to='/favorites'>Favorites</Link>
  </div>;
};

export default Topbar;
