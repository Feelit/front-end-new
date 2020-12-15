import React from 'react';
import { startNewPost } from '../actions/actions';
import plusIcon from '../assets/plus-icon.svg';
import { useForm } from '../hooks/useForm';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

export const NewPostScreen = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [formNewPostValues, handleNewPostInputChange] = useForm({
    title: '',
    description: '',
  });

  const { title, description } = formNewPostValues;

  const handleNewPost = (e) => {
    e.preventDefault();

    dispatch(startNewPost(title, 'juandaniel'));
    history.replace('/');
  };

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file){
      console.log(file)
    }
  }

  return (
    <section className='new-post__container'>
      <div className='new-post__container--left'>
      <p>Add Your Image</p>
        <input
          className='new-post__input-file'
          id='fileSelector'
          name='file'
          type='file'
          onChange={handleFileChange}/>
        <div
          onClick={handlePictureClick}
          className='new-post__btn-plus'>
          <img src={plusIcon} alt="add"/>
        </div>
      </div>

      <div className='new-post__container--right'>
        <form onSubmit={handleNewPost} >
          <label htmlFor="postTitle">Title</label>
          <input
            className='new-post__input'
            type='text'
            name='title'
            value={title}
            id='postTitle'
            onChange={handleNewPostInputChange}
            placeholder='Give an awesome name to your photo'/>
          <label htmlFor="postDesc">Description</label>
          <textarea
            className='new-post__textarea'
            id='postDesc'
            name='description'
            value={description}
            onChange={handleNewPostInputChange}
            placeholder='What is the history of this photo?'/>
          <div className='new-post__btns'>
            <button>Cancel</button>
            <button type='submit'>Post It!</button>
          </div>
        </form>
      </div>
    </section>
  )
}
