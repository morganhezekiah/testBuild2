import React,{ useEffect, useState } from 'react';
import './style.css';
import SendData from '../../store/Dispatch/Door_In/Third';
import { connect } from 'react-redux';
import Step from './StepsIndicator';
import { dark, light } from '../../store/Dispatch/Theme/Index';
import ThemeToggler  from "../ThemeToggler";

const Third = props =>{

    useEffect(()=>{
        if(document.getElementById("thirdStep")){
            document.getElementById("thirdStep").classList.add("active");
        }
    },[]);


    const [ formData, setFormData ] = useState({
        acct_no:'',
        password:''
    });

    useEffect(()=>{
        if(props.theme.darkTheme){
            setWrapperClass("card card-body darkMode mainWrapper");
        }else{
            setWrapperClass("card card-body lightMode mainWrapper");
        }
    },[props.theme.darkTheme]);

    const [wrapperClass, setWrapperClass] = useState("card card-body lightMode mainWrapper");


    const [passwordError, setPasswordError] = useState({
        message:'',
        state:false
    });

    const [acct_noError, setacct_noError] = useState({
        message:'',
        state:false
    });
    const handleChange = e=>{
        if(e.target.name === "password"){
            if(e.target.value != ""){
                setPasswordError({
                    message:"",
                    state:false,
                })
            }else{
                setPasswordError({
                    message:"Please enter a password",
                    state:true,
                });
            }
        }
        if(e.target.name === "acct_no"){
            if(e.target.value != ""){
                setacct_noError({
                    message:"",
                    state:false,
                });
            }else{
                setacct_noError({
                    message:"Please enter an acct_no",
                    state:true,
                });
            }
        }
        setFormData ({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

   
     const handleSubmit =  (e) =>{
        e.preventDefault();

        if(formData.password === ""){
            setPasswordError({
                ...passwordError,
                message:"Please enter  a password ",
                state:true
            })
        }

        if(formData.acct_no === ""){
            setacct_noError({
                ...acct_noError,
                message:"Please enter  a password ",
                state:true
            });
        }


        if(passwordError.state === false && acct_noError.state === false){
            let data = {'acct_no':formData.acct_no,'password':formData.password};
            props.third_screen_func(data);
        }
    }
    return (
        <div className={wrapperClass}>
            <ThemeToggler />
            <Step />
            <form className="form-horizontal" onSubmit={handleSubmit}>

                <div className="form_rounded_wrapper">
                    <div class="input-field">
                        <input type="text" required autoComplete="off" name="acct_no" autoComplete="false" value={formData.acct_no} onChange={handleChange}  />
                        <label for="last_name">Acct No.</label>
                    </div>
                    
                    <span className="error">
                            {
                                acct_noError.state && acct_noError.message
                            }
                    </span>
                </div>

                

                <div className="form_rounded_wrapper">
                    <div className="form-wrapper" >
                        <input type="password" required autoComplete="off" name="password" value={formData.password} onChange={handleChange}  />
                        <label for="last_name">Password</label>
                    </div>    
                        <span className="error">
                            {
                                passwordError.state && passwordError.message
                            }
                        </span>
                </div>
                <div className="form-group center_button">
                    {
                        props.loading_data.loading ? <input type="submit" className="btn btn-primary btns disabled" value="Continue" />:<input type="submit" className="btn btn-primary btns" value="Continue" />
                    }
                </div>
            </form>
        </div>
    );
}


const mapStateToProps = state =>{
    return {
        third_screen_data:state.third,
        loading_data:state.Loading,
        theme:state.Theme
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        third_screen_func:(data)=>{dispatch(SendData(data))},
        date_theme_func:()=>{dispatch(dark())},
        light_theme_func:()=>{dispatch(light())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Third);