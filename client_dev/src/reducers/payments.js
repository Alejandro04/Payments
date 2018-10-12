
import { SHOW_PAYMENTS } from '../actions'

const initialState = {
    payments: []
}

export function showPayments(state = initialState, action) {
    switch (action.type) {
        case SHOW_PAYMENTS:
            return Object.assign({}, state, {payments: action.payload})
        default:
            return state
    }
    
}