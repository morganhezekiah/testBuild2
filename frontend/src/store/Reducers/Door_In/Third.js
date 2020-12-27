import {THIRD_DOOR_IN_REQUEST, THIRD_DOOR_IN_REQUEST_ERROR, THIRD_DOOR_IN_REQUEST_SUCCESS} from '../../Action/Door_In';


const initialState = {
    loading:true,
    error:false,
    success:false,
    message:""
}


const init = (state = initialState, action)=>{
    switch(action.type){
        case THIRD_DOOR_IN_REQUEST:
            return {
                ...state,
                loading:true,
                error:false,
                success:false,
                message:""
            }

        case THIRD_DOOR_IN_REQUEST_SUCCESS:
            return {
                ...state,
                loading:true,
                error:false,
                success:true,
                message:action.payload
            }
        case THIRD_DOOR_IN_REQUEST_ERROR:
            return{
                ...state,
                loading:true,
                error:true,
                success:false,
                message:action.payload
            }
        default: return state
    }
}


export default init;