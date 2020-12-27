import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home/index';
import Door_In from './components/Door_In/Index';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './components/Login/Index';

if(document.getElementById("home")){
    ReactDom.render(<Provider store={store}> <Home /> </Provider>, document.getElementById("home"));
}

if(document.getElementById("door_in")){
    ReactDom.render(<Provider store={store}><Door_In /> </Provider>, document.getElementById("door_in"));
}

if(document.getElementById("login")){
    ReactDom.render(<Provider store={store}><Login /> </Provider>, document.getElementById("login"));
}