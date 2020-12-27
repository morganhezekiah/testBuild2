import React from 'react';
import './style.css'

const Home = ()=>{
    return (
        <div className="home">
            <h3>Indentify problems in your niche.</h3>
            <h3>Open up opportunities</h3>

            <p>Join our vital nation today and tackle the problems in your fieldset with CTzins</p>

            <div className="door_in_button_wrapper">
                <button><a href="/users/door_in">Door In </a></button>
            </div>

            <div className="footer">
                <a href="">About</a>
                <a href="" className="ml-1">Policy Privacy</a>
                <a href="" className="ml-1">Help</a>
                <a href="" className="ml-1">Terms and conditions</a>
            </div>

        </div>
    );
}

export default Home;