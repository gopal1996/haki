import React from "react";
import {LogIn} from "../../../components/login";

type PinComponentProps = { 
  onNext?: Function;
};


export function PinComponent({onNext=()=>{}}:PinComponentProps){
    return <LogIn type={"number"} onTextChange={()=>{}} onButtonClick={()=>{onNext()}} buttonName={"Submit"} placeholder={"Enter the pin"}/>
}