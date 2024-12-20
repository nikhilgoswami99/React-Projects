import styles from "./hero.module.css";

const Hero_Section = () => {
  return (
    <>
      <div className={styles.hero_section}>
        <div className={styles.hero_content}>
            <h1 id={styles.black_heading}>Let us find your</h1>
            <h1 id={styles.pink_heading}>Forever Food.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>Nesciunt illo tenetur fuga ducimus numquam ea!</p>
            <div className={styles.hero_buttons}>
                <button id={styles.pink_btn}>Search Now</button>
                <button id={styles.white_btn}>Know more</button>
            </div>
        </div>
      </div>
    </>
  );
};


export default Hero_Section