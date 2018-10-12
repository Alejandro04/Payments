import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PaymentItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            item: props.item
        }
    }

    render(){
        return (
            <li>         
                <Link to = {`/payments/${this.state.item.id}`}> 
                    {this.state.item.method} | {this.state.item.date} 
                </Link>
            </li>     
        )
    }
}

export default PaymentItem