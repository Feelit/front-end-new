import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLogo } from '../components/AuthLogo'

export const RegisterScreen = () => {
  return (
    <section className='auth__container'>
      <div className='auth__container--left'>
        <AuthLogo />
      </div>
      <div className='auth__container--right'>
        <h1 className='auth__title'>Register</h1>
        <form>
          <label htmlFor="loginName">Name</label>
          <input
            className='auth__input'
            type="text"
            id="loginName"
            placeholder="what is your name?"/>
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
          <label htmlFor="loginPass">Repeat Password</label>
          <input
            className='auth__input'
            type="password"
            name="re-password"
            id="loginPass"
            placeholder="Just to be sure"/>
          <input
            className='auth__btn'
            type="button"
            value="Continue"/>
            <p>I already have an account <Link to="/login">Login</Link> </p>
        </form>
      </div>

    </section>
  )
}
