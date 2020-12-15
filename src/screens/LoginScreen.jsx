import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { startLogin } from '../actions/actions';
import { AuthLogo } from '../components/AuthLogo';
import { useForm } from '../hooks/useForm';



export const LoginScreen = () => {

  const history = useHistory();
  const dispatch = useDispatch()

  const [formLoginValues, handleLoginInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(email, password);
    dispatch(startLogin(email, password));
    history.replace('/');
  };


  return (
    <section className='auth__container'>
      <div className='auth__container--left'>
        <AuthLogo />
      </div>
      <div className='auth__container--right'>
        <h1 className='auth__title'>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="loginEmail">Email</label>
          <input
            className='auth__input'
            name='email'
            type="email"
            id="loginEmail"
            placeholder="Tell us your email"
            value={email}
            onChange={handleLoginInputChange}/>
          <label htmlFor="loginPass">Password</label>
          <input
            className='auth__input'
            type='password'
            name='password'
            id='loginPass'
            placeholder='Don’t tell your password to anybody'
            value={password}
            onChange={handleLoginInputChange}/>
          <input
            className='auth__btn'
            type='submit'
            value='Continue'/>
          <p> I do not have an account <Link to="/register">Register</Link> </p>
        </form>
      </div>

    </section>
  )
}
