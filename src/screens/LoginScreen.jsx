import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLogo } from '../components/AuthLogo';

export const LoginScreen = () => {
  return (
    <section className='auth__container'>
      <div className='auth__container--left'>
        <AuthLogo />
      </div>
      <div className='auth__container--right'>
        <h1 className='auth__title'>Login</h1>
        <form>
          <label htmlFor="loginEmail">Email</label>
          <input
            className='auth__input'
            type="email"
            id="loginEmail"
            placeholder="Tell us your email"/>
          <label htmlFor="loginPass">Password</label>
          <input
            className='auth__input'
            type="password"
            name="password"
            id="loginPass"
            placeholder="Don’t tell your password to anybody"/>
          <input
            className='auth__btn'
            type="button"
            value="Continue"/>
          <p> I do not have an account <Link to="/register">Register</Link> </p>
        </form>
      </div>

    </section>
  )
}
