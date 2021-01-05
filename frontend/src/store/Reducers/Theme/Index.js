import { CHANGE_SCREEN_THEME_DARK, CHANGE_SCREEN_THEME,CHANGE_SCREEN_THEME_WHITE } from '../../Action/Theme';

const initState = {
    darkTheme :false,
    
}


const init = (state = initState, action) =>{
    switch(action.type){
        case CHANGE_SCREEN_THEME:
            return {
                darkTheme:false
            }
        
        case CHANGE_SCREEN_THEME_DARK:
            return {
                darkTheme:true
            }
        
        case CHANGE_SCREEN_THEME_WHITE:
            return {
                darkTheme:false
            }
        default: return state
        
    }
}

export default init;