import { useState } from "react"

export default function color(){
    const [color,setcolor]=useState(null)
    const randomcolor=()=>{
        const random=Math.floor(Math.random() * 256)
        const random1=Math.floor(Math.random() * 256)
        const random2=Math.floor(Math.random() * 256)
        const backcolor=`rgb(${random},${random1},${random2})`
        setcolor(backcolor)
        console.log(color)
    }
    const randomcolorhexa=()=>{
        const letters="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let colors="#"
        for(let i=0;i<6;i++){
            colors += letters[(Math.floor(Math.random() * 16))];//copy from internet,search by me, fell enjoy to do this project and love to do 
        }
        console.log(colors)
        setcolor(colors)
    }
    return<>
    <div style={{backgroundColor:color,height:"100px",width:"5000px"}}>
        <button onClick={()=>randomcolor()} >Generate random color</button>
        <button onClick={()=>randomcolor()} >Generate rgb color </button>
        <button onClick={()=>randomcolorhexa()} >Generate hexa color</button>
        <div>{color}</div>
    </div>
    </>
}