import React, { useState, useEffect } from 'react';
import './style.css';
import { fieldset,EntertainmentNiche } from './FieldSetAndNiche';
import SendData from '../../store/Dispatch/Door_In/Second';
import { connect } from 'react-redux';
import requestChangeScreen from '../../store/Dispatch/Door_In/ChangeScreen';
import Steps from './StepsIndicator';
import { dark, light } from '../../store/Dispatch/Theme/Index';
import ThemeToggler  from "../ThemeToggler";
import Logo from './Logo';


const Second = props => {

    useEffect(()=>{
        if(document.getElementById("secondStep")){
            document.getElementById("secondStep").classList.add("active");
        }
    },[]);

    useEffect(()=>{
        if(props.theme.darkTheme){
            setWrapperClass("card card-body darkMode mainWrapper");
        }else{
            setWrapperClass("card card-body lightMode mainWrapper");
        }
    },[props.theme.darkTheme]);

    const [wrapperClass, setWrapperClass] = useState("card card-body lightMode mainWrapper");
    
    const [formData, setFormData ] = useState({
        fieldset:"Entertainment",
        description:'',
        niche:'Film Producer'
    });
    

    const [currentNiche , setCurrentNiche] = useState([]);

    const [fieldsets , setFieldSet] = useState (fieldset);

    const [descriptionData,setdescriptionData] = useState(0);


    const [describeError, setDescribeError] = useState({
        message:"",
        state:false
    });

    useEffect(()=>{
        console.log(props.loading_data);
    });

    useEffect(()=>{
        setCurrentNiche(EntertainmentNiche);
    }, []);

    useEffect(()=>{
        if(props.second_screen_data.data.fieldSet == formData.fieldset){
            props.ChangeScreen("third");
        }
    }, [props.second_screen_data]);
    const handleChange = e =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    const descriptionChange = (e) =>{
        setdescriptionData(e.target.value.length);

        if(e.target.value != "" && e.target.value.length < 200){
            setDescribeError({
                'message':"",
                "state":false
            });                                                        
        }
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit =  (e)=>{
        e.preventDefault();
        if(formData.description === "" || descriptionData > 200){
            setDescribeError({
                'message':'Please enter a self description less than 200 characters in length',
                'state':true
            });
        }

        if(formData.description){
            let data = {'fieldSet':formData.fieldset, 'niche':formData.niche,'description':formData.description};
             props.second_screen_func(data);
        }
    }

    
    return (
        <div className={wrapperClass}>
            <Logo />
            <ThemeToggler />
            <Steps />
            <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="form-group">
                    <label>FieldSet</label>
                    <select name="fieldset" value={formData.fieldset} onChange={handleChange} className="form-control">
                        {
                            fieldsets.map((fieldset,index)=>{
                                return (
                                    <option value={fieldset} key={index}>{fieldset}</option>
                                )
                                })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label>Niche</label>
                    <select name="niche"  onChange={handleChange} className="form-control">
                        {
                            currentNiche.map( (niche, index)=>{
                                return (
                                    <option value={niche} key={index}>{niche}</option>
                                )
                                })
                        }
                    </select>

                    
                </div>

                <div className="form_rounded_wrapper" style={{"padding": "2px 10px 34px 10px"}}>
                    <div class="input-field">
                        <textarea   value={formData.description} name="description" onChange={descriptionChange} class="materialize-textarea"></textarea>
                        <label htmlFor="textarea1" style={{"pointerEvents":"none"}}>Describe Yourselve({descriptionData}/200)</label>
                        <span className="error">
                                {
                                    describeError.state && `${describeError.message}`
                                }
                        </span>
                    </div>  
                </div>

                

                <div className="form-group center_button">
                    {
                        props.loading_data.loading ? <input type="submit" className="btn btn-primary btns disabled" value="Continue" />:<input type="submit" className="btn btn-primary btns" value="Continue" />
                    }
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        second_screen_data:state.Second,
        loading_data:state.Loading,
        theme:state.Theme,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        second_screen_func:(data)=>{dispatch(SendData(data))},
        ChangeScreen :(screen) =>{dispatch(requestChangeScreen(screen))},
        date_theme_func:()=>{dispatch(dark())},
        light_theme_func:()=>{dispatch(light())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Second);