import styles from './nav.module.css'

function Navbar()
{
    return <>
    <nav className={styles.navbar}>
        <h4 className={styles.heading}>Use Reducer</h4>
        <div className={styles.cart_box}>
        <img className={styles.cart_img} src="https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-Cart-Plus-icon.png" alt="" />
        <p className={styles.total_items}>4</p>
        </div>
    </nav>
    </>
}

export default Navbar