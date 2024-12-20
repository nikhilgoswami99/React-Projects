import styles from "./nav.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo_container}>
          <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
          <p>GeekFoods</p>
        </div>
        <div className={styles.nav_sections}>
          <a id={styles.blue} href="">Home</a>
          <a href="#">Quote</a>
          <a href="#">Resturants</a>
          <a href="#">Foods</a>
          <a href="#">Contact</a>
        </div>
        <button className={styles.navbar_btn}>Get Started</button>
      </nav>
    </>
  );
}

export default Navbar;
