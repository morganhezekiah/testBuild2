import React, { useState, useEffect } from 'react';
import './style.css';
import { fieldset,EntertainmentNiche } from './FieldSetAndNiche';
import SendData from '../../store/Dispatch/Door_In/Second';
import { connect } from 'react-redux';
import requestChangeScreen from '../../store/Dispatch/Door_In/ChangeScreen';
import Steps from './StepsIndicator';


const Second = props => {

    useEffect(()=>{
        if(document.getElementById("secondStep")){
            document.getElementById("secondStep").classList.add("active");
        }
    },[]);
    
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
        <div className="card card-body mainWrapper">
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

                <div className="form-group">
                    <label>Describe Yourselve({descriptionData}/200)</label>
                        <textarea value={formData.description} name="description" onChange={descriptionChange}  className="form-control"></textarea>
                        <span className="error">
                            {
                                describeError.state && `${describeError.message}`
                            }
                        </span>
                </div>

                <div className="form-group center_button">
                    {
                        props.loading_data.loading ? <input type="submit" className="btn btn-outline-primary disabled" value="Continue" />:<input type="submit" className="btn btn-outline-primary" value="Continue" />
                    }
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        second_screen_data:state.Second,
        loading_data:state.Loading
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        second_screen_func:(data)=>{dispatch(SendData(data))},
        ChangeScreen :(screen) =>{dispatch(requestChangeScreen(screen))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Second);