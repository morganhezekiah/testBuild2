import {SECOND_DOOR_IN_REQUEST, SECOND_DOOR_IN_REQUEST_ERROR, SECOND_DOOR_IN_REQUEST_SUCCESS} from '../../Action/Door_In';


const init = data =>{
    return  dispatch =>{
        
        dispatch({
            type:SECOND_DOOR_IN_REQUEST
        });

        setTimeout(() => {
            dispatch({
                type:SECOND_DOOR_IN_REQUEST_SUCCESS,
                payload:data
            });
        }, 3000);
        
    }
}



export default init;