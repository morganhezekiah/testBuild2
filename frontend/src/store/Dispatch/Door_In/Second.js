import {SECOND_DOOR_IN_REQUEST, SECOND_DOOR_IN_REQUEST_ERROR, SECOND_DOOR_IN_REQUEST_SUCCESS} from '../../Action/Door_In';
import { APP_LOADING, APP_NOT_LOADING} from '../../Action/Loading';

const init = data =>{
    return  dispatch =>{
        
        dispatch({
            type:SECOND_DOOR_IN_REQUEST
        });

        dispatch({
            type:APP_LOADING
        });


        setTimeout(() => {
            dispatch({
                type:SECOND_DOOR_IN_REQUEST_SUCCESS,
                payload:data
            });
            dispatch({
                type:APP_NOT_LOADING
            });
        }, 3000);
        
    }
}



export default init;