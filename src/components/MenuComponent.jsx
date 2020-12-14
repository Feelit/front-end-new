import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/home-icon.svg'
import profileIcon from '../assets/profile-icon.svg'
import plusIcon from '../assets/plus-icon.svg'

export const MenuComponent = () => {
  return (
    <nav className="menu__container">
      <Link to='/' >
        <img src={homeIcon} alt="home link"/>
      </Link>
      <Link to='/new-post' >
        <div className='menu__plus-post'>
          <img src={plusIcon} alt="new post"/>
        </div>
      </Link>
      <Link to='/profile' >
        <img src={profileIcon} alt="profile link"/>
      </Link>
    </nav>
  )
}
