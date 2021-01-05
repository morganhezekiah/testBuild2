import React, {useState, useEffect} from 'react';
import './style.css';
import { connect } from 'react-redux';
import requestFirstDoorin from '../../store/Dispatch/Door_In/First';
import requestChangeScreen from '../../store/Dispatch/Door_In/ChangeScreen';
import Steps from './StepsIndicator';
import ThemeToggler  from "../ThemeToggler";
import { dark, light } from '../../store/Dispatch/Theme/Index';




const First = (props)=>{
    useEffect(()=>{
        if(props.first_door_in_data.data.fullName === formData.fullName){
            props.ChangeScreen("second");
        }
    }, [props.first_door_in_data]);

    const [wrapperClass, setWrapperClass] = useState("card card-body lightMode mainWrapper");


    useEffect(()=>{
        if(document.getElementById("firstStep")){
            document.getElementById("firstStep").classList.add("active");
        }
    },[]);

    useEffect(()=>{
        if(props.theme.darkTheme){
            setWrapperClass("card card-body darkMode mainWrapper");
        }else{
            setWrapperClass("card card-body lightMode mainWrapper");
        }
    },[props.theme.darkTheme]);

    const [formData, setFormData] = useState({
        fullName:'',
        dateOfBirth:''
    });

    const [fullNameerror,setFullNameError] = useState  (
            {
                message:"",
                state:false
            }
            
    );

    const [dateOfBirtherror,setdateOfBirthError] = useState  (
            {
                message:"",
                state:false
            }
            
    );


    const handleChange = (e)=>{
        if(e.target.name === "fullName"){
            if(e.target.value != ""){
                setFullNameError(
                    {
                        message:"",
                        state:false
                    }
                )
            }
        }
        

        if(e.target.name == "dateOfBirth"){
            if(e.target.value != ""){
                setdateOfBirthError(
                    {
                        message:"",
                        state:false
                    }
                )
            }
        }
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(formData.fullName == ""){
            setFullNameError({
                        message:"Please enter a date of Full name value",
                        state:true
                    }
            );
        }
        

        if(formData.dateOfBirth == ""){
            setdateOfBirthError(
                {
                    message:"Please enter a date of birth value",
                    state:true
                }
            );
        }
        let sexValue = "Female";
        if(document.getElementById("sexInputMale").checked){
            sexValue ="Male";
        }
        
        if(dateOfBirtherror.state === false && fullNameerror.state === false){
            let data = {
                fullName:formData.fullName,
                dateOfBirth:formData.dateOfBirth,
                sex:sexValue
            }
            props.first_door_in_func(data);
        }
        
        
    }

    return (
        
    <div className={wrapperClass}>
            <ThemeToggler />
            <Steps />
            <form className="form-horizontal" onSubmit={handleSubmit}> 
            <input type="text" class="datepicker" />

                <div className="form_rounded_wrapper">
                    <div class="input-field">
                        <input id="last_name" name="fullName" value={formData.fullName} onChange={handleChange} type="text" class="validate" />
                        <label for="last_name">Last Name</label>
                    </div>
                    
                    <span className="error">
                                {
                                    fullNameerror.state && `${fullNameerror.message}`
                                }
                    </span> 
                </div>

                <div className="form_rounded_wrapper">
                    <p>Sex</p>
                    <div style={{'display':"flex"}}>
                        <p>
                            <label>
                                <input  type="radio" value="Male" id="sexInputMale"   name="sex" checked onChange={handleChange}  />
                                <span>Male</span>
                            </label>
                        </p>
                        <p className="ml-5">
                            <label>
                                <input type="radio" value="Female"  name="sex" onChange={handleChange}  />
                                <span>Female</span>
                            </label>
                        </p>
                    </div>
                </div>

                

                <div className="form_rounded_wrapper">
                    <div class="input-field">
                        <input  type="date" required  name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} class="validate" />
                        <label for="last_name">Date Of Birth</label>
                    </div>
                    
                    <span className="error">
                            {
                                dateOfBirtherror.state && `${dateOfBirtherror.message}`
                            }
                    </span> 
                </div>
                    
                

                <div className="center_button">
                    <input type="submit" className="btn btn-primary btns" value="Continue" />
                </div>
            </form>
        </div>

    );
}
const mapStateToProps = state =>{
    return {
        first_door_in_data:state.FirstDoorIn,
        theme:state.Theme,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        
        first_door_in_func:(data)=>{dispatch(requestFirstDoorin(data))},
        ChangeScreen:(data)=>{dispatch(requestChangeScreen(data))},
        date_theme_func:()=>{dispatch(dark())},
        light_theme_func:()=>{dispatch(light())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(First);