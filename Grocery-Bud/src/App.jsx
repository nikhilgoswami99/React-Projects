import { useEffect, useState } from "react";
import "./App.css";
import Item from "./componenets/grocery-items/item";

function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");

  useEffect(() => {
    let savedData = JSON.parse(localStorage.getItem("items")) || [];
    setData(savedData);
  }, [newData]);

  function addItem() {
    if (newData) {
      let newArr = [...data, newData];
      setData(newArr);
      setNewData("");

      localStorage.setItem("items", JSON.stringify(newArr));
    } else {
      alert("Input field is empty");
    }
  }

  // logic for taking input
  function inputText(e) {
    setNewData(e.target.value.trim());
  }

  //logic for deleting items
  function deleteItems(e, idx) {
    let arr = data.filter((item, index) => {
      if (index === idx) {
        return data.splice(idx, 1);
        localStorage.setItem("items", JSON.stringify(arr));
        setData(arr);
      }
    });
    console.log(arr);
  }

  return (
    <>
      <div className="container">
        <h2>My Grocery List</h2>
        <div className="input-btn-box">
          <input
            value={newData}
            onChange={inputText}
            type="text"
            id="grocery-items"
          />
          <button onClick={addItem} className="add-btn">
            Add Item
          </button>
        </div>
        {data.map((item, idx) => {
          return (
            <Item
              deleteItems={(e) => {
                deleteItems(e, idx);
              }}
              key={idx}
              item={item}
            ></Item>
          );
        })}
      </div>
    </>
  );
}

export default App;
