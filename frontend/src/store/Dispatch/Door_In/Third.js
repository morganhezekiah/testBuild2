import {THIRD_DOOR_IN_REQUEST, THIRD_DOOR_IN_REQUEST_ERROR, THIRD_DOOR_IN_REQUEST_SUCCESS} from '../../Action/Door_In';
import store from '../../store';
import swal from 'sweetalert';
import { APP_LOADING, APP_NOT_LOADING } from '../../Action/Loading';



function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const init = data =>{
    return  dispatch =>{
        dispatch({
            type:THIRD_DOOR_IN_REQUEST
        });
        dispatch({
            type:APP_LOADING
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

            dispatch({
                type:APP_LOADING
            });
            fetch('/users/create',{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    "Accept":"application/json,text/plain, */*",
                    'X-CSRFToken':getCookie('csrftoken')
                },
                body:JSON.stringify(datum)
            })
                .then(res =>{
                    return res.json();
                })
                .then(data =>{
                    if(data.status){
                        var email = data.data.email;
                        var password = data.data.password;
                        localStorage.setItem('USER_EMAIL', email);
                        localStorage.setItem("USER_PASS", password);
                        location.href = "/users/login";
                    }else{
                        swal("Ooops!!! There seems to be an error with your request.Please fill  all data and try again");
                    }
                    dispatch({
                        type:APP_NOT_LOADING
                    });
                    
                })
        }
        
    }
}



export default init;