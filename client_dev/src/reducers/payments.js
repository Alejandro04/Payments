
import { SHOW_PAYMENTS, ADD_PAYMENT} from '../actions'

const initialState = {
    payments: []
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_PAYMENTS:
            return Object.assign({}, state, {payments: action.payload})
        case ADD_PAYMENT:
            return Object.assign({}, state, {payments: action.payload})
        default:
            return state
    }
    
}