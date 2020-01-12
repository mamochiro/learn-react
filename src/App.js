import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Coupon from './Coupon'
import StudentList from './Student-list'
class App extends Component {
  // state = {
  //   data: false,
  // }

  // toggleHandler = () => {
  //   const newData = !this.state.data
  //   this.setState({
  //     data: newData,
  //   })
  // }

  render() {
    // let myJsx = null
    // if (this.state.data) {
    //   myJsx = (
    //     <div className="card-body p-5 text-center">
    //       <div>Markk</div>
    //     </div>
    //   )
    // }
    return (
      <div className="contianer">
        <StudentList />
      </div>
    )
  }
}

export default App
