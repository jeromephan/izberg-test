import React from 'react';
import { NavLink } from 'react-router-dom';
import './Topbar.scss';
import logo from '../../assets/img/logo.png';

const Topbar = () => {
  return (
    <div className='topbar'>
      <img className='topbar__logo' src={logo} alt='logo' />
      <div className='topbar__wrapper'>
        <NavLink className='topbar__link' to='/'>
          Pokemon List
        </NavLink>
        <NavLink className='topbar__link' to='/favorites'>
          Favorites
        </NavLink>
      </div>
    </div>
  );
};

export default Topbar;
