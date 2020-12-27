import React, {useState, useEffect} from 'react';
import './style.css';
import { connect } from 'react-redux';
import requestFirstDoorin from '../../store/Dispatch/Door_In/First';
import requestChangeScreen from '../../store/Dispatch/Door_In/ChangeScreen';


const First = (props)=>{
    useEffect(()=>{
        if(props.first_door_in_data.data.fullName === formData.fullName){
            props.ChangeScreen("second");
        }
    }, [props.first_door_in_data]);

    useEffect(()=>{
        if(loading){
            setBtnClass("btn btn-outline-primary disabled");
        }else{
            setBtnClass("btn btn-outline-primary");
        }
    },[loading]);

    const [loading, setLoading] = useState(false);
    const [btnClass , setBtnClass] = useState("btn btn-outline-primary");
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
        setLoading(true);
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
            setLoading(false);
        }
        
    }

    return (
        <div className="card card-body mainWrapper">
            <div className="navigation_buttons"><div>&laquo; </div></div>
            <form className="form-horizontal" onSubmit={handleSubmit}> 
                <div className="steps_wrapper">
                    <div className="steps current" >1</div>
                    <div className="steps" >2</div>
                    <div className="steps" id="last_step">3</div>
                </div>
                <div className="form-group">
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="form-control" />
                    <span className="error">
                        {
                            fullNameerror.state && `${fullNameerror.message}`
                        }
                    </span>
                </div>

                <div className="sex_form_div">
                    <label>Sex</label><br />
                    <input type="radio" value="Male" id="sexInputMale"   name="sex" checked onChange={handleChange}     /><span className="ml-2 ">Male</span>
                    <input type="radio" value="Female"  name="sex" onChange={handleChange}   className="ml-2"  /><span className="ml-2 ">Female</span>
                </div>

                <div className="form-group mt-1">
                    <label>Date Of Birth</label>
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange}  className="form-control" />
                    <span className="error">
                        {
                            dateOfBirtherror.state && `${dateOfBirtherror.message}`
                        }
                    </span>
                    
                </div>

                <div className="center_button">
                    <input type="submit" className={btnClass} value="Continue" />
                </div>
            </form>
        </div>
    );
}
const mapStateToProps = state =>{
    return {
        first_door_in_data:state.FirstDoorIn
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        first_door_in_func:(data)=>{dispatch(requestFirstDoorin(data))},
        ChangeScreen:(data)=>{dispatch(requestChangeScreen(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(First);