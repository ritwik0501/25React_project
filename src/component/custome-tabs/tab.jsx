import { useState } from "react";

export default function Tabs({ tab, onChange }) {
  const [currentindex, setcureentindex] = useState(0);

  function handleclick(getcurrentindex) {
    setcureentindex(getcurrentindex);
    onChange(getcurrentindex);
  }
  return (
    <>
      <div>
        <div>
          {tab.map((tabitem,index) => (
            <button onClick={() => handleclick(index)}>
              <span>{tabitem.label}</span>
            </button>
          ))}
        </div>
        <div>{tab[currentindex] && tab[currentindex].content}</div>
      </div>
    </>
  );
}
