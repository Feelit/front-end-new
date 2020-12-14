import React, { useEffect } from 'react';
import { postsStartLoading } from '../actions/actions';
import { CardComponent } from '../components/CardComponent';
import { useDispatch, useSelector } from "react-redux";

export const HomeScreen = () => {

  const dispatch = useDispatch();

  const {postsHome, loading} = useSelector(state => state.posts);
  const {allPosts} = postsHome;

  useEffect(() => {
    dispatch(postsStartLoading());
  }, [dispatch])

  return loading ? 'loading' : (
    <div className="cont">
      <div className='home__posts--container'>
        {
          allPosts.map((post)=>{
            return <CardComponent key={post.id} {...post} />
          })
        }
      </div>
    </div>
  )
}
