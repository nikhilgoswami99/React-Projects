import styles from "./App.module.css";
import Navbar from "./components/navbar/nav";
import Card from "./components/card/card";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className={styles.card_container}>
    <Card></Card>
    </div>
    
    </>
  );
}

export default App;
