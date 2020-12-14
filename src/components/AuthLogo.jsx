import React from 'react';
import authLogo from '../assets/auth-logo.svg';

export const AuthLogo = () => {
  return (
    <div className="auth-logo__container">
      <h1>Wellcome to!</h1>
      <img src={authLogo} alt=""/>
      <p>Discover what sensations your images produce in the world. </p>
    </div>
  )
}
