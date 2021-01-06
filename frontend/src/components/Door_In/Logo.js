import React from 'react';

const  Logo = props => {
    return (
        <div style={{"position":"absolute","top":"4px","left":"20px"}}>
            <img src="/users/logo" style={{"width": "3.0rem","transform": "rotate(90deg)","borderRadius": "100%","height": "3.0rem"}}  /> 
        </div>
    )
}


export default Logo;