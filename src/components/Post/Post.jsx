import React, { useState } from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { UilEditAlt } from '@iconscout/react-unicons'
import PostModal from '../PostModal/PostModal'
import { UilCommentAltDots } from '@iconscout/react-unicons'
import CommentModel from '../CommentModel/CommentModel'
import UserService from '../../apis/UserService'


const Post = ({post, img, userStatus}) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [comOpened, setComOpened] = useState(false);
  const handelLike = (id)=>{
    console.log(post)
    const sendRequest = {
      post_id: id,
      user_id: JSON.parse(localStorage.getItem('user')).id
    }
    UserService.hitLike(sendRequest).then(res =>{
      console.log(res)
    })
  }
  const handelDislike = (id)=>{
    console.log(post)
    const sendRequest = {
      post_id: id,
      user_id: JSON.parse(localStorage.getItem('user')).id
    }
    UserService.hitDislike(sendRequest).then(res =>{
      console.log(res)
    })
  }
  // console.log(post, img)
  return (
    <div className="Post">
      {/* add user image */}
      {/* add user user name */}
      <span className='postedit'>
        <b>{post.user_name}</b>
        {userStatus === 'myProfile' && <UilEditAlt  className="moPo"
            onClick={() => setModalOpened(true)}
        />}
      <PostModal 
            post={post}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
      </span>
      
            <span> {post.body}</span>
        <img src={img} alt="" />

        <div className="postReact">
            {/* <img src={data.liked?Heart: NotLike} alt="" /> */}
            {/* <img src={post.status == 1  ?Heart: NotLike} alt="" /> */}
            {post.status == 1 && <img onClick={()=> handelDislike(post.id)} src={Heart} alt="" />}
            {post.status != 1 && <img onClick={()=> handelLike(post.id)} src={NotLike} alt="" />}
           

            <span className='postedit'><UilCommentAltDots  className="moPo"
            onClick={() => setComOpened(true)}/>
      <CommentModel 
            post={post}
            modalOpened={comOpened}
            setModalOpened={setComOpened}
          />
      </span>
            {/* <ProfileComents /> */}
            {/* <img src={Comment} alt="" /> */}
            {/* <img src={Share} alt="" /> */}
        </div>


        <span style={{color: "var(--gray)", fontSize: '12px'}}> 45 likes</span>

        <div className="detail">
        </div>
    </div>
  )
}

export default Post