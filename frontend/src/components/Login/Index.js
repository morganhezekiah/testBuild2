import React,{useState, useEffect } from 'react';
import '../Door_In/style.css';
import { csrf_generator } from '../../util/csrf_generator';
import ThemeToggler from '../ThemeToggler';
import { dark , light } from '../../store/Dispatch/Theme/Index';
import { connect } from 'react-redux';
import Logo from '../Door_In/Logo';

const Index = props =>{
    const [formData, setFormData] = useState({"acct_no":'',"password":''});
    const handleChange = e=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });

    }
    useEffect(()=>{
        if(props.theme.darkTheme){
            setWrapperClass("card card-body darkMode mainWrapper");
        }else{
            setWrapperClass("card card-body lightMode mainWrapper");
        }
    },[props.theme.darkTheme]);

    const [wrapperClass, setWrapperClass] = useState("card card-body lightMode mainWrapper");

    useEffect(()=>{
        let acct_no = localStorage.getItem("USER_ACCT");
        let password = localStorage.getItem("USER_PASS");

        if (acct_no && password)
        {
            setFormData({
                'acct_no':acct_no,
                'password':password
            });
        }
    }, [])

    const handleSubmit = e=>{
        e.preventDefault();

        fetch('/users/loginUser', {
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json,text/plain, */*",
                "X-CSRFToken":csrf_generator('csrftoken')
            },
            body:JSON.stringify(formData)
        })
            .then(res=>res.json())
            .then(data =>{
                if(data.status){
                    location.href="/users/home"
                }
            })
    }
     
    return (
        <div className={wrapperClass}>
            <Logo />
            <ThemeToggler />
            <form className="form-horizontal" onSubmit={handleSubmit}>

                <div className="form_rounded_wrapper">
                    <div class="input-field">
                        <input type="text" name="acct_no" autoComplete="off" onChange = {handleChange} value={formData.acct_no} className="form-control" placeholder="Acct no." />
                        <label for="last_name">Last Name</label>
                    </div>
                    
                    {/* <span className="error">
                                {
                                    fullNameerror.state && `${fullNameerror.message}`
                                }
                    </span>  */}
                </div>

                <div className="form_rounded_wrapper">
                    <div class="input-field">
                        <input type="password" name="password" autoComplete="off" onChange = {handleChange} value={formData.password} className="form-control" placeholder="Password" />
                        <label for="last_name">Password</label>
                    </div>
                    
                    {/* <span className="error">
                                {
                                    fullNameerror.state && `${fullNameerror.message}`
                                }
                    </span>  */}
                </div>
                

                <div className="center_button">
                    <input type="submit" className="btn btn-outline-primary" />
                </div>
            </form>
        </div>
    )
}



const mapStateToProps = state =>{
    return {
        theme:state.Theme,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        date_theme_func:()=>{dispatch(dark())},
        light_theme_func:()=>{dispatch(light())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);