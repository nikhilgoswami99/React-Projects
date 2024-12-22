import styles from "./Card.module.css";

const Card = (props) => {
    console.log(props);
    
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.top_left}>
              <img
                src={props.poster_url}
                alt=""
              />
            </div>
            <div className={styles.top_right}>
              <div className={styles.top_right_above}>
                <h1>{props.title}</h1>
                <p>{props.release_date.slice(0 , 4)} , {props.director}</p>
              </div>
              <div className={styles.top_right_below}>
                <p>{props.rating}</p>
                <div>{
                    // console.log(props.genre)
                    
                    props.genre.map((ele) =>{
                        return <span>{`${ele} `}</span>
                    })
                    }</div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <p>
              {props.description}
            </p>
            <div className={styles.icons}>
            <svg  fill="grey" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
<path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
</svg>
🩶
<svg fill="grey" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
    <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"></path>
</svg>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img
            src={props.poster_url}
            alt=""
          />
          <div className={styles.abs}></div>
        </div>
      </div>
    </>
  );
};

export default Card;