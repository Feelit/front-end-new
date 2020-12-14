import React from 'react'
import { Link } from 'react-router-dom'
import plusIcon from '../assets/plus-icon.svg'

export const CardComponent = ({title, photo, user}) => {
  return (
    <Link to='/post' className='card__link'>
      <div className="card__container">
        <img src={photo} alt="post" />
        <form action="">
          <input type="range" className="card__range" />
          <h2 className="card__description">{title}</h2>
          <span className="card__input-text">
            <input type="text" className="card__input-text-text" placeholder={`Let a comment to ${user}`} />
            <button className="card__send-button">
              <img src={plusIcon} alt="" width="15px" />
            </button>
          </span>
        </form>
      </div>
    </Link>
  )
}
