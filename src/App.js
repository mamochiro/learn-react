import React from 'react'
// import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Post from './Post'
// import Child1 from "./Child1";
// import Child2 from "./Child2";
// import Comment from './Comment'

const App = () => {
  const myPic = 'https://i.picsum.photos/id/237/200/300.jpg'
  return (
    // <div className="App">
    //   {/* child component */}
    //   {/* <Post id="2">
    //     <Comment userId="1" data="5 start"></Comment>
    //     <Comment userId="2" data="3 start"></Comment>
    //   </Post>
    //   <Post id="3">
    //     <Comment userId="4" data="mark"></Comment>
    //     <Comment userId="5" data="shit"></Comment>
    //   </Post> */}

    //   {/* css */}
    //   {/* <div className="myStyle">Hello Inline Style</div>
    //   <p
    //     style={{
    //       color: 'red',
    //       fontSize: 14,
    //       textAlign: 'center',
    //     }}
    //   >
    //     This is the another Line
    //   </p> */}

    //   {/* bootstrap */}

    // </div>
    <div class="container">
      <img class="img-thumnail" src={myPic} alt="nature" />
    </div>
  )
}

export default App
