import React from 'react';
import plusIcon from '../assets/plus-icon.svg'

export const NewPostScreen = () => {

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
        <form >
          <label htmlFor="postTitle">Title</label>
          <input
            className='new-post__input'
            type="text"
            id='postTitle'
            placeholder='Give an awesome name to your photo'/>
          <label htmlFor="postDesc">Description</label>
          <textarea
            className='new-post__textarea'
            id='postDesc'
            placeholder='What is the history of this photo?'/>
          <div className='new-post__btns'>
            <button>Cancel</button>
            <button>Post It!</button>
          </div>
        </form>
      </div>
    </section>
  )
}
