import React, { Component } from 'react'
import axios from 'axios'

class AddPayment extends Component {

    AddMeetup(newPayment){
        axios.request({
            method: 'post',
            url: 'http://localhost:3001/api/payments',
            data: newPayment
        }).then(response => {
            //deberia ir un tipo de alert
            //deberia ir el array con push
        }).catch(err => console.log(err))
    }

    onSubmit(e){
        const newPayment = {
            method: this.refs.method.value,
            date: this.refs.date.value,
        }

        this.AddMeetup(newPayment)
        e.preventDefault()
    }

    render(){
        return (
            <div>
                <h1>
                   Add Payment
                </h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="method" ref="method" />
                        <label htmlFor="method">Método de Pago</label>
                    </div>
                    <div className="input-field">
                        <input type="date" name="date" ref="date" />
                        <label htmlFor="date">Fecha de pago</label>
                    </div>
                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        )
    }
}

export default AddPayment