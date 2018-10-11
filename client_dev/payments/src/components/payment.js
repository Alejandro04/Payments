import React, { Component } from 'react';
import axios from 'axios'
import PaymentItem from './PaymentItem'

class Payment extends Component {
    constructor(){
        super()
        this.state = {
            payments: []
        }
    }

    componentWillMount(){
        this.getPayments();
    }

    getPayments(){
        axios.get('http://localhost:3001/api/payments')
        .then(response => {
            this.setState({payments: response.data}, () => {
                console.log(this.state.payments)
            })
        })
        .catch (err => console.log(err))
    }

    render(){
        const paymentItems = this.state.payments.map((payment, i) => {
            return(
                <PaymentItem key={payment.id} item={payment} /> 
            )
        })
        return (
            <div>
                <h1>Payments</h1>
                <ul className="collection">
                    {paymentItems}
                </ul>
            </div>
        )
    }
}

export default Payment