import styles from "./card.module.css";

function Card(props) {
// console.log(props);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.item_content}>
          <img className={styles.item_img} src={props.img_link} alt="" />

          <div className={styles.item_info}>
            <h5 className={styles.item_name}>{props.name}</h5>

            <span className={styles.item_price}>{props.price}</span>

            <button onClick={props.deleteCard} className={styles.remove_button}>remove</button>
          </div>
        </div>

        <div className={styles.item_btns}>
          <button className={styles.add_btn}>-</button>

          <span className={styles.item_quantity}>1</span>

          <button className={styles.remove_btn}>+</button>
        </div>
      </div>

    </>
  );
}

export default Card;
