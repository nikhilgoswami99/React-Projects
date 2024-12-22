import styles from "./card.module.css";

function Quote_Card(props) {
  return (
    <>
      <div className={styles.quote_card}>
        <h5 className={styles.quote}>{props.quote}</h5>
        <p className={styles.writer}>{props.writer}</p>
      </div>
    </>
  );
}

export default Quote_Card;
