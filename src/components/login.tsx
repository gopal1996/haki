import React from "react";
import "./styles.css";

type LogInProps = {
  type?: string;
  onTextChange: Function;
  onButtonClick?: Function;
  buttonName?: string;
  placeholder:string;
};

export function LogIn(props:LogInProps){
    const {type,onTextChange,buttonName,onButtonClick=()=>{},placeholder}=props;
    return < div className="AppConatiner">
     <div className="AppName">HAKI</div>
     <div className="logInContainer">
     
        <input type={"text"} onChange={(e) => { onTextChange(e.target.value); } } placeholder={placeholder} />
        <button onClick={(e) => { onButtonClick(e); } }>{buttonName}</button>
    </div></div>
}