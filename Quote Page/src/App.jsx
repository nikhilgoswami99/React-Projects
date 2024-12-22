import styles from "./App.module.css";
import quotesData from "./quotesData.json";
import Quote_Card from "./Components/quote card/card";
import Navbar from "./Components/navbar/nav";
import Footer from "./Components/footer/footer"
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.card_container}>
        {quotesData.map((obj, index) => {
          return <Quote_Card {...obj} />;
        })}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
