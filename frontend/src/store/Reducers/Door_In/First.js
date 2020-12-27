import {FIRST_DOOR_IN_REQUEST,FIRST_DOOR_IN_REQUEST_ERROR,FIRST_DOOR_IN_REQUEST_SUCCESS} from '../../Action/Door_In';

const initialState = {
    error:false,
    success:false,
    message:"",
    loading:true,
    data:{}
}

const init = (state=initialState, action)=>{
    switch(action.type){
        case FIRST_DOOR_IN_REQUEST:
            return {
                ...state,
                error:false,
                success:false,
                message:"",
                loading:true,
            }

        case FIRST_DOOR_IN_REQUEST_SUCCESS:
            return {
                ...state,
                error:false,
                success:true,
                message:"Continue",
                loading:true,
                data:action.payload
            }

        case FIRST_DOOR_IN_REQUEST_ERROR:
            return {
                ...state,
                error:true,
                success:false,
                message:"Please enter all the fields",
                loading:true,
            }
        default : return state
    }
}

export default init ;