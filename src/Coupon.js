import React, { Component } from 'react'

class Coupon extends Component {
  onCouponUse = event => {
    this.props.setCoupon()
  }
  render() {
    console.log(this.props.data)

    const status = this.props.data.status
    const coupon = this.props.data.secretWord
    return (
      <div className="col col-sm-6 col-lg-4 mt-2 mx-auto">
        <div className="card">
          <div className="card-header text-center">
            <button
              className="btn btn-primary btn-sm"
              disabled={!status}
              onClick={this.onCouponUse}
            >
              ใช้คูปอง
            </button>
          </div>
          <div className="card-body">
            <span className="mr-2">รหัสคูปอง :</span>
            <span className="badge badge-secondary">
              {status ? coupon : 'คูปองถูกใช้ไปแล้ว'}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Coupon
