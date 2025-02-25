// this is done by manual, when you learn making custome hooks ,that do it with custome hooks

import { useState } from "react";
import "./style.css"
export default function ThemeChanger(){
const [theme,settheme]=useState(localStorage.getItem("theme")||"white")
     
 function  themeChanger(){
    // theme==="white"? settheme("black"):settheme("white")
    {/* refactor*/}
    const newtheme=(theme === "white" ? "black" : "white");
    settheme(newtheme)
   
    localStorage.setItem("theme",newtheme);
 }
    return (
        <>
        <div className={theme}>
            <h3 style={{color:"red"}}>Hellow World!</h3>
            <button onClick={themeChanger} >Change Theme</button>
        </div>
        </>
    );
}


