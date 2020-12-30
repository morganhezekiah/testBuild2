import { APP_LOADING , APP_NOT_LOADING} from '../../Action/Loading';

const initialState ={
    loading:false
}

const init = (state = initialState, action) =>{
    switch(action.type){
        case APP_LOADING:
            return {
                ...state,
                loading:true
            }
        
        case APP_NOT_LOADING:
            return{
                ...state,
                loading:false
            }
        default:return state
    }
}

export default init;