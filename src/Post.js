import React from 'react'

const Post = props => {
  const myId = props.id
  const content = props.children
  return (
    <div>
      <h3>Post ID : {myId}</h3>
      <p>Comment: </p>
      <p>{content}</p>
    </div>
  )
}
export default Post
