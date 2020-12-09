import React from 'react'
import detailScreenImage from '../assets/postDeailsImage.jpg'
import plusIcon from '../assets/plus-icon.svg'
import user from '../assets/user.svg'

export const DetailScreen = () => {
  return (
    <div>
      <div className="detail-screen__container">
        <div>
          <img src={detailScreenImage} alt="" />
        </div>
        <div>
          <form action="">
            <input type="range" className="detail-screen__range" />

            <div className="detail-screen__user">
              <div >
                <img src={user} className="detail-screen__avatar" ></img>
              </div>
              <div>
                <h2 className="detail-screen__user-name">George Smith</h2>
                <p className="detail-screen__photo-description" > ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod</p>
              </div>

            </div>

            <div className="detail-screen__opinion-container">
              <div className="detail-screen__opinion">
                <div >
                  <img src={user} className="detail-screen__avatar" ></img>
                </div>
                <div>
                  <h2 className="detail-screen__user-name">George Smith</h2>
                  <p className="detail-screen__photo-description" > ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod</p>
                </div>
              </div>
            </div>

            <span className="detail-screen__input-text">
              <input type="text" className="detail-screen__input-text-text" placeholder="Let a comment to Ana" />
              <button className="detail-screen__send-button">
                <img src={plusIcon} alt="" width="15px" />
              </button>
            </span>
          </form>

        </div>
      </div>
      <div className = "detail-screen__goback-button-container">
         <button className="detail-screen__goback-button">Back to feed</button>
      </div>
     
    </div>
  )
}
