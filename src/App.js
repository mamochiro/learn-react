import React from 'react'
// import logo from './logo.svg';
import './App.css'
import Post from './Post'
// import Child1 from "./Child1";
// import Child2 from "./Child2";
import Comment from './Comment'

const App = () => {
  return (
    <div className="App">
      <Post id="2">
        <Comment userId="1" data="5 start"></Comment>
        <Comment userId="2" data="3 start"></Comment>
      </Post>
      <Post id="3">
        <Comment userId="4" data="mark"></Comment>
        <Comment userId="5" data="shit"></Comment>
      </Post>
    </div>
  )
}

export default App
