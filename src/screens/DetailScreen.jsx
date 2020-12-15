import React, { useEffect } from 'react';
import plusIcon from '../assets/plus-icon.svg';
import userPhotoDefault from '../assets/user.svg';
import { addNewComment, getPostById } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import imgDefault from '../assets/image-not-found.png';
import { useForm } from '../hooks/useForm';

export const DetailScreen = () => {

  const {postSelected} = useSelector(state => state.posts)
  const dispatch = useDispatch();
  const {id, user} = useParams();
  useEffect(() => {
    if(postSelected){
      dispatch(getPostById(id, user))
    }
  }, [dispatch, id, user, postSelected]);

  const [textValues, handletextValuesInputChange] = useForm({
    text: '',
  });

  const { text } = textValues;

  const addNewCommentHandler = (e) => {
    e.preventDefault();
    dispatch(addNewComment(id, user, text));
  }

  return (

    <div>
      <div className="detail-screen__container">
        <div>
          <img className='img' src={postSelected.photo || imgDefault} alt="detail" />
        </div>
        <div className="detail-screen__container--form">
            <input type="range" className="detail-screen__range" />

            <div className="detail-screen__user">
              <div >
                <img src={userPhotoDefault} className="detail-screen__avatar" alt="profile" ></img>
              </div>
              <div>
                <h2 className="detail-screen__user-title">{postSelected.user}</h2>
                <h2 className="detail-screen__user-name">{postSelected.title}</h2>
              </div>
            </div>
            <div className="detail-screen__comments">
            {
            (postSelected.comments) &&
              postSelected.comments.map((comment, i)=>{
                return <div key={i} className="detail-screen__opinion-container">
                  <div className="detail-screen__opinion">
                    <div >
                      <img src={userPhotoDefault} className="detail-screen__avatar" alt="user" ></img>
                    </div>
                    <div>
                      <h2 className="detail-screen__user-name">{comment.from_user}</h2>
                      <p className="detail-screen__photo-description" >{comment.text}</p>
                    </div>
                  </div>
                </div>
              })
            }
            </div>
          <form onSubmit={addNewCommentHandler}>
            <span className="detail-screen__input-text">
              <input
                type="text"
                className="detail-screen__input-text-text"
                placeholder={`Let a comment to ${postSelected.user}`}
                name='text'
                value={text}
                onChange={handletextValuesInputChange} />
              <button type='submit' className="detail-screen__send-button">
                <img src={plusIcon} alt="" width="15px" />
              </button>
            </span>
          </form>
        </div>
      </div>
      <Link to='/' className = "detail-screen__goback-button-container">
        <button className="detail-screen__goback-button">Back to feed</button>
      </Link >
    </div>
  )
}
