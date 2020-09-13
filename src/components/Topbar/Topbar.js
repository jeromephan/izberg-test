import React from 'react';
import { NavLink } from 'react-router-dom';
import './Topbar.scss';

const Topbar = () => {
  return (
    <div className='topbar'>
      <NavLink className='topbar__link' to='/'>
        Pokemon List
      </NavLink>
      <NavLink className='topbar__link' to='/favorites'>
        Favorites
      </NavLink>
    </div>
  );
};

export default Topbar;
