import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

export default function SearchAutoComplete() {
  const [user, setuser] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);
  const [searchquery, setsearchquery] = useState("");
  const [filterdata, setfilterdata] = useState([]);
const [dropdown,setdropdown]=useState(false)
  function handlechange(event) {
    const query = event.target.value.toLowerCase();
    setsearchquery(query);
    console.log(user)
    if (query.length > 1) {
      setfilterdata(
        user && user.length
          ? user.filter((item) => item.toLowerCase().includes(query))
          : []);
    }
    // setfilterdata(filterdata);
    setdropdown(true);
    console.log(filterdata);
  }

  async function fetchdata() {
    try {
      setloading(true);
      const responce = await fetch("https://dummyjson.com/users");
      const data = await responce.json();
      
      if (data && data.users && data.users.length) {
        setuser(data.users.map((userItem) => userItem.firstName));
        setloading(false);
        seterror(null);
      }
    } catch (error) {
      setloading(false);
      console.log(error);
      seterror(error);
    }
  }
  function handleclick(event){
    setdropdown(false);
    setsearchquery(event.target.innerText);
    setfilterdata([])
  }
  // if(loading){
  //     return <div>
  //         Loading...!please wait
  //     </div>
  // }

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <div> Loading...!please wait</div>
        ) : (
          <div>
            <input
              name="search-autocomplete"
              placeholder="search for result..."
              value={searchquery}
              onChange={handlechange}
            />
            <div onClick={handleclick}>
                {
                  filterdata && filterdata.length?
                  <ul>
                    {
                        filterdata.map((item)=>
                        <li onClick={handleclick}>{item}</li>
                        )
                    }
                  </ul>
                  :null
                }
             {/* {setdropdown && <Suggestion handleclick={handleclick} data={filterdata}/>} */}
            </div>
          </div>
        )}
      </div>
    
    </>
  );
}
