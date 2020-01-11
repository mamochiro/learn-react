import React, { component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends component {
  state = {
    user: 'sarawut',
    password: 'thisIsMark',
    address: {
      houseNo: '123',
      province: 'narathiwas',
    },
  }

  userClick = () => {
    this.setState({
      user: 'athena',
      password: 'autoloooock',
    })
  }

  render() {
    return (
      <div className="contrainer">
        <div className="row">
          <div className="col-12 col-sm-6 mx-auto mt-5">
            <div className="card ml-5 mr-5">
              <div className="card-header text-right">
                <button className="btn btn-success" onClick={this.userClick}>
                  Click
                </button>
              </div>
              <div className="card-body">
                user : <span>{this.state.user}</span>
                password : <span>{this.state.password}</span>
                address : <span>{this.state.address.houseNo}</span>
                <span>{this.state.address.province}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
