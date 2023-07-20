import React from "react";
import data from "../mockdata/question.json";
import "./styles.css";


export function QuestionComponets(){
    const queue = data;
    console.log(queue)
    return <div className="outerContainer">
        {
         queue.map((item:any,index:number)=>{return<div className="subContainer" key={item.id}>
          <div  className="questionContainer"><span className="serialNumber">{index+1}.</span>{item.question}</div>
                   <div className="answerContainer">
                     {
                        item.answer.map((value:any)=>{
                       return <div className="answer">{value}</div>
                                    
                        })
                     }
                   </div>
                           
         </div>

            })
        }
    </div>
}