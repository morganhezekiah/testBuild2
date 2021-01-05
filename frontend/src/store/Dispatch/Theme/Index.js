import { CHANGE_SCREEN_THEME_DARK,CHANGE_SCREEN_THEME_WHITE,  CHANGE_SCREEN_THEME} from '../../Action/Theme';

export const light = ()=>{
    return dispatch =>{
        localStorage.setItem("DARK_THEME", false);
        dispatch({
            type:CHANGE_SCREEN_THEME_WHITE
        });
    }
}


export const dark = ()=>{
    return dispatch =>{
        localStorage.setItem("DARK_THEME", true);
        dispatch({
            type:CHANGE_SCREEN_THEME_DARK
        });
    }
}

