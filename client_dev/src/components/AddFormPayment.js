import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddPayment } from '../actions'

class AddFormPayment extends Component {

    newPayment(newPayment){
        this.props.AddPayment(newPayment)
    }

    onSubmit(e){
        const newPayment = {
            method: this.refs.method.value,
            date: this.refs.date.value,
        }

        this.newPayment(newPayment)
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

function mapStateToProps(state) {
    return {
      payments: state.payments.payments 
    }
}
  
export default connect(mapStateToProps, { AddPayment })(AddFormPayment)