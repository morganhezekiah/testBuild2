import React from 'react';
import Loader from 'react-loader-spinner';


const Second = ()=>{
    return (
        <div style={{'width':"70%","margin":"30px auto","display":"flex","justifyContent":"center"}}>
            <Loader
            color="#ff9900"
            type="ThreeDots"
         />
        </div>
        
    )
}

export default Second;