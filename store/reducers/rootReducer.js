import authReducer from './authReducer';
import addReducer from './addReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    add: addReducer
});

export default rootReducer