import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import "./App.css";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";
const getdata = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data.map((item) => ({
    ...item,
    quantity: 1,
  })); 
  return data;
};

const App = () => {
  const { data, isError, error, isLoading, isFetching, isStale} = useQuery("items", getdata, {refetchOnWindowFocus:false, staleTime:10000, cacheTime:  10000000});

  const [items, setitems] = useState();
  const [hello, setHello] = useState(true)
  useEffect(() => {
    if(hello){
      setitems(data)
      // data !== {} && setHello(!hello)
    }
  }, [data]);

  const [cart, setCart] = useState([]);

  const incrementQuantity = (item) => {
    // const updatedQuantity = {...items[itemId], quantity: items[itemId].quantity+1}
    // const updatedQuantity = { ...item, quantity: item.quantity + 1 };
    // const hello = items[item.id].quantity;
    // setitems(items)
    setitems((prev) => [
      ...prev.slice(0, item.id - 1),
      { ...item, quantity: item.quantity + 1 },
      ...prev.slice(item.id),
    ]);
  };

  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      setitems((prev) => [
        ...prev.slice(0, item.id - 1),
        { ...item, quantity: item.quantity - 1 },
        ...prev.slice(item.id),
      ]);
    }
  };
 
  const addCart = (item) => {
    setCart(() => [...cart, item]);
  };
  

  
  if (isLoading) {
    return (
      <div className="loading-container">
        <img className="loading-gif" src="https://media.giphy.com/media/vbeNMLuswd7RR25lah/giphy.gif" alt="Loading" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="error-container">
        <img className="error-gif" src="https://media.giphy.com/media/FYUnDtud95kMKCovAY/giphy.gif" alt="Error" />
        <h2 className="error-message">{error.message}</h2>
      </div>
    );
  }
  

  return (
    <>
      <Navbar cart={cart}/>
      <div className="container">
        {items  &&
          items.map((item) => (
            <ItemCard
              item={item}
              incrementQuantity={() => incrementQuantity(item)}
              decrementQuantity={() => decrementQuantity(item)}
              addCart={() => addCart(item)}
            />
          ))}
      </div>
    </>
  );
};

export default App;
