import { useState } from "react"
import { FaStar } from "react-icons/fa"
import "./style.css"
export default function Star({noofstar=5}){
    const [rating,setrating]=useState(0)
    const [hover,setover]=useState(0)
    function handleclick(getindex){
        setrating(getindex)
        console.log("rate",rating)
    }
    function handelmousehover(getindex){
        console.log("click",getindex)
    }
    function handelmouseleave(getindex){
        console.log(getindex)
    }
    return <>
    <div>
       {
        [...Array(noofstar)].map((_,index)=>{
            index+=1
      
            return <FaStar
            key={index}
            className={index<=rating && index!=rating?'active':'inactive'}
        
            onClick={()=>handleclick(index)}
            onMouseMoveCapture={()=>handelmousehover(index)}
            onMouseLeave={()=>handelmouseleave(index)}
            size={40}
            />
        })
       }
    </div>
    </>
}