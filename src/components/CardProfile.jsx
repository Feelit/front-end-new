import React from 'react'

export const CardProfile = () => {
  return (
    <section className='card-profile__container'>
      <div
        className='card-profile__img--container'
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)`,
        }}
      >
        
      </div>
      <input className='card-profile__range' type="range"/>
      <h2 className='card-profile__title'>Jhon Travolta</h2>
      <div className='card-profile__list--container'>
        <ul className='card-profile__list'>
          <li className='card-profile__list--item'
            style={{
              fontSize: `1.5rem`,
              fontWeight: `bold`
            }}  
          >
            <p>Photos</p>
            <p>58</p>
          </li>
          <li className='card-profile__list--item'>
            <p>Positive</p>
            <p>54</p>
          </li>
          <li className='card-profile__list--item'>
            <p>Negative</p>
            <p>4</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
