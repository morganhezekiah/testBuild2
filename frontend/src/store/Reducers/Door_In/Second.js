import {SECOND_DOOR_IN_REQUEST,SECOND_DOOR_IN_REQUEST_ERROR,SECOND_DOOR_IN_REQUEST_SUCCESS} from '../../Action/Door_In';

const initialState = {
    loading:false,
    error:false,
    message:"",
    data:{},
    success:false
}

const init = (state = initialState, action )=>{
    switch(action.type){
        case SECOND_DOOR_IN_REQUEST:

            return{
                ...state,
                loading:true,
                error:false,
                message:"",
                data:{},
                success:false

            }
        case SECOND_DOOR_IN_REQUEST_SUCCESS:
            return {
                ...state,
                loading:false,
                success:true,
                message:"Saved",
                data:action.payload,
                error:false
            }
        case SECOND_DOOR_IN_REQUEST_ERROR:
            return {
                ...state,
                loading:false,
                success:false,
                data:{},
                error:true,
                message:"Error saving data"
            }
        default: return state;
    }
}

export default init;
