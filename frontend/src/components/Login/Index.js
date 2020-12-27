import React,{useState, useEffect } from 'react';
import './style.css';
import { csrf_generator } from '../../util/csrf_generator';

const Index = props =>{
    const [formData, setFormData] = useState({"email":'',"password":''});
    const handleChange = e=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });

    }

    useEffect(()=>{
        let email = localStorage.getItem("USER_EMAIL");
        let password = localStorage.getItem("USER_PASS");

        if (email && password)
        {
            setFormData({
                'email':email,
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
        <div className="mainWrapper">
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="email" autoComplete="off" onChange = {handleChange} value={formData.email} className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <input type="password" name="password" autoComplete="off" onChange = {handleChange} value={formData.password} className="form-control" placeholder="Email" />
                </div>

                <div className="center_button">
                    <input type="submit" className="btn btn-outline-primary" />
                </div>
            </form>
        </div>
    )
}

export default Index;