import { useEffect } from "react";
import { useState } from "react";
import "./scroll.css"
export default function ScrollIndicator({ url }) {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const [scrollpercentage, setscrollpercentage] = useState(0);

  async function fetchdata(url) {
    try {
      setloading(true);
      const responce = await fetch(url);
      const responcedata = await responce.json();

      if (
        responcedata &&
        responcedata.products &&
        responcedata.products.length > 0
      ) {
        setdata(responcedata.products);
        setloading(false);
      }
    } catch (error) {
      setloading(false);
      console.log(error);
      seterror(error.message);
    }
  }

  useEffect(() => {
    fetchdata(url);
  }, [url]);

  // it use body or  documentElement beacse sometime body does not work in old browser
  function handlescrollpercentage() {
    const howmuchscrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setscrollpercentage((howmuchscrolled / height) * 100);

  }
  //   useeffect for scrolll
  useEffect(() => {
    window.addEventListener("scroll", handlescrollpercentage);

    return () => {
      window.removeEventListener("scroll", handlescrollpercentage);
    };
  }, []);


  if (loading) {
    return (
      <>
        <h3>Loading.....please wait</h3>
      </>
    );
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollpercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}