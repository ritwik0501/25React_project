import { useEffect, useState } from "react";
import "./style.css";
export default function LoadmoreData() {
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(0);
  const [loading, setloading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  async function fetchProducts() {
    try {
      setloading(true);
      const data = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const responce = await data.json();
      console.log(responce);
      if (responce && responce.products && responce.products.length) {
        setproducts((prevproducts) => [ ...responce.products]);
        setloading(false);
      }
    } catch (e) {
      console.log(e);
      setloading(false);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);
  if (loading) {
    return <div>Product is loading.....!</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setcount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
