import axios from 'axios'

//type actions
export const SHOW_PAYMENTS = 'SHOW_PAYMENTS';
export const ADD_PAYMENT = 'ADD_PAYMENT';

//actions
export function ShowPayments() {   
    return (dispatch) => {
        axios.get('http://localhost:3001/api/payments')
            .then((response) => {
                dispatch( { type: SHOW_PAYMENTS, payload: response.data } ) 
            }).catch(err => console.log(err))
    }   
}

export function AddPayment(newPayment) {   
    return (dispatch) => {
            axios.request({
                method: 'post',
                url: 'http://localhost:3001/api/payments',
                data: newPayment
            }).then(response => {
                console.log("accion")
                ShowPayments()
                dispatch( { type: ADD_PAYMENT, payload: response.data } ) 
            }).catch(err => console.log(err))
    }   
}