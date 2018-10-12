import axios from 'axios'

//type actions
export const SHOW_PAYMENTS = 'SHOW_PAYMENTS';

//actions
export function showPayments() {   
    return (dispatch) => {
        axios.get('http://localhost:3001/api/payments')
            .then((response) => {
                dispatch( { type: SHOW_PAYMENTS, payload: response.data } ) 
            }) 
    }   
}