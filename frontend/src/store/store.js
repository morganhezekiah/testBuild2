import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './Reducers/RootReducer';
import reduxThunk from 'redux-thunk';


const store = createStore( RootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;