import React from "react";
import {LogIn} from "../../../components/login";

type NameComponentsProps = { 
  onNext?: Function;
};

export function NameComponents({onNext=()=>{}}:NameComponentsProps){
    return <LogIn type={"text"} onTextChange={()=>{}} onButtonClick={()=>{onNext()}} buttonName={"Enter"} placeholder={"Enter the Name"}/>
}