// import { useEffect, useState } from "react";
// import User from "./user";

// export default function Githubfinder(){
//     const[serachdata,setsearchdata]=useState("ritwik0501");
//     const [data,setdata]=useState(null);

//    async function findgithubdata(){
//     const responce= await fetch(`https://api.github.com/users/${serachdata}`)
//     const responcedata= await responce.json();
//     if(responcedata){
//         setdata(responcedata);
//         setsearchdata("");
//     }
//     console.log(data);
//    }

//    useEffect(()=>{
//     findgithubdata();
//    },[setsearchdata])
//    return(<>
//     <div>
//         <input
//         type="text"
//         placeholder="Search Profile here"
//         value={serachdata}
//         onChange={(e)=>setsearchdata(e.target.value)}
//         />
//         <button onClick={()=>findgithubdata()}>search</button>
//         <div>
//            {/* {data!=null? <User userdata={data}/>:null} */}
//         </div>
//     </div>
    
//     </>);
// }

import { useEffect, useState } from "react";
// import User from "./user";

export default function GithubFinder() {
    const [serachdata, setSearchData] = useState("ritwik0501");
    const [data, setData] = useState(null);

    async function findGithubData() {
        try {
            const response = await fetch(`https://api.github.com/users/${serachdata}`);
            const responseData = await response.json();
            if (responseData) {
                setData(responseData);
            }
        } catch (error) {
            console.error("Error fetching GitHub data:", error);
        }
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Search Profile here"
                    value={serachdata}
                    onChange={(e) => setSearchData(e.target.value)}
                />
                <button onClick={findGithubData}>Search</button>
                <div>
                    {/* {data !== null ? <User userdata={data} /> : null} */}
                </div>
            </div>
        </>
    );
}
