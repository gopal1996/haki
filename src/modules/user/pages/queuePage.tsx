import React from "react";
import data from "../mockdata/queue.json";
import "./styles.css";


export function QueueCompoenet(){
    const queue = data;
    console.log(queue)
    return <div className="queueContainer">
        {
         queue.map((item:any)=>{return<div className="container" key={item.id}>
          <div className="profile">{item.name.at(0)}</div>
          <div className="nameContainer">{item.name}</div>
         </div>

            })
        }
    </div>
}