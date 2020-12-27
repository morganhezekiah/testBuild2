import { combineReducers } from 'redux';
import FirstDoorIn from '../Reducers/Door_In/First';
import ChangeScreen from '../Reducers/Door_In/ChangeScreen';
import Second from '../Reducers/Door_In/Second';
import Third from '../Reducers/Door_In/Third';

const reducers = combineReducers({
    FirstDoorIn,
    ChangeScreen,
    Second,
    Third,
});

export default reducers;