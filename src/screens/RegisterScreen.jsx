import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLogo } from '../components/AuthLogo'
import { useForm } from '../hooks/useForm';

export const RegisterScreen = () => {

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    rePassword: '',
  });

  // "email": "jd.rios.dev@gmail.com",
  // "username": "juandaniel",
  // "password": "Ab123456*",
  // "password_confirmation": "Ab123456*",
  // "first_name": "Juan",
  // "last_name": "Rios"

  const { name, lastname, username, email, password, rePassword } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(name, lastname, username, email, password, rePassword);
    //dispatch(startRegister(email, password));
    //history.replace('/');
  };

  return (
    <section className='auth__container'>
      <div className='auth__container--left'>
        <AuthLogo />
      </div>
      <div className='auth__container--right'>
        <h1 className='auth__title'>Register</h1>
        <form onSubmit={handleRegister}>
          <label htmlFor="RegisterName">Name</label>
          <input
            className='auth__input'
            type="text"
            id="RegisterName"
            placeholder="what is your name?"
            name='name'
            value={name}
            onChange={handleRegisterInputChange}/>
          <label htmlFor="RegisterLastname">Lastname</label>
          <input
            className='auth__input'
            type="text"
            id="RegisterLastname"
            placeholder="what is your lastname?"
            name='lastname'
            value={lastname}
            onChange={handleRegisterInputChange}/>
          <label htmlFor="RegisterUsername">Username</label>
          <input
            className='auth__input'
            type="text"
            id="RegisterUsername"
            placeholder="what is your Username?"
            name='username'
            value={username}
            onChange={handleRegisterInputChange}/>
          <label htmlFor="RegisterEmail">Email</label>
          <input
            className='auth__input'
            type="email"
            id="RegisterEmail"
            placeholder="Tell us your email"
            name='email'
            value={email}
            onChange={handleRegisterInputChange}/>
          <label htmlFor="RegisterPass">Password</label>
          <input
            className='auth__input'
            type="password"
            name="password"
            id="RegisterPass"
            placeholder="Don’t tell your password to anybody"
            value={password}
            onChange={handleRegisterInputChange}/>
          <label htmlFor="RegisterPass">Repeat Password</label>
          <input
            className='auth__input'
            type="password"
            name="rePassword"
            id="RegisterPass"
            placeholder="Just to be sure"
            value={rePassword}
            onChange={handleRegisterInputChange}/>
          <input
            className='auth__btn'
            type="submit"
            value="Continue"/>
            <p>I already have an account <Link to="/login">Login</Link> </p>
        </form>
      </div>
    </section>
  )
}
