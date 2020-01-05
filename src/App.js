import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import Post from "./Post";
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  return (
    <div className="App">
      <h1>เนื้อหาจาก App Component</h1>
      <Child1 />
      <Child2 />
    </div>
  );
};

export default App;
