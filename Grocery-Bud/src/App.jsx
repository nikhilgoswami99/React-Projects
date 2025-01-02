import { useEffect, useState } from "react";
import "./App.css";
import Item from "./componenets/grocery-items/item";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");

  useEffect(() => {
    let savedData = JSON.parse(localStorage.getItem("items")) || [];
    setData(savedData);
  }, [newData]);

  function addItem() {
    if (newData) {
      let newArr = [...data, newData.trim()];
      setData(newArr);
      setNewData("");

      localStorage.setItem("items", JSON.stringify(newArr));
      notifySuccess();
    } else {
      notifyInfo();
    }
  }

  // logic for taking input
  function inputText(e) {
    setNewData(e.target.value);
  }

  //logic for deleting items
  function deleteItems(idx) {
    let arr = data.filter((item, index) => {
      if (index !== idx) {
        return item;
      }
    });
    localStorage.setItem("items", JSON.stringify(arr));
    notifyError();
    setData(arr);
  }

  const handleKeyPress = (e) => {
    console.log(e.key);

    if (e.key === "Enter") {
      addItem();
    }
  };

  const notifySuccess = () => toast.success("Success! Task completed.");
  const notifyError = () => toast.error("Item deleted successfully");
  const notifyInfo = () => toast.info("Please provide a value");

  return (
    <>
      <div className="container">
        <h2>My Grocery List</h2>
        <div className="input-btn-box">
          <input
            onKeyDown={handleKeyPress}
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
              deleteItems={() => {
                deleteItems(idx);
              }}
              key={idx}
              item={item}
            ></Item>
          );
        })}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      ></ToastContainer>
    </>
  );
}

export default App;
