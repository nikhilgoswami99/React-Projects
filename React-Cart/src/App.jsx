import { useState, useEffect} from "react";
import styles from "./App.module.css";
import Navbar from "./components/navbar/nav";
import Card from "./components/card/card";

function App() {
  const data = [
    {
      id: 1,
      name: "Samsung Galaxy S8",
      price: 399.99,
      img_link: "https://www.course-api.com/images/cart/phone-1.png",
    },
    {
      id: 2,
      name: "Google Pixel",
      price: 499.99,
      img_link: "https://www.course-api.com/images/cart/phone-2.png",
    },
    {
      id: 3,
      name: "Xiaomi Redmi Note 2",
      price: 699.99,
      img_link: "https://www.course-api.com/images/cart/phone-3.png",
    },
    {
      id: 4,
      name: "Samsung Galaxy S7",
      price: 599.99,
      img_link: "https://www.course-api.com/images/cart/phone-4.png",
    },
  ];

  let [cards, setCards] = useState(data);
  let [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cards.reduce((acc, obj) => acc + obj.price, 0);
    setTotalPrice(newTotalPrice);
  }, []);

  function clearCart()
  { 
    setCards([]);
    setTotalPrice(0);
  }

  function removeCard(idx) {
    setCards(
      cards.filter((obj, index) => {
        if (idx !== index) {
          return obj;
        }
      })
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <h1 className={styles.cart_heading}>YOUR BAG</h1>
      <div className={styles.card_container}>
        {cards.map((obj, index) => {
          return (
            <Card
              key={index}
              {...obj}
              idx={index}
              deleteCard={() => {
                removeCard(index);
              }}
            ></Card>
          );
        })}
      </div>

      <div className={styles.total_items}>
        <h5 className={styles.total_text}>Total</h5>
        <button onClick={clearCart} className={styles.clearAll}>Clear Cart</button>
        <p className={styles.total_amount}>${totalPrice}</p>
      </div>
    </>
  );
}

export default App;
