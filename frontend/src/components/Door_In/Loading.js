import React from 'react';
import Loader from 'react-loader-spinner';


const Second = ()=>{
    return (
        <div style={{'width':"70%","margin":"30px auto","display":"flex","justifyContent":"center"}}>
            <Loader
            type="ThreeDots"
            color="black"
         />
        </div>
        
    )
}

export default Second;