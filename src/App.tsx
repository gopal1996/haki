import React, { useState } from "react";
import {UseWarpper} from "./modules/user/index";
import {AdminWarpper} from "./modules/admin/index";
import "./index.css"


export const App = () => {
const [isAdmin,setIsAdmin]=useState(false)
return (
 <div className="mainContainer">
  {
    isAdmin ?
    <AdminWarpper/> :<UseWarpper/>
  }
 </div>
  );
};
