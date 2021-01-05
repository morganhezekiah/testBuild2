import React,{ useEffect , useState} from 'react';
import '../components/Door_In/style.css';
import { connect } from 'react-redux';
import { light , dark } from '../store/Dispatch/Theme/Index';
 const  ThemeToggler = props => {
    const [classes, setClasses ] = useState("toggler light");
    useEffect(()=>{
        let themeSaved = localStorage.getItem("DARK_THEME");
        console.log(typeof(themeSaved))
        if(themeSaved){
            if(themeSaved === "true"){
                handleDark();
            }else{
                handleLight();
            }
        }else{
            handleLight();
        }
    },[]);

    const handleLight = ()=>{
        setClasses("toggler light");
        props.light_theme_func();
    }

    const handleDark = ()=>{
        setClasses("toggler dark");
        props.dark_theme_func();
    }

    const handleToggler = ()=>{
        if(props.theme.darkTheme){
            handleLight()
        }else{
            handleDark();
        }
    }
    return (
        <div className="toggleContainer" onClick={handleToggler}>
                <div className={classes}>
                </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        theme:state.Theme
    }
}

const mapStateToDispatch = dispatch =>{
    return {
        dark_theme_func :()=>{dispatch(dark())},
        light_theme_func:()=>{dispatch(light())}
    }
}
export default connect(mapStateToProps,mapStateToDispatch)(ThemeToggler);