import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Coupon from './Coupon'

// const App = () => {
//   const [dataState, setDataState] = useState({
//     counter: 0,
//   })

//   const plusHandler = () => {
//     setDataState({
//       counter: dataState.counter + 1,
//     })
//   }

//   const minusHandler = () => {
//     setDataState({
//       counter: dataState.counter - 1,
//     })
//   }
//   return (
//     <div className="col-4 mx-auto mt-4">
//       <div className="card text-center">
//         <div className="card-header">
//           <button
//             className="btn btn-sm btn-primary mx-1"
//             onClick={minusHandler}
//           >
//             ลด
//           </button>
//           <button className="btn btn-sm btn-primary mx-1" onClick={plusHandler}>
//             เพิ่ม
//           </button>
//         </div>
//         <div className="card-body">Result : {dataState.counter}</div>
//       </div>
//     </div>
//   )
// }

class App extends Component {
  state = {
    coupon1: {
      secretWord: '1234',
      status: true,
    },
    coupon2: {
      secretWord: '5678',
      status: true,
    },
  }

  useCoupon = name => {
    const updateCoupon = { ...this.state }

    updateCoupon[name].status = false
    this.setState(updateCoupon)
  }

  render() {
    return (
      <div className="contrainer">
        <div className="row mt-4">
          <Coupon
            data={this.state.coupon1}
            setCoupon={this.useCoupon.bind(this, 'coupon1')}
          />
          <Coupon
            data={this.state.coupon2}
            setCoupon={this.useCoupon.bind(this, 'coupon2')}
          />
        </div>
      </div>
    )
  }
}

export default App
