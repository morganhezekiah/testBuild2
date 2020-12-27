import React, { useEffect, useState } from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import Loader from './Loading';
import { connect } from 'react-redux';

const Index = (props) =>{
    const [currenScreen, setCurrentScreen]  = useState ();
    useEffect(()=>{
        if(props.screen.loading){
            setCurrentScreen(<Loader />);
        }else{
            if(props.screen.currentScreen === 'first'){
                setCurrentScreen(<Third />);
            }else if(props.screen.currentScreen === 'second'){
                setCurrentScreen(<Second />);
            }else{
                setCurrentScreen(<Third />);
            }
        }
    }, [props.screen])
    return (
        <div>
            {
                currenScreen
            }
        </div>
    );
}


const mapStateToProp =state =>{
    return {
        screen:state.ChangeScreen
    }
}

export default connect(mapStateToProp)(Index);