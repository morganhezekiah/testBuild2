import {THIRD_DOOR_IN_REQUEST, THIRD_DOOR_IN_REQUEST_ERROR, THIRD_DOOR_IN_REQUEST_SUCCESS} from '../../Action/Door_In';
import store from '../../store';
import { csrf_generator } from '../../../util/csrf_generator'


const init = data =>{
    return  dispatch =>{
    
        dispatch({
            type:THIRD_DOOR_IN_REQUEST
        });
        if(data.email && data.password){
            let datum = {
                'email':data.email,
                'password':data.password,
                'description':store.getState().Second.data.description,
                'fieldset':store.getState().Second.data.fieldSet,
                'niche':store.getState().Second.data.niche,
                'fullName':store.getState().FirstDoorIn.data.fullName,
                'dateOfBirth':store.getState().FirstDoorIn.data.dateOfBirth,
                'sex':store.getState().FirstDoorIn.data.sex
            };

            
            fetch('/users/create',{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    "Accept":"application/json, text/plian, */*",
                    "X-CSRFToken":csrf_generator("csrf-token")
                },
                body:JSON.stringify(datum)
            })
                .then(res =>res.json())
                .then(data =>{
                    if(data.status){
                        var email = data.data.email;
                        var password = data.data.password;
                        localStorage.setItem('USER_EMAIL', email);
                        localStorage.setItem("USER_PASS", password);
                        location.href = "/users/login";
                    }
                    
                })
        }
        
    }
}



export default init;