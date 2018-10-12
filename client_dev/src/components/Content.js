import React, { Component } from 'react';
import Payment from './payment'
import FormItem from './FormItem'

class Content extends Component {
  render() {
    return (
      <div className="hello">
        <div className="left">
            <FormItem/>
        </div>
        <div className="right">
            <Payment/>
        </div>
      </div>
    );
  }
}

export default Content;
