import React,{useRef} from 'react';
import './style.css';




const Home = ()=>{
    return (
        <div className="home">
            <h3 className="banners">Indentify problems in your niche.</h3>
            <h4 className="banners">Open up opportunities</h4>

            <p>Join our vital nation today and tackle the problems in your fieldset with CTzins</p>

            <div className="door_in_button_wrapper" >
                <a href="/users/door_in" id="door_in_btn" ><button>Join Now </button></a>
                
            </div>
            <p className="text-center" style={{'fontSize':"13px"}}>Already have an account? <a href="/users/login">Door In</a></p>

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