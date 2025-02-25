
//not completedgit remote set-url origin git@github.com:ritwik0501/25React_project.git

import { useEffect, useState } from "react";
import User from "./user";

export default function Githubfinder(){
    const[searchdata,setsearchdata]=useState("ritwik0501");
    const [data,setdata]=useState(null);

   async function findgithubdata(){
    const responce= await fetch(`https://api.github.com/users/${searchdata}`)
    const responcedata= await responce.json();
    if(responcedata){
        setdata(responcedata);
        setsearchdata("");
    }
    console.log(data);
   }

   useEffect(()=>{
    findgithubdata();
   },[])
   return(<>
    <div>
        <input
        type="text"
        placeholder="Search Profile here"
        value={searchdata}
        onChange={(e)=>setsearchdata(e.target.value)}
        />
        <button onClick={()=>findgithubdata()}>search</button>
        <div>
           {/* {data!=null? <User userdata={data}/>:null} */}
        </div>
    </div>
    
    </>);
}

