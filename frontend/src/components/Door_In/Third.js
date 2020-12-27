import React,{ useEffect, useState } from 'react';
import './style.css';
import SendData from '../../store/Dispatch/Door_In/Third';
import { connect } from 'react-redux';

const Third = props =>{
    const [ formData, setFormData ] = useState({
        email:'',
        password:''
    });

    const [loading, setLoading] = useState(false);
    const [btnClass, setBtnClass] = useState("btn btn-outline-primary");

    useEffect(()=>{
        if(loading){
            setBtnClass("btn btn-outline-primary disabled");
        }else{
            setBtnClass("btn btn-outline-primary");
        }
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
    const submit =e=>{
        e.preventDefault();
        handleSubmit();
    }
    async function handleSubmit (e){
        setLoading(true);

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
            await props.third_screen_func(data);
        }
        setLoading(false);
    }
    return (
        <div className="card card-body mainWrapper">
            <form className="form-horizontal" onSubmit={submit}>
                <div className="steps_wrapper">
                    <div className="steps" >1</div>
                    <div className="steps" >2</div>
                    <div className="steps current" id="last_step">3</div>
                </div>
                <div className="form-group">
                    <input type="text" name="email" autoComplete="false" value={formData.email} onChange={handleChange} placeholder="email" className="form-control" />
                    <span className="error">
                        {
                            emailError.state && emailError.message
                        }
                    </span>

                </div>
                <div className="form-group">
                    <input type="password" name="password" value={formData.password} onChange={handleChange}  placeholder="Password" className="form-control" />
                    <span className="error">
                        {
                            passwordError.state && passwordError.message
                        }
                    </span>
                </div>
                <div className="form-group center_button">
                    <input type="submit" className= {btnClass} value="Door In" />
                </div>
            </form>
        </div>
    );
}


const mapStateToProps = state =>{
    return {
        third_screen_data:state.third
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        third_screen_func:(data)=>{dispatch(SendData(data))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Third);