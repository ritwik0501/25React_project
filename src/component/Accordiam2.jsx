import { useState } from "react";
import data from "./data";

export default function accrodiam() {
  const [selected, setselected] = useState(null);
  const [multiselected, setmultiselected] = useState(false);
  const [multiplearr, setmultiplearr] = useState([]);
  const handelclick = (dataitem) => {
    console.log(dataitem);
    setselected(dataitem === selected ? null : dataitem);
  };
  const multihandelclick = (dataitem) => {
    console.log("multiselected", dataitem);
    const cpymultiple = [...multiplearr];
    const getindexofid = cpymultiple.indexOf(dataitem);
    if (getindexofid === -1) cpymultiple.push(dataitem);
    else cpymultiple.splice(getindexofid, 1);
    setmultiplearr(cpymultiple);
    console.log(cpymultiple);
  };
  return (
    <>
      <div>
        <button onClick={() => setmultiselected(!multiselected)}>
          Multiselected Button
        </button>
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div
              onClick={
                multiselected
                  ? () => multihandelclick(dataitem.id)
                  : () => handelclick(dataitem.id)
              }
            >
              <h3>{dataitem.question}</h3>
              {multiselected ? (
                multiplearr.indexOf(dataitem.id) !== -1 ? (
                  <div>
                    <div>-</div>
                    {dataitem.answer}
                  </div>
                ) : (
                  <span>+</span>
                )
              ) : selected === dataitem.id ? (
                <div>
                  <div>-</div>
                  {dataitem.answer}
                </div>
              ) : (
                <span>+</span>
              )}
              {/* {selected===dataitem.id ?:<span>+</span> } */}
              {/* {selected===dataitem.id ||multiplearr.indexOf(dataitem.id)!==-1 ?:<div>+</div> } */}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </>
  );
}
