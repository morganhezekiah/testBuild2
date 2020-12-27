import { CHANGE_SCREEN_REQUEST, CHANGE_SCREEN_SUCCESS} from '../../Action/Door_In';


const init = screen=>{
    return dispatch =>{
        dispatch({
            type:CHANGE_SCREEN_REQUEST,
            payload:screen
        });

        setTimeout(() => {
            dispatch({
                type:CHANGE_SCREEN_SUCCESS,
                payload:screen
            });
        }, 3000);
    }
}

export default init;