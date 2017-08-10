import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';

const allReducers = combineReducers({
    fetchReducer
});

export default allReducers;
