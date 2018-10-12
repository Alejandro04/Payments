import { combineReducers } from 'redux';
import { showPayments } from './payments'

const rootReducer = combineReducers({
  payments: showPayments
});

export default rootReducer;