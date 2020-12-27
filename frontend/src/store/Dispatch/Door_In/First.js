import {FIRST_DOOR_IN_REQUEST_SUCCESS, FIRST_DOOR_IN_REQUEST, FIRST_DOOR_IN_REQUEST_ERROR} from '../../Action/Door_In';


const init  = data =>{
    return dispatch =>{
        if(data.dateOfBirth && data.fullName && data.sex){
            dispatch({
                type:FIRST_DOOR_IN_REQUEST_SUCCESS,
                payload:data
            });
        }else{
            dispatch({
                type:FIRST_DOOR_IN_REQUEST_ERROR
            })
        }
        
    } 
}

export default init;