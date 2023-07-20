import React,{useState} from "react";

import {PinComponent,NameComponents,QueueCompoenet,QuestionComponets,RankCompoents} from "./pages/index";



export function UseWarpper(){
    const PageObj={
    pin:"pin",
    name:"name",
    queue:"queue",
    question:"question",
    rank:"rank"
}

const [page,setPage]=useState<string>("pin");

function onNext(){
    switch(page){
        case "pin":
           setPage(PageObj.name);
           break;
        case "name":
           setPage(PageObj.queue);
           break;
        case "queue":
           setPage(PageObj.rank);
           break;
         case "rank":
           setPage("");
          break;
    }

}
    return <>
   { page===PageObj.pin &&<PinComponent onNext={onNext} />}
   { page===PageObj.name &&<NameComponents onNext={onNext}/>}
   {page === PageObj.queue&&<QueueCompoenet/>} 
   {page === PageObj.question&&<QuestionComponets/>}
   {page === PageObj.rank&&<RankCompoents/>}
</>
}