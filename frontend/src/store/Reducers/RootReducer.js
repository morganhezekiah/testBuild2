import { combineReducers } from 'redux';
import FirstDoorIn from '../Reducers/Door_In/First';
import ChangeScreen from '../Reducers/Door_In/ChangeScreen';
import Second from '../Reducers/Door_In/Second';
import Third from '../Reducers/Door_In/Third';
import Loading from '../Reducers/Loading/Loading';
import Theme from '../Reducers/Theme/Index';

const reducers = combineReducers({
    FirstDoorIn,
    ChangeScreen,
    Second,
    Third,
    Loading,
    Theme,
});

export default reducers;