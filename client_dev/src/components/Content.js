import React, { Component } from 'react';
import Payment from './payment'
import AddPayment from './AddPayment';

class Content extends Component {
  render() {
    return (
      <div className="hello">
        <div className="left">
            <AddPayment/>
        </div>
        <div className="right">
            <Payment/>
        </div>
      </div>
    );
  }
}

export default Content;
