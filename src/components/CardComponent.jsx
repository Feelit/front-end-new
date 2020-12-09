import React from 'react'
import cardImage from '../assets/cardImage.jpg'
import plusIcon from '../assets/plus-icon.svg'

 
export const CardComponent = () => {
  return (
    <div className = "card__container">
      
        <img src={cardImage} alt=""/>
      
      <form action="">
        <input type="range"/>
        <h2 className = "card__description">Every day is a travel...</h2>
        <span className = "card__input-text">
          <input type="text" className = "card__input-text-text" placeholder = "Let a comment to Ana" />
          <button className = "card__send-button">
            <img src={plusIcon} alt="" width = "15px"/>
          </button>
        </span>
      </form>
    </div>
  )
}
