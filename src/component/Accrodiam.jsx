import { useState } from "react";
import data from "./data";
export default function accrodiam() {
  const [selected, setselected] = useState(null);
 function handelclick(dataitem) {
    console.log(dataitem);
    setselected(dataitem);
  };
  
  return (
    <>
      <div>
        {data && data.length > 0 ? 
         
            data.map((dataitem) => (
              <div onClick={() => handelclick(dataitem.id)}>
               <div> <h3>{dataitem.question}</h3>
               
               <span>+</span></div>
          { selected === dataitem.id ? <div>{dataitem.answer}</div> : null}
              </div>
            ))
            
         
         : (
          <div>no data found</div>
        )}
      </div>
    </>
  );
}
