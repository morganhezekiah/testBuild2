import React,{ useEffect, useState } from 'react';
import './style.css';
import SendData from '../../store/Dispatch/Door_In/Third';
import { connect } from 'react-redux';
import Step from './StepsIndicator'

const Third = props =>{

    useEffect(()=>{
        if(document.getElementById("thirdStep")){
            document.getElementById("thirdStep").classList.add("active");
        }
    },[]);


    const [ formData, setFormData ] = useState({
        email:'',
        password:''
    });



    const [passwordError, setPasswordError] = useState({
        message:'',
        state:false
    });

    const [emailError, setemailError] = useState({
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
        if(e.target.name === "email"){
            if(e.target.value != ""){
                setemailError({
                    message:"",
                    state:false,
                });
            }else{
                setemailError({
                    message:"Please enter an email",
                    state:true,
                });
            }
        }
        setFormData ({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    useEffect(()=>{
        console.log(props.loading_data)
    });
   
     const handleSubmit =  (e) =>{
        e.preventDefault();

        if(formData.password === ""){
            setPasswordError({
                ...passwordError,
                message:"Please enter  a password ",
                state:true
            })
        }

        if(formData.email === ""){
            setemailError({
                ...emailError,
                message:"Please enter  a password ",
                state:true
            });
        }


        if(passwordError.state === false && emailError.state === false){
            let data = {'email':formData.email,'password':formData.password};
            props.third_screen_func(data);
        }
    }
    return (
        <div className="card card-body mainWrapper">
            <Step />
            <form className="form-horizontal" onSubmit={handleSubmit}>

                <div className="form_rounded_wrapper">
                    <div className="form-wrapper" >
                        <input type="text" required autoComplete="off" name="email" autoComplete="false" value={formData.email} onChange={handleChange}  />
                        <label><span>Email</span></label>
                    </div>    
                        <span className="error">
                            {
                                emailError.state && emailError.message
                            }
                        </span>
                </div>

                

                <div className="form_rounded_wrapper">
                    <div className="form-wrapper" >
                        <input type="password" required autoComplete="off" name="password" value={formData.password} onChange={handleChange}  />
                        <label><span>Password</span></label>
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
        loading_data:state.Loading
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        third_screen_func:(data)=>{dispatch(SendData(data))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Third);