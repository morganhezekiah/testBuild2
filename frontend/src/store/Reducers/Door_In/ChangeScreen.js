import {CHANGE_SCREEN_REQUEST, CHANGE_SCREEN_SUCCESS} from '../../Action/Door_In';
const initialState = {
    error:false,
    success:false,
    currentScreen:'first',
    loading:false
}


const init = (state = initialState, action )=>{
    switch(action.type){
        case CHANGE_SCREEN_REQUEST:
            return {
                ...state,
                error:false,
                success:false,
                currentScreen:'',
                loading:true
            }
        case CHANGE_SCREEN_SUCCESS:
            return {
                ...state,
                error:false,
                success:true,
                currentScreen:action.payload,
                loading:false
            }
        default:return state
    }
}

export default init;