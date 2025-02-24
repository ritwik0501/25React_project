import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css"

export default function Imageslider({ url, page=1,limit=5 }) {
  const [image, setimage] = useState([]);
  const [currentslide, setcurrentslide] = useState(0);
  const [errormsg, seterrmsg] = useState(null);
  const [loading, setloading] = useState(false);

  async function fetchimage(geturl) {
    try {
      setloading(true);
      const responce = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await responce.json();

      if (data) {
        setimage(data);
        setloading(false);
      }
    } catch (error) {
      seterrmsg(error.message);
      setloading(false);
    }
  }

function handelprevious(){
setcurrentslide(currentslide===0 ?image.length-1:currentslide-1)
}
function handelNext(){
setcurrentslide(currentslide===image.length-1  ? 0:currentslide+1)
}


  useEffect(() => {
    if (url != "") fetchimage(url);
  }, [url]);

  console.log(image)
  if (loading) {
    return <div>Loading data! please wait</div>;
  }
  if (errormsg) {
    return <div>Error!{errormsg}</div>;
  }

  return <>
  <div className="container">
    <BsArrowLeftCircleFill  onClick={handelprevious}className="arrow arrow-left" />
    {
        image && image.length ? 
        image.map((imageitem,index)=>
        <img
        key={imageitem.id}
        alt={imageitem.download_url}
        src={imageitem.download_url}
        className={currentslide===index?"current-image":"current-image hide-current-image"}
        />
        )
        :null}

        <BsArrowRightCircleFill onClick={handelNext}className="arrow arrow-right"/>
        <span className="circle-indicators">
       {
        image && image ? 
        image.map((_,index)=>
        <button
        key={index}
        className="current-indicator"
        >

        </button>
        )
        :null
       }
    </span>
    
  </div>
  </>;
}
